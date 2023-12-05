import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allDirectors = async () => {
  return prisma.director.findMany();
};

const postDirector = async (dir_name: string, movies: any) => {
  return prisma.director.create({ data: { dir_name, movies } });
};

const specificDirector = async (id: number) => {
  return prisma.director.findUnique({ where: { id: id } });
};

const directorRepository = { allDirectors, postDirector, specificDirector };
export default directorRepository;
