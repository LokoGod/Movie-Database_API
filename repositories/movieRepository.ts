import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allMovies = async () => {
  return prisma.movies.findMany();
};

const postMovie = async (title: any, genre: any) => {
  return prisma.movies.create({ data: { title, genre } });
};

const specificMovie = async (id: number) => {
  return prisma.movies.findUnique({ where: { id: id } });
};
