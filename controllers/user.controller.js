import UserModel from "../models/user.model.js";

export async function register(req, res) {
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

  const newUser = await new UserModel({
    name: name,
    email: email,
    password: password,
    phone: phone
  })

  if (!newUser) {
    return res.json({
      message: "Not able to register, please try again"
    })
  }

  await newUser.save();

  return res.json({
    message: "Registered successfully"
  })

}