import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allActors = async () => {
  return prisma.actor.findMany();
};

const postActor = async (actor_name: string, movies: any) => {
  return prisma.actor.create({ data: { actor_name, movies } });
};

const specificActor = async (id: number) => {
  return prisma.actor.findUnique({ where: { id: id } });
};

const actorRepository = { allActors, postActor, specificActor };
export default actorRepository;
