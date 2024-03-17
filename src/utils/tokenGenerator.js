import  Jwt  from "jsonwebtoken";

const tokens = (user_id)=>{
    const payload  = {user_id}
    const accessToken = Jwt.sign(payload,process.env.ACCESS_TOKEN,{expiresIn:'15m'})
    const refreshToken = Jwt.sign(payload,process.env.REFRESH_TOKEN,{expiresIn:'24h'})
    return ({accessToken,refreshToken})
}

export default tokens