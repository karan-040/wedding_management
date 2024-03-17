import asyncHandler from "../utils/asynchandler.js";
import db from "../db/db.connect.js";
import wish_query from "../db/wishlistQuery.js";

const wishlist = asyncHandler(async(req,res)=>{
    // const mail = req.body.mail_addr;
    const hall_id = req.body.hall;
    console.log(hall_id)
    const user  = req.user.user_id
    const data = await db.query("select email from users where username = $1",[user])
    const mail = data.rows[0].email
    const color = req.body.color;
    if(color==="red"){
        await db.query("INSERT INTO favorites (email, hall_id) VALUES ($1, $2)",[mail,hall_id]);
        return res.status(200).json({ message: 'inserted into wishlist' });
    }
    else{
        await db.query("DELETE FROM favorites WHERE email = $1 AND hall_id = $2",[mail,hall_id]);
        return res.status(200).json({ message: 'removed from wishlist' });
    }
})

const showWishlist = asyncHandler(async(req,res)=>{
    const user = req.user.user_id
    const data = await db.query("select email from users where username = $1",[user])
    const mail = data.rows[0].email
    const {rows} = await db.query(wish_query,[mail]);

    res.render("homepage.ejs",{data: rows,page:1,logged:req.isLoggedIn});
})

export {wishlist , showWishlist}