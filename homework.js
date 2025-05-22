import bcrypt from "bcryptjs";

const password = "12345"
const confirmPassword = "12345"
const hashPassword = await bcrypt.hash(password, 10)
console.log(hashPassword)
const comparePassword = await bcrypt.compare(password, hashPassword)
console.log(comparePassword)

// TODO: req.query, req.params, req.body
// TODO: how to initiate a mongodb, and connect it to the compass
// TODO: do the comments in each major concept