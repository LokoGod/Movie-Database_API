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
    const { type, movies } = req.body;
    const genres = await genreRepository.postGenre( type , movies);
    res.status(201).json({ genres });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSpecificGenre = async (req: any, res: any) => {
  try {
    const id = Number(req.params.id);
    const genres = await genreRepository.specificGenre(id);
    res.status(200).json({ genres });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllGenres, createGenre, getSpecificGenre };
