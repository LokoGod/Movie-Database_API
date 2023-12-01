import genreRepository from "../repositories/genreRepository";

const getAllGenres = async (req: any, res: any) => {
  try {
    const genres = await genreRepository.allGenres();
    res.status(200).json({ genres });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createGenre = async (req: any, res: any) => {
  try {
    const { type } = req.body;
    const genres = await genreRepository.postGenre({ type });
    res.status(201).json({ genres });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSpecificGenre = async (req: any, res: any) => {
  try {
    const genres = await genreRepository.specificGenre({});
    res.status(200).json({ genres });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllGenres, createGenre, getSpecificGenre };
