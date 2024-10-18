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

        const hashedPass = await bcrypt.hash(password,6);
    
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

userRouter.post("/signin",async function(req,res){

    const requiredBody = z.object({
        username: z.string(),
        password: z.string().min(8)
    })
    const validationResult1 = requiredBody.safeParse(req.body)

    if(!validationResult1.success){
        res.json({
            msg:"incorrect format",
            error:validationResult1.error.issues[0].message
        })
        return
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
            },JWT_SECRET_USER);

            res.json({
                msg:"Logged in",
                token: token
            })
        }else{
            res.status(403).json({
                msg:"incorrect Credentials!"
            })
        }

    }catch(e){
        res.json({
            msg:"some try catch error!"
        })
        errorchk = true;
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