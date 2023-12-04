/*
  Warnings:

  - You are about to drop the `Genres` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Movies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GenresToMovies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MoviesToactors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MoviesTodirectors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `actors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `directors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GenresToMovies" DROP CONSTRAINT "_GenresToMovies_A_fkey";

-- DropForeignKey
ALTER TABLE "_GenresToMovies" DROP CONSTRAINT "_GenresToMovies_B_fkey";

-- DropForeignKey
ALTER TABLE "_MoviesToactors" DROP CONSTRAINT "_MoviesToactors_A_fkey";

-- DropForeignKey
ALTER TABLE "_MoviesToactors" DROP CONSTRAINT "_MoviesToactors_B_fkey";

-- DropForeignKey
ALTER TABLE "_MoviesTodirectors" DROP CONSTRAINT "_MoviesTodirectors_A_fkey";

-- DropForeignKey
ALTER TABLE "_MoviesTodirectors" DROP CONSTRAINT "_MoviesTodirectors_B_fkey";

-- DropTable
DROP TABLE "Genres";

-- DropTable
DROP TABLE "Movies";

-- DropTable
DROP TABLE "_GenresToMovies";

-- DropTable
DROP TABLE "_MoviesToactors";

-- DropTable
DROP TABLE "_MoviesTodirectors";

-- DropTable
DROP TABLE "actors";

-- DropTable
DROP TABLE "directors";

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(500) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(255) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "director" (
    "id" SERIAL NOT NULL,
    "dir_name" VARCHAR(300) NOT NULL,

    CONSTRAINT "director_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actor" (
    "id" SERIAL NOT NULL,
    "actor_name" VARCHAR(300) NOT NULL,

    CONSTRAINT "actor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GenreToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToMovie_AB_unique" ON "_GenreToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToMovie_B_index" ON "_GenreToMovie"("B");

-- AddForeignKey
ALTER TABLE "_GenreToMovie" ADD CONSTRAINT "_GenreToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToMovie" ADD CONSTRAINT "_GenreToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
