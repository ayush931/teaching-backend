import mongoose from "mongoose";

// async -> allows operations to run without blocking the execution of the rest of the program
// await (with async) -> will stop or block the execution

// this variable connectionToDB will help the backend to connect with MongoDB database
async function connectionToDB () {
  // here i am connecting to DB with the MONGODB_URL which is present in .env file
  const connection = await mongoose.connect(process.env.MONGODB_URL) // block the execution of code until the result is found
  // checking if database is connected or not
  if (connection) {
    console.log("DB is connected");
  }
  else {
    console.log("DB is not connected")
  }
}

export default connectionToDB;