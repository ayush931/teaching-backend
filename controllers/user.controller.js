import UserModel from "../models/user.model.js";

export async function register(req, res) {
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return res.status(401).json({
      message: "Please provide the details",
      success: false,
      error: true
    })
  }

  const newUser = await new UserModel({
    name: name,
    email: email,
    password: password
  });

  await newUser.save();

  if (!newUser) {
    return res.status(400).json({
      message: "User not registered",
      success: false,
      error: true
    })
  }

  return res.status(200).json({
    message: "User registered successfully",
    error: false,
    success: true
  })
}