import express from "express";
const movieRouter = express.Router();

import {
  getAllMovies,
  createMovie,
  getSpecificMovie,
} from "../controllers/movieController";

movieRouter.route("/").get(getAllMovies).post(createMovie);
movieRouter.route("/:id").get(getSpecificMovie);

export { movieRouter };
