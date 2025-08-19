-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL DEFAULT 'example@example.com',
    "totalMessage" INTEGER NOT NULL DEFAULT 0,
    "report" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'Waiting',
    "profileImage" TEXT,
    "ticketsSupport" INTEGER,
    "isVerify" BOOLEAN NOT NULL DEFAULT false,
    "userRate" INTEGER,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "jwt" TEXT,
    "otpCode" TEXT,
    "otpExpiresAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "firstname", "id", "jwt", "otpCode", "otpExpiresAt", "password", "phone", "role", "updatedAt") SELECT "createdAt", "firstname", "id", "jwt", "otpCode", "otpExpiresAt", "password", "phone", "role", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
