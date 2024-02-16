import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "./DB/connect.js";
import reportModel from "./DB/reportSchema.js";
import userModel from "./DB/userSchema.js";
import { resetPasswordMail, sendMail } from "./email.js";

const app = new express();

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

app.post("/login", async (req, res) => {
  var { email, password } = req.body;

  const user = await userModel.findOne({ email: email, isVerified: true });
  if (user) {
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        res.status(200).json(user);
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
