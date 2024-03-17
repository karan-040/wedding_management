import asyncHandler from "../utils/asynchandler.js";
import db from "../db/db.connect.js";
import bcrypt from "bcrypt"

const registerPage= (req,res)=>{
    res.render("register.ejs")
}

const registerUser = asyncHandler(async(req,res)=>{
    const {name, email, password1, password2} = req.body
    console.log(name,email,password1,password2)
    const {rows} = await db.query("SELECT * FROM users WHERE email = $1",[email]);
    if(rows.length){
        res.render('register.ejs',{data:"email already registered"});
    }
    else if(password1 !==password2){
        res.render('register.ejs',{data:"passwords doesn't match"});
    }
    else{
        //encrypt the password
        const hashedPass = await bcrypt.hash(password1,parseInt(process.env.SALT_ROUNDS));
        await db.query("INSERT INTO users (email, username, password) VALUES ($1, $2, $3)",[email,name,hashedPass]);
        res.redirect('/v1/homepage');
    }
})



export {registerPage , registerUser};