import express from "express";
const genreRouter = express.Router();

import { getAllGenres } from "../controllers/genreController";

genreRouter.route("/").get(getAllGenres);

export { genreRouter };
