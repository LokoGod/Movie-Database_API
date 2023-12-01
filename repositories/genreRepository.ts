import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allGenres = async () => {
  return prisma.genre.findMany();
};

const postGenre = async (type: any) => {
  return prisma.genre.create({ data: type })
}

const genreModel = { allGenres, postGenre };
export default genreModel;
