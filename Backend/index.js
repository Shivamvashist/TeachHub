const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

require('dotenv').config();
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;

const { userModel, adminModel, courseModel, purchaseModel } = require("./db")

const app = express();
app.use(express.json());
app.use(cors());


//Routes
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);



async function main(){
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/TeachHub-Database`);
    app.listen(3000);
}
main();