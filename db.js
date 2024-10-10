const { Schema }= require("mongoose") ;
const ObjectId = mongoose.types.ObjectId; 
const userSchema = Schema({
    firstname:String,
    lastname:String,
    email:{type:String, unique: true},
    username:String,
    password:String,
    address:String
})


const adminSchema = Schema({
    firstname:String,
    lastname:String,
    email:{type:String, unique: true},
    username:String,
    password:String,
    address:String
})


const courseSchema = Schema({
    title:String,
    Description:String,
    price:Number,
    imgUrl:String,
    creatorId: ObjectId
    
})


const purchaseSchema = Schema({
    userId: ObjectId,
    creatorId: ObjectId
})

const userModel = mongoose.Model("user",userSchema);
const adminModel = mongoose.Model("user",adminSchema);
const courseModel = mongoose.Model("user",courseSchema);
const purchaseModel = mongoose.Model("user",purchaseSchema);