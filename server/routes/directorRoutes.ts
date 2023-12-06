import express from "express";
const directorRouter = express.Router();

import {
  getAllDirectors,
  createDirector,
  getSpecificDirector,
} from "../controllers/directorController";

directorRouter.route("/").get(getAllDirectors).post(createDirector);
directorRouter.route("/:id").get(getSpecificDirector);

export { directorRouter };
