import mongoose from "mongoose";

mongoose.set("strictQuery", true);
const carrierApplySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    jobRole: String,
    resume: String,
})

const carrierApply = mongoose.model('carrierApply', carrierApplySchema);
export default carrierApply
