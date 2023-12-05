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
