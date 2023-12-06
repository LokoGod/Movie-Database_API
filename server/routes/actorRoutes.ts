import express from "express";
const actorRoutes = express.Router();

import {
  getAllActors,
  createActor,
  getSpecificActor,
} from "../controllers/actorController";

actorRoutes.route("/").get(getAllActors).post(createActor);
actorRoutes.route("/:id").get(getSpecificActor);

export { actorRoutes };
