const {Router} = require("express");

const userRoute = Router();

userRoute.post("/signup",function(req,res){
    res.json({
        msg:"endpoint"
      }) 
})

userRoute.post("/signin",function(req,res){
    res.json({
        msg:"endpoint"
      }) 
})

userRoute.get("/purchases",function(req,res){
    res.json({
        msg:"endpoint"
      }) 
})


module.exports = {
    userRoute : userRoute
}