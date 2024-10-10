const {Router} = require("express");

const courseRoute = Router();

courseRoute.get("/preview",function(req,res){
  res.json({
    msg:"endpoint"
  })  
})

courseRoute.post("/purchase",function(req,res){
    res.json({
        msg:"endpoint"
      }) 
})



module.exports = {
    courseRoute:courseRoute
}