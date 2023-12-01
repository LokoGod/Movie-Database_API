import express from "express";
const genreRouter = express.Router();

import {
  createGenre,
  getAllGenres,
  getSpecificGenre,
} from "../controllers/genreController";

genreRouter.route("/").get(getAllGenres).post(createGenre);
genreRouter.route("/:id").get(getSpecificGenre);

export { genreRouter };
