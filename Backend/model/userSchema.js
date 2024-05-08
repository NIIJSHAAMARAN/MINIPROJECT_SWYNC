import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, require: true, unique: true }


})


export default mongoose.model('User',UserSchema)