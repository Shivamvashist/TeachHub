const { Router } = require("express");
const { adminModel, courseModel } = require("../db")

const jwt = require("jsonwebtoken");
// const JWT_SECRET_ADMIN = `${process.env.JWT_ADMIN}`;
const { JWT_SECRET_ADMIN } = require("../config")
const { z } = require("zod"); 
const bcrypt = require("bcrypt");
const { adminMiddleware } = require("../middleware/admin");


const adminRouter = Router();

adminRouter.post("/signup",async function(req,res){
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

        const hashedPass = await bcrypt.hash(password,5);//plain pass and salt rounds
    
        await adminModel.create({
            firstname,
            lastname,
            email,
            username,
            password:hashedPass
        })
    
    }catch(e){
        res.json({
            msg:"Admin already exists!"
            
        })
        errorThrown = true
    }
    
    if(!errorThrown){
        res.json({
            msg:"SignedUp!"
          })
    }
})

adminRouter.post("/signin",async function(req,res){
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

        const user = await adminModel.findOne({
            username:username,
        })

        if (!user) {
            return res.status(400).json({ error: "User not found" });
          }

        const validPass = await bcrypt.compare(password, user.password); // checking hashed pass.. compare input pass to hashed pass from db
        if(!validPass){
            return res.status(401).json({ error: "Invalid password" });
        }
        if(validPass){
            const token = jwt.sign({
                id:user._id,
                username:username
            },JWT_SECRET_ADMIN);

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
})

adminRouter.post("/courses",adminMiddleware,async function(req,res){
    const adminId = req.userId;

    const validCourse = z.object({
        title: z.string(),
        description: z.string().min(20),
        price: z.number()
    })

    const courseValidationResult = validCourse.safeParse(req.body);

    if(!courseValidationResult.success){
        res.json({
            msg:"invalid course",
            error:courseValidationResult.error
        })
        return
    }
    let errorchk = false;
    try {
    const {title, description, imageUrl, price} = req.body;

    await courseModel.create({
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId:adminId
    })

    
    } catch (e) {
        res.json({
            msg:"course creation failed!"
        })
        errorchk = true
    }

    if(!errorchk){
        res.json({
            msg:"Course created!",
            courseId: course._id
          }) 
    }
    
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