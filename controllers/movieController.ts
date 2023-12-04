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

const createMovie = async (req: any, res: any) => {
  try {
    const { title, genreIds } = req.body;

    const createdMovie = await movieRepository.postMovie({
      data: {
        title,
        genre: {
          connect: genreIds.map((id: any) => ({ id })),
        },
      },
      include: {
        genre: true,
      },
    });

    res.status(201).json(createdMovie);
  } catch (error) {
    console.error('Error creating movie:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getSpecificMovie = async (req: any, res: any) => {
  try {
    const id = Number(req.params.id);
    const movies = await movieRepository.specificMovie(id);
    res.status(200).json({ movies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllMovies, createMovie, getSpecificMovie };
