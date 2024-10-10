const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require('dotenv').config();


const { userModel, adminModel, courseModel, purchaseModel } = require("./db")

const app = express();
app.use(express.json());


//Routes
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);

app.listen(3000);

async function main(){
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/TeachHub-Database`);
    app.listen(3001);
}
main();