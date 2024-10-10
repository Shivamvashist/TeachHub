const { Router } = require("express");

const adminRouter = Router();

adminRouter.post("/signup",function(req,res){
    res.json({
        msg:"endpoint"
      }) 
})

adminRouter.post("/signin",function(req,res){
    res.json({
        msg:"endpoint"
      }) 
})

adminRouter.post("/courses",function(req,res){
    res.json({
        msg:"endpoint"
      }) 
})

adminRouter.put("/courses",function(req,res){
    res.json({
        msg:"endpoint"
      }) 
})

adminRouter.get("/courses",function(req,res){
    res.json({
        msg:"endpoint"
      }) 
})



module.exports = {
    adminRouter:adminRouter
}