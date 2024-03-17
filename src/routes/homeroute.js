import { Router } from "express";
import { homepage , nextPage, prevPage } from "../controllers/controller.homepage.js";
import isLogged from "../middlewares/isLogged.js";
const router = Router()

router.route("/homepage").get(isLogged,homepage)
router.route("/next").get(isLogged,nextPage)
router.route("/prev").get(isLogged,prevPage)
export default router