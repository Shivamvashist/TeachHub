const {Router} = require("express");

const userRouter = Router();

userRouter.post("/signup",function(req,res){
    res.json({
        msg:"endpoint"
      }) 
})

userRouter.post("/signin",function(req,res){
    res.json({
        msg:"endpoint"
      }) 
})

userRouter.get("/purchases",function(req,res){
    res.json({
        msg:"endpoint"
      }) 
})


module.exports = {
    userRouter : userRouter
}