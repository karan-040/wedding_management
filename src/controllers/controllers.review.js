import asyncHandler from "../utils/asynchandler.js";
import db from "../db/db.connect.js";

const reviewPage = (req,res)=>{
    console.log(req.body.temp);
    res.render("reviews.ejs",{id:req.body.temp});
}

const writeReview = asyncHandler(async(req,res)=>{
    let halll_id = req.body.halll_id;
    let stars = req.body.stars;
    let message = req.body.message;
    await db.query("INSERT INTO ratings (hall_id, rating, feedback) VALUES ($1, $2, $3);",[halll_id,stars,message]);
    res.redirect("/v1/homepage")
})




export {reviewPage , writeReview}