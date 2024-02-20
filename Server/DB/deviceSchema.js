import mongoose from 'mongoose'

const waterUsageSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    waterUsage: {
        type: Number,
        required: true
    }
});

const deviceSchema = new mongoose.Schema({
    deviceId: {
        type: String,
        required: true
    },
    data: [waterUsageSchema] // Array of waterUsage objects
});

const deviceModel = mongoose.model('Device', deviceSchema);

export default deviceModel;