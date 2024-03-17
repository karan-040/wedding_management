import Jwt from "jsonwebtoken";


const verifyToken = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.cookies.accessToken

    if (token == null) {
        return res.redirect('/v1/login')
    }

    Jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) {
            return res.redirect('/v1/login'); // If token is not valid or expired, return Forbidden
        }

        req.user = user; // Add the user payload to the request object
        next(); // Continue to the next middleware/route handler
    });
};

export default verifyToken