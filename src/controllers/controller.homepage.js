import asyncHandler from "../utils/asynchandler.js"
import db from "../db/db.connect.js"
import homepage_query from "../db/homeQuery.js";
import tokens from "../utils/tokenGenerator.js"


const homepage = asyncHandler(async(req,res)=>{
    let offset = 0;
    const {rows} = await db.query(homepage_query,[offset]);
    res.render("homepage.ejs",{data:rows , page:1,logged:req.isLoggedIn});
})

const nextPage = asyncHandler(async(req,res)=>{
    let pageno = parseInt(req.query.pageno)
    pageno+=1;
    let offset = (pageno-1)*6
    const {rows} = await db.query(homepage_query,[offset]);
    res.render("homepage.ejs",{data:rows , page:pageno,logged:req.isloggedin});
})

const prevPage = asyncHandler(async(req,res)=>{
    let pageno = parseInt(req.query.pageno)
    pageno-=1;
    let offset = (pageno-1)*6
    const {rows} = await db.query(homepage_query,[offset]);
    res.render("homepage.ejs",{data:rows , page:pageno,logged:req.isloggedin});
})






export  {homepage,nextPage,prevPage}