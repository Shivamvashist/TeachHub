const {Router} = require("express");
const { userModel } = require("../db");
const { z } = require("zod"); 
const bcrypt = require("bcrypt");

const userRouter = Router();

userRouter.post("/signup",async function(req,res){

    // const firstname = req.body.firstname;
    // const lastname = req.body.lastname;
    // const email = req.body.email;
    // const username = req.body.username;
    // const password = req.body.password;    

    const requiredBody = z.object({
        firstname:z.string(),
        lastname:z.string(),
        email:z.string().email(),
        username:z.string(),
        password:z.string().min(8)
    })
    const validationResult = requiredBody.safeParse(req.body);

    if(!validationResult.success){
        res.json({
            msg:"invalid data",
            error:validationResult.error
        })
        return
    }

    let errorThrown = false;
    try{
        const { firstname, lastname, email, username, password } = req.body;

        const hashedPass = await bcrypt.hash(password,5);
    
        await userModel.create({
            firstname,
            lastname,
            email,
            username,
            password:hashedPass
        })
    
    }catch(e){
        res.json({
            msg:"user already exists!"
            
        })
        errorThrown = true
    }
    
    if(!errorThrown){
        res.json({
            msg:"SignedUp!"
          })
    }
     
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