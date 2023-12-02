import movieRepository from "../repositories/movieRepository";

const getAllMovies = async (req: any, res: any) => {
  try {
    const movies = await movieRepository.allMovies();
    res.status(200).json({ movies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllMovies };
