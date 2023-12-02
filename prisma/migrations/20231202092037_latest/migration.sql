/*
  Warnings:

  - You are about to drop the `genres` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `movies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "movies" DROP CONSTRAINT "movies_genre_id_fkey";

-- DropTable
DROP TABLE "genres";

-- DropTable
DROP TABLE "movies";

-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genres" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(255) NOT NULL,

    CONSTRAINT "Genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MoviesTodirectors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MoviesToactors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_GenresToMovies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MoviesTodirectors_AB_unique" ON "_MoviesTodirectors"("A", "B");

-- CreateIndex
CREATE INDEX "_MoviesTodirectors_B_index" ON "_MoviesTodirectors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MoviesToactors_AB_unique" ON "_MoviesToactors"("A", "B");

-- CreateIndex
CREATE INDEX "_MoviesToactors_B_index" ON "_MoviesToactors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenresToMovies_AB_unique" ON "_GenresToMovies"("A", "B");

-- CreateIndex
CREATE INDEX "_GenresToMovies_B_index" ON "_GenresToMovies"("B");

-- AddForeignKey
ALTER TABLE "_MoviesTodirectors" ADD CONSTRAINT "_MoviesTodirectors_A_fkey" FOREIGN KEY ("A") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoviesTodirectors" ADD CONSTRAINT "_MoviesTodirectors_B_fkey" FOREIGN KEY ("B") REFERENCES "directors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoviesToactors" ADD CONSTRAINT "_MoviesToactors_A_fkey" FOREIGN KEY ("A") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoviesToactors" ADD CONSTRAINT "_MoviesToactors_B_fkey" FOREIGN KEY ("B") REFERENCES "actors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenresToMovies" ADD CONSTRAINT "_GenresToMovies_A_fkey" FOREIGN KEY ("A") REFERENCES "Genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenresToMovies" ADD CONSTRAINT "_GenresToMovies_B_fkey" FOREIGN KEY ("B") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
