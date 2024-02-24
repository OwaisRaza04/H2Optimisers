import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "./DB/connect.js";
import reportModel from "./DB/reportSchema.js";
import userModel from "./DB/userSchema.js";
import { resetPasswordMail, sendMail } from "./email.js";
import deviceModel from "./DB/deviceSchema.js";
import connectAndSubscribe from "./getawsdata.js";

const app = new express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

async function subscribeAndHandle() {
  try {
    const pH = Math.random() * (8.5 - 6.5) + 6.5;
    const turbidity = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    const chlorine = Math.random() * (4 - 0.2) + 0.2;

    const device = await connectAndSubscribe();
    console.log("Connected and subscribed successfully.");
    console.log(device);
    let waterUsage = JSON.parse(device).totalLitres_water;
    waterUsage.pH = pH;
    waterUsage.turbidity = turbidity;
    waterUsage.chlorine = chlorine;

    const deviceId = "owaisraza7297@gmail.com";
    const Entry = await deviceModel.findOne({ deviceId });

    if (!device) {
      console.error("Device not found");
      return;
    }

    // Push a new waterUsage entry into the data array
    Entry.data.push({
      date: new Date(),
      waterUsage: waterUsage, // Update with the actual water usage value
    });

    // Save the updated device entry
    await Entry.save();
  } catch (error) {
    console.error("Error:", error);
  }
}
// subscribeAndHandle();
// // setInterval(subscribeAndHandle, 86400000);
// setInterval(subscribeAndHandle, 1000);

app.post("/getDeviceData", async (req, res) => {
  const deviceId = req.body.mail;
  try {
    const usage = await deviceModel.findOne({ deviceId });
    console.log(usage);
    res.status(200).json({ usage });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Register");
});

app.post("/authenticate", async (req, res) => {
  const token = req.body.token;
  try {
    const tokenbody = jwt.verify(token, "secretOrPrivateKey");

    res.status(200).json({ email: tokenbody.email });
  } catch (err) {
    console.log("Not verified");
    res.status(401).json({ Message: "Verification failed" });
  }
});

app.post("/register", async (req, res) => {
  var { fullName, email, mobileNumber, meterId, password } = req.body;
  try {
    const existsuser = await userModel.findOne({ email: email });

    if (!existsuser) {
      const salt = await bcrypt.genSalt(10);

      password = await bcrypt.hash(password, salt);

      const newUser = new userModel({
        fullName: fullName,
        email: email,
        mobileNumber: mobileNumber,
        meterId: meterId,
        password: password,
      });
      const token = jwt.sign({ email: newUser.email }, "secretOrPrivateKey");
      sendMail(fullName, email);
      await newUser.save();
      res.status(200).json({ token: token });
    } else {
      res.status(400).json({ message: "User already exists." });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/getalluserdata", async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).json({ users });
  }
  catch (err) {
    console.log(err)
  }
});


app.post("/getalldevicedata", async (req, res) => {
  try {
    const users = await deviceModel.find({});
    res.status(200).json({ users });
  } 
  catch (err) {
    console.log(err)
  }
});

app.post("/login", async (req, res) => {
  var { email, password } = req.body;

  const user = await userModel.findOne({ email: email, isVerified: true });
  if (user) {
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        const token = jwt.sign({ email: user.email }, "secretOrPrivateKey");
        res.status(200).json({ token: token, username: user.fullName });
      } else {
        res.status(400).json({ message: "Wrong Password!!!" });
      }
    });
  } else {
    res.status(400).json({ message: "Account doesn't exist!!!" });
  }
});
app.post("/verifyEmail", async (req, res) => {
  const token = req.body.token;
  const tokenbody = jwt.verify(token, "secretOrPrivateKey");
  const user = await userModel.findOneAndUpdate(
    { email: tokenbody.email },
    { isVerified: true }
  );
  res.status(200).json({ message: "email verification succesfull" });
});

app.post("/resetPassword", async (req, res) => {
  const email = req.body.email;
  resetPasswordMail(email);
  const token = jwt.sign({ email: email }, "secretOrPrivateKey");
  res.status(200).json({ token });
});

app.post("/report", async (req, res) => {
  const token = req.body.token;
  const formBody = req.body.formBody;
  const user = await userModel.find({ email: token.email });
  const report = new reportModel({
    email: user.email,
    address: formBody.address,
    city: formBody.city,
    state: formBody.state,
    description: formBody.description,
    meterId: user.meterId,
  });
  await report.save();
  res.status(200).json({ message: "Report Submitted Succesfully" });
});

app.post("/getuserdata", async (req, res) => {
  var mail = req.body.mail;
  try {
    const user = await userModel.findOne({ email: mail });
    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
  }
});

app.post("/newPass", async (req, res) => {
  const token = req.body.token;
  const newPass = req.body.newPass;
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(newPass, salt);
  const tokenbody = jwt.verify(token, "secretOrPrivateKey");

  const user = await userModel.findOneAndUpdate(
    { email: tokenbody.email },
    { password: password }
  );
  res.status(200).json({ message: "Password Changed succesfully" });
});

app.listen(3000, () => {
  console.log("Server Running at port 3000");
});
