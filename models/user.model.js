import mongoose from "mongoose";

// Schema -> which field i am storing in the database with the dataype
// for the validation like the user is sending email in the email fields and many other has been done by the package called zod.

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    // unique: true
  },
  phone: {
    type: Number,
    // required: true
  },
  password: {
    type: String,
    required: true,
    // maxLength: [15, "Password cannot exceed the 15 letter"]
    // minLength: [5, "Minimum 6 letter is required"]
  }
})

const UserModel = mongoose.model("UserSchema", userSchema);
export default UserModel;