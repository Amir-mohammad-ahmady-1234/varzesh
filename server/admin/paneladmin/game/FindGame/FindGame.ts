import { Prisma } from "@prisma/client";
import { prisma } from "../../../../../lib/db";

interface TFindGame {
  serch: string;
  status?: "Scheduled" | "down" | "live";
  League?: "Acup" | "Tcup" | "Dcup";
  page: number;
  limit: number;
}
export async function FindGame({
  serch,
  status,
  League,
  page = 1,
  limit = 10,
}: TFindGame) {
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
    const skip = (page - 1) * limit;
    const [game, total] = await Promise.all([
      prisma.game.findMany({
        skip,
        take: limit,
        where,
      }),
      prisma.game.count({ where }),
    ]);
    return {
      data: game,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
