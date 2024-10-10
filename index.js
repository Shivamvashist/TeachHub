const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

//Routes
const {userRoute} = require("./routes/user")
const {courseRoute} = require("./routes/course")

app.use("/user",userRoute);
app.use("/course",courseRoute);

app.listen(3000);