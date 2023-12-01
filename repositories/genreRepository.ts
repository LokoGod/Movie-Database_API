import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allGenres = async () => {
  return prisma.genre.findMany();
};

const createGenre = async (type: any) => {
  return prisma.genre.create({ data: type })
}

const genreModel = { allGenres, createGenre };
export default genreModel;
