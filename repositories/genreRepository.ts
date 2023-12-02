import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allGenres = async () => {
  return prisma.genre.findMany();
};

const postGenre = async (type: any, movies: any) => {
  return prisma.genre.create({ data: { type, movies } });
};

const specificGenre = async (id: number) => {
  return prisma.genre.findUnique({ where: { id: id } });
};

const genreRepository = { allGenres, postGenre, specificGenre };
export default genreRepository;
