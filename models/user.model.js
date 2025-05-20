import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
// crud -> create, read, update, delete