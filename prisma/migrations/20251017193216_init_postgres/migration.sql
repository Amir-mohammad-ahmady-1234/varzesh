-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "public"."PodcastCategory" AS ENUM ('FOOTBALL', 'BOXING', 'BASKETBALL');

-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('Open', 'Waiting', 'Approved', 'Blocked');

-- CreateEnum
CREATE TYPE "public"."NewStatus" AS ENUM ('Simple', 'Medium', 'Special');

-- CreateEnum
CREATE TYPE "public"."GameStatus" AS ENUM ('live', 'down', 'Scheduled');

-- CreateEnum
CREATE TYPE "public"."League" AS ENUM ('Dcup', 'Tcup', 'Acup');

-- CreateEnum
CREATE TYPE "public"."Priority" AS ENUM ('NORMAL', 'URGENT', 'LOW', 'HIGH');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT,
    "totalMessage" INTEGER NOT NULL DEFAULT 0,
    "report" INTEGER NOT NULL DEFAULT 0,
    "status" "public"."Status" NOT NULL DEFAULT 'Waiting',
    "profileImage" TEXT,
    "ticketsSupport" INTEGER,
    "isVerify" BOOLEAN NOT NULL DEFAULT false,
    "userRate" INTEGER,
    "changephone" TEXT,
    "role" "public"."Role" NOT NULL DEFAULT 'USER',
    "jwt" TEXT,
    "otpCode" TEXT,
    "otpExpiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Ticket" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "userId" INTEGER NOT NULL,
    "status" "public"."Status" NOT NULL DEFAULT 'Waiting',
    "priority" "public"."Priority" NOT NULL DEFAULT 'NORMAL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Message" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Game" (
    "id" SERIAL NOT NULL,
    "firstthem" TEXT NOT NULL,
    "secondthem" TEXT NOT NULL,
    "League" "public"."League" NOT NULL DEFAULT 'Acup',
    "step" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "status" "public"."GameStatus" NOT NULL DEFAULT 'live',
    "description" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Blog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "profile" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Podcast" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "category" "public"."PodcastCategory" NOT NULL,
    "summary" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "audioUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Podcast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."News" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "status" "public"."NewStatus" NOT NULL,
    "summary" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Guest" (
    "id" SERIAL NOT NULL,
    "guestId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "public"."User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_changephone_key" ON "public"."User"("changephone");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_title_key" ON "public"."Blog"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_img_key" ON "public"."Blog"("img");

-- CreateIndex
CREATE UNIQUE INDEX "Podcast_title_key" ON "public"."Podcast"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Podcast_img_key" ON "public"."Podcast"("img");

-- CreateIndex
CREATE UNIQUE INDEX "News_title_key" ON "public"."News"("title");

-- CreateIndex
CREATE UNIQUE INDEX "News_img_key" ON "public"."News"("img");

-- CreateIndex
CREATE UNIQUE INDEX "Guest_guestId_key" ON "public"."Guest"("guestId");

-- AddForeignKey
ALTER TABLE "public"."Ticket" ADD CONSTRAINT "Ticket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Message" ADD CONSTRAINT "Message_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "public"."Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
