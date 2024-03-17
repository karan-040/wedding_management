import Jwt from "jsonwebtoken";

const isLogged = (req, res, next) => {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    // First, try to verify the access token
    if (accessToken) {
        Jwt.verify(accessToken, process.env.ACCESS_TOKEN, (err, user) => {
            if (err) {
                // Access token is invalid or expired
               req.isLoggedIn = 0;
               return next()
            } else {
                // Access token is valid
                req.isLoggedIn = 1;
                req.user = user; // Optionally store user info
                return next();
            }
        });
    } else {
        // No access token present
        req.isLoggedIn = 0
        next()
    }
};

export default isLogged;
