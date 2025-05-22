import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export async function register(req, res) {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    return res.status(404).json({
      message: "Please provide all details"
    })
  }

  const checkUser = await UserModel.findOne({ email: email });

  if (checkUser) {
    return res.status(404).json({
      message: "Already Registered, login"
    })
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await new UserModel({
    name: name,
    email: email,
    password: hashPassword,
    phone: phone
  })

  if (!newUser) {
    return res.json({
      message: "User not creatd"
    })
  }

  const accessToken = jwt.sign(
    { id: newUser._id },
    process.env.JWT_PASSWORD,
    { expiresIn: "7d" }
  )

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Only secure in production
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 1 milliseond -> 7 days
  }

  res.cookie("accessToken", accessToken, cookieOptions);

  await newUser.save();

  return res.status(201).json({
    message: "Registered successfully"
  })

}

export async function login(req, res) {
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    return res.json({
      message: "Provide data"
    })
  }

  const user = await UserModel.findOne({ email: email }).select("+password");

  if (!user) {
    return res.json({
      message: "Register first"
    })
  }

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    return res.json({
      message: "Invalid credentials"
    })
  }

  const accessToken = jwt.sign(
    { id: user._id },
    process.env.JWT_PASSWORD,
    { expiresIn: "7d" }
  )

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Only secure in production
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 1 milliseond -> 7 days
  }

  res.cookie("accessToken", accessToken, cookieOptions);

  return res.json({
    message: "Logged in successfully"
  })
}

export async function logout(req, res) {
  const userId = req.userId;
  console.log(userId);

  if (!userId) {
    return res.json({
      message: "Please provide id"
    })
  }
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Only secure in production
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 1 milliseond -> 7 days
  }
  res.clearCookie("accessToken", cookieOptions);

  return res.json({
    message: "Logged out"
  })
}