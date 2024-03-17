const logout = (req,res)=>{
    console.log("logged out success")
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.redirect("/v1/homepage")
}
export default logout