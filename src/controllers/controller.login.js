import asyncHandler from "../utils/asynchandler.js"
import db from "../db/db.connect.js"
import bcrypt from "bcrypt"
import tokens from "../utils/tokenGenerator.js"
import Jwt from "jsonwebtoken"
const loginPage = (req,res)=>{
    //first check if the user has token then directly log them in 
    const aT = req.cookies.accessToken
    const rT = req.cookies.refreshToken
    if (!rT) {
        //redirect to login page as we dont have any information regarding user
        return res.render('login.ejs')
    }
    else{
        //we have refresh token so give new accesstoken to user by verifying the refresh token
        Jwt.verify(rT, process.env.REFRESH_TOKEN, (err, user) => {
            if (err) {
                return res.render('login.ejs');
            }
            const { accessToken, refreshToken } = tokens(user.user_id);
            // Set cookies
            res.cookie('accessToken', accessToken, { httpOnly: true, maxAge: 15* 60 * 1000 })
            res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
            return res.redirect('/v1/homepage')
        })
    }
}

const loginUser = asyncHandler(async(req,res)=>{
    const username = req.body.username;
    const pass = req.body.password;
    const data = await db.query("SELECT * FROM users WHERE username = $1",[username])
    if(!data.rows.length){
        return res.render('login.ejs',{data:"username doesn't exist"});
    }
    let password = data.rows[0].password
    const match = await bcrypt.compare(pass, password);
    if(match){
        const { accessToken, refreshToken } = tokens(username);
        // Set cookies
        res.cookie('accessToken', accessToken, { httpOnly: true, maxAge: 15 * 1000 })
        res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 })
        res.redirect('/v1/homepage');//correct password
    }
    else{
        res.render('login.ejs',{data:"incorrect password"}); //wrong password
    }
})
















export {loginPage,loginUser}