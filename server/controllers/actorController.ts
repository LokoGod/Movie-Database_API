import actorRepository from "../repositories/actorRepository";

const getAllActors = async (req: any, res: any) => {
  try {
    const actors = await actorRepository.allActors();
    res.status(200).json({ actors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createActor = async (req: any, res: any) => {
  try {
    const { actor_name, movies } = req.body;
    const actors = await actorRepository.postActor(actor_name, movies);
    res.status(201).json({ actors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSpecificActor = async (req: any, res: any) => {
  try {
    const id = Number(req.params.id);
    const actors = await actorRepository.specificActor(id);
    res.status(200).json({ actors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllActors, createActor, getSpecificActor };
