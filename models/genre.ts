import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allGenres = async () => {
  const genres = await prisma.genre.findMany();
  return genres;
};

module.exports = {
  allGenres,
};
