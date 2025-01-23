const {Router} = require("express");
const { userModel } = require("../db");
const { z } = require("zod"); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const JWT_SECRET_USER = `${process.env.JWT_USER}`;
const { JWT_SECRET_USER } = require("../config");
const { userMiddleware } = require("../middleware/user");

const userRouter = Router();

userRouter.post("/signup",async function(req,res){

    // const firstname = req.body.firstname;
    // const lastname = req.body.lastname;
    // const email = req.body.email;
    // const username = req.body.username;
    // const password = req.body.password;    

    const requiredBody = z.object({
        email:z.string().email(),
        username:z.string(),
        password:z.string().min(8)
    })
    
    const validationResult = requiredBody.safeParse(req.body);

    if(!validationResult.success){
        res.status(400).json({
            msg:"invalid data",
            error:validationResult.error
        })
        return
    }

    let errorThrown = false;
    try{
        const { firstname, lastname, email, username, password } = req.body;

        const hashedPass = await bcrypt.hash(password,6);
    
        await userModel.create({
            // firstname,
            // lastname,
            email,
            username,
            password:hashedPass
        })
    
    }catch(e){
        res.status(409).json({
            msg:"user already exists!"
            
        })
        errorThrown = true
    }
    
    if(!errorThrown){
        res.json({
            msg:"Successfully Signed Up!"
          })
    }
     
})

userRouter.post("/signin",async function(req,res){

    const requiredBody = z.object({
        username: z.string(),
        password: z.string().min(8)
    })
    const validationResult1 = requiredBody.safeParse(req.body)

    if(!validationResult1.success){
        return res.status(409).json({
            msg:"incorrect format",
            error:validationResult1.error.issues[0].message
        })
    }
    let errorchk = false;
    try{
        const { username,password } = req.body;
        // const hashPass = bcrypt.hash(password,5);

        const user = await userModel.findOne({
            username:username,
        })

        if (!user) {
            return res.status(400).json({ error: "User not found" });
          }

        const validPass = await bcrypt.compare(password, user.password);
        if(!validPass){
            return res.status(401).json({ error: "Invalid password" });
        }
        if(validPass){
            const token = jwt.sign({
                id:user._id,
                username:username
            },JWT_SECRET_USER,{expiresIn:"1h"});

            return res
            .cookie("token", token,{
                httpOnly: true,
                maxAge: 3600000, 
            })
            .json({
                msg: "Successfully Logged in",
                token: token,
                redirectUrl: "http://localhost:5173/user/dashboard",
            })
            // .redirect("http://localhost:5173/user/dashboard");
            
        } else {
            return res.status(403).json({
                msg:"incorrect Credentials!"
            })
        }

    }catch(e){
        errorchk = true;

        return res.json({
            msg:"some try catch error!"
        })
    }
    // if(!errorchk){
    //     res.json({
    //         msg:"Signed In!"
    //       }) 
    // }

})

userRouter.get("/purchases",function(req,res){
    res.json({
        msg:"endpoint"
      })
})


module.exports = {
    userRouter : userRouter
}