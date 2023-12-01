import genreModel from "../models/genreModel";

const getAllGenres = async (req: any, res: any) => {
  try {
    const genres = await genreModel.allGenres();
    res.status(200).json({ genres });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getAllGenres };
