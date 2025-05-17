import app from "./app.js";
// this import helps to access the value in the file .env file
import { config } from "dotenv";
import connectionToDB from "./database/dbConnection.js";
config()

const PORT = process.env.PORT // accessing the value of PORT from .env file

// running the backend
app.listen(PORT, async () => {
  // first connect to the database
  await connectionToDB();
  // then run the backend
  console.log(`App is listening on ${PORT}`)
})