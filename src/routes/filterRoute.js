import { Router } from "express";
import {filterByCity, customFilter ,hall } from "../controllers/controller.filter.js";
import isLogged from "../middlewares/isLogged.js";
import verifyToken from "../middlewares/authorisation.js";

const router = Router()

router.route("/city").post(isLogged,filterByCity)
router.route("/custom").post(isLogged,customFilter)
router.route("/hall").post(verifyToken,hall)

export default router