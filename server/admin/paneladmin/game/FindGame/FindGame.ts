import { Prisma } from "@prisma/client";
import prisma from "../../../../../lib/db";

interface TFindGame {
  serch: string;
  status?: "Scheduled" | "down" | "live";
  League?: "Acup" | "Tcup" | "Dcup";
}
export async function FindGame({ serch, status, League }: TFindGame) {
  try {
    const where = {} as Prisma.GameWhereInput;
    if (serch) {
      const serchitems = serch?.trim();
      where.OR = [
        { secondthem: { contains: serchitems } },
        { firstthem: { contains: serchitems } },
      ];
    }
    if (League) {
      where.League = League;
    }
    if (status) {
      where.status = status;
    }
    const game = prisma.game.findMany({
      where,
    });
    return { game, status: 200 };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
