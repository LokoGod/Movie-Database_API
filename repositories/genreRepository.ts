import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allGenres = async () => {
  return prisma.genre.findMany();
};

const postGenre = async (type: any) => {
  return prisma.genre.create({ data: type })
}

const specificGenre = async (id: any)  => {
  return prisma.genre.findUnique({where: id})
}

const genreModel = { allGenres, postGenre, specificGenre };
export default genreModel;
