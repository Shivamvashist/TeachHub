const {Router} = require("express");

const userRouter = Router();

userRouter.post("/signup",function(req,res){
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;    

 

       
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