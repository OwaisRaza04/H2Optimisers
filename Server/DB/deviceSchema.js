import mongoose from 'mongoose'

const waterUsageSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    waterUsage: {
        type: Number,
        required: true
    },
    chlorine:{
        type:Number,
        default:0.4
    },
    turbidity:{
        type:Number,
        default:2
    },
    pH:{
        type:Number,
        default:7.5
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