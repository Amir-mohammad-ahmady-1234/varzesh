import z from "zod";
import prisma from "../../../../../lib/db";
import { Game } from "../../../../../lib/validations/game";

type TCreateGame = z.infer<typeof Game>;

export async function CreateGame(input: TCreateGame) {
  try {
    const parsed = Game.parse(input);
    const game = await prisma.game.create({
      data: parsed,
    });
    return { game, staus: 200 };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
