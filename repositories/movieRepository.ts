import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allMovies = async () => {
  return prisma.movie.findMany();
};

const postMovie = async (title: any, genre: any) => {
  return prisma.movie.create({ data: { title, genre } });
};

const specificMovie = async (id: number) => {
  return prisma.movie.findUnique({ where: { id: id } });
};

const movieRepository = { allMovies, postMovie, specificMovie };
export default movieRepository;
