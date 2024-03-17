import { Router } from "express";
import {homepage} from "../controllers/controller.homepage.js";
import isLogged from "../middlewares/isLogged.js";
import {wishlist ,showWishlist} from "../controllers/controller.updateWishlist.js";
import verifyToken from "../middlewares/authorisation.js";


const router = Router()

router.route("/updateWishlist").post(verifyToken,wishlist)
router.route("/wishlist").get(verifyToken,isLogged,showWishlist)

export default router