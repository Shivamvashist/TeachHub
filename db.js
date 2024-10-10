const mongoose = require("mongoose");
const { Schema }= require("mongoose");

const ObjectId = mongoose.Types.ObjectId; 

// mongoose.connect("mongodb+srv://NinjaVashist:XhRKPWa2Lm8GcfiL@cluster0.abyyl.mongodb.net/TeachHub-Database");


const userSchema = new Schema({
    firstname:String,
    lastname:String,
    email:{type:String, unique: true},
    username:{type:String, unique: true},
    password:String,
    address:String
})


const adminSchema = new Schema({
    firstname:String,
    lastname:String,
    email:{type:String, unique: true},
    username:{type:String, unique: true},
    password:String,
    address:String
})


const courseSchema = new Schema({
    title:String,
    Description:String,
    price:Number,
    imgUrl:String,
    creatorId: ObjectId
    
})


const purchaseSchema = new Schema({
    userId: ObjectId,
    creatorId: ObjectId
})

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}