import { Router } from "express";
import {loginPage , loginUser} from "../controllers/controller.login.js";
import {registerPage, registerUser} from "../controllers/controller.registerUser.js";
import logout from "../controllers/controller.logout.js"
import verifyToken from "../middlewares/authorisation.js";
import {reviewPage , writeReview} from "../controllers/controllers.review.js";

const router = Router()

router.route("/login").get(loginPage).post(loginUser)
router.route("/register").get(registerPage).post(registerUser)
router.route("/logout").get(logout)
router.route("/reviewPage").post(reviewPage)
router.route("/writeReview").post(writeReview)
export default router