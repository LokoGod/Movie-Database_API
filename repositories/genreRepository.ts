import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allGenres = async () => {
  return prisma.genres.findMany();
};

const postGenre = async (type: any, movies: any) => {
  return prisma.genres.create({ data: { type, movies } });
};

const specificGenre = async (id: number) => {
  return prisma.genres.findUnique({ where: { id: id } });
};

const genreRepository = { allGenres, postGenre, specificGenre };
export default genreRepository;
