-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT,
    "totalMessage" INTEGER NOT NULL DEFAULT 0,
    "report" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'Waiting',
    "profileImage" TEXT,
    "ticketsSupport" INTEGER,
    "isVerify" BOOLEAN NOT NULL DEFAULT false,
    "userRate" INTEGER,
    "changephone" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "jwt" TEXT,
    "otpCode" TEXT,
    "otpExpiresAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "firstname", "id", "isVerify", "jwt", "otpCode", "otpExpiresAt", "password", "phone", "profileImage", "report", "role", "status", "ticketsSupport", "totalMessage", "updatedAt", "userRate") SELECT "createdAt", "email", "firstname", "id", "isVerify", "jwt", "otpCode", "otpExpiresAt", "password", "phone", "profileImage", "report", "role", "status", "ticketsSupport", "totalMessage", "updatedAt", "userRate" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_changephone_key" ON "User"("changephone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
