import express from "express"
import version from "./constants.js"
import cookieParser from "cookie-parser";
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/public'));
app.use(cookieParser());

app.set('view engine', 'ejs');

// Change the views directory
app.set('views', './src/views');

//import routes
import homeRouter from "./routes/homeroute.js"
import userRouter from "./routes/userroute.js"
import filterRouter from "./routes/filterRoute.js"
import wishlistRouter from "./routes/wishlistroute.js"

app.use(version,homeRouter)
app.use(version,userRouter)
app.use(version,filterRouter)
app.use(version,wishlistRouter)


export default app;
