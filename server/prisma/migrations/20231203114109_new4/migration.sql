-- CreateTable
CREATE TABLE "director" (
    "id" SERIAL NOT NULL,
    "dir_name" VARCHAR(300) NOT NULL,

    CONSTRAINT "director_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieDirector" (
    "directorId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "MovieDirector_pkey" PRIMARY KEY ("directorId","movieId")
);

-- CreateTable
CREATE TABLE "Actor" (
    "id" SERIAL NOT NULL,
    "actor_name" VARCHAR(300) NOT NULL,

    CONSTRAINT "Actor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieActor" (
    "actorId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "MovieActor_pkey" PRIMARY KEY ("actorId","movieId")
);

-- AddForeignKey
ALTER TABLE "MovieDirector" ADD CONSTRAINT "MovieDirector_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "director"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieDirector" ADD CONSTRAINT "MovieDirector_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieActor" ADD CONSTRAINT "MovieActor_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "Actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieActor" ADD CONSTRAINT "MovieActor_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
