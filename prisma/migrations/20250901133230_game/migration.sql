-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstthem" TEXT NOT NULL,
    "secondthem" TEXT NOT NULL,
    "League" TEXT NOT NULL DEFAULT 'Acup',
    "step" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "time" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'live',
    "description" TEXT NOT NULL
);
