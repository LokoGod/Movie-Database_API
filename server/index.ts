import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

// Importing custom routes
import { genreRouter } from "./routes/genreRoutes";
import { movieRouter } from "./routes/movieRoutes";
import { directorRouter } from "./routes/directorRoutes";

// Instances
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API Routing
app.use("/api/v1/genre", genreRouter);
app.use("/api/v1/movie", movieRouter);
app.use("/api/v1/director", directorRouter);

const port = process.env.PORT || 9000;

// Spin-up server
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
