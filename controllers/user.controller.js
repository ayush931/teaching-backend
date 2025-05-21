import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export async function register(req, res) {
  try {
    const { name, email, password, phone } = req.body

    if (!name || !email || !password || !phone) {
      return res.json({
        message: "Data is missing"
      })
    }

    const checkUser = await UserModel.findOne({ email: email });

    if (checkUser) {
      return res.json({
        message: "Already registered please login"
      })
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await new UserModel({
      name: name,
      email: email,
      password: hashPassword,
      phone: phone
    })

    if (!newUser) {
      return res.json({
        message: "Not able to register, please try again"
      })
    }

    const accessToken = jwt.sign({
      email: newUser.email,
    }, process.env.JWT_PASSWORD, {
      expiresIn: "7d"
    })

    await newUser.save();

    return res.json({
      message: "Registered successfully",
      accessToken
    })
  } catch (error) {
    console.log(error)
    return res.json({
      error
    })
  }

}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        message: "Please provide details"
      })
    }

    const user = await UserModel.findOne({ email: email }).select("+password");
    if (!user) {
      return res.json({
        message: "Not registered"
      })
    }

    const comparePassword = await bcrypt.compare(password, user.password)

    if (!comparePassword) {
      return res.json({
        message: "Invalid credentials"
      })
    }

    const accessToken = jwt.sign({
      email: newUser.email,
    }, process.env.JWT_PASSWORD, {
      expiresIn: "7d"
    })


    res.cookie("accessToken", accessToken)

    return res.json({
      message: "Logged in successfully"
    })
  } catch (error) {
    console.log(error)
    return res.json({
      message: "Internal server error"
    })
  }
}