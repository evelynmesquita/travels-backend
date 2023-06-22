import { Router } from "express";
import { getPassengersTravels } from "../controllers/passengers.controllers.js";

const postRoutes = Router();

postRoutes.get("/passengers/travels", getPassengersTravels);


export default postRoutes;
