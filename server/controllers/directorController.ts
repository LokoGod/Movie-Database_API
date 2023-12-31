import directorRepository from "../repositories/directorRepository";

const getAllDirectors = async (req: any, res: any) => {
  try {
    const directors = await directorRepository.allDirectors();
    res.status(200).json({ directors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createDirector = async (req: any, res: any) => {
  try {
    const { dir_name, movies } = req.body;
    const directors = await directorRepository.postDirector(dir_name, movies);
    res.status(201).json({directors});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSpecificDirector = async (req: any, res: any) => {
  try {
    const id = Number(req.params.id);
    const directors = await directorRepository.specificDirector(id);
    res.status(200).json({ directors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllDirectors, createDirector, getSpecificDirector };
