-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Blog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "profile" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL DEFAULT 'user'
);
INSERT INTO "new_Blog" ("category", "description", "id", "img", "profile", "summary", "title") SELECT "category", "description", "id", "img", "profile", "summary", "title" FROM "Blog";
DROP TABLE "Blog";
ALTER TABLE "new_Blog" RENAME TO "Blog";
CREATE UNIQUE INDEX "Blog_title_key" ON "Blog"("title");
CREATE UNIQUE INDEX "Blog_img_key" ON "Blog"("img");
CREATE UNIQUE INDEX "Blog_category_key" ON "Blog"("category");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
