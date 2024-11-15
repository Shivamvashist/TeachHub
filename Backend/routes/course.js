const {Router} = require("express");

const courseRouter = Router();

courseRouter.get("/preview",function(req,res){
  res.json({
    msg:"endpoint"
  })  
})

courseRouter.post("/purchase",function(req,res){
    res.json({
        msg:"endpoint"
      }) 
})



module.exports = {
    courseRouter:courseRouter
}