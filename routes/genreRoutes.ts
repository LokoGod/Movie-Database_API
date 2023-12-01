import express from "express";
const genreRouter = express.Router();

import { createGenre, getAllGenres } from "../controllers/genreController";

genreRouter.route("/").get(getAllGenres).post(createGenre);

export { genreRouter };
