-- CreateTable
CREATE TABLE "Podcast" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "audioUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Podcast_title_key" ON "Podcast"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Podcast_img_key" ON "Podcast"("img");

-- CreateIndex
CREATE UNIQUE INDEX "Podcast_category_key" ON "Podcast"("category");
