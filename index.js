const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

//Routes
const {userRoute} = require("./routes/user")
const {courseRoute} = require("./routes/course")

app.use("/api/v1/user",userRoute);
app.use("/api/v1/course",courseRoute);

app.listen(3000);