import z from "zod";
import prisma from "../../../../../lib/db";
import { Game } from "../../../../../lib/validations/game";

export type TCreateGame = z.infer<typeof Game>;

export async function CreateGame(input: TCreateGame) {
  try {
    const validateData = Game.safeParse(input);

    if (!validateData.success) {
      const fieldErrors: Record<string, string> = {};

      validateData.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });

      return {
        message: { ...fieldErrors },
      };
    }
    const {
      secondthem,
      firstthem,
      data,
      step,
      League,
      time,
      description,
      status,
    } = validateData.data;
    await prisma.game.create({
      data: {
        secondthem,
        firstthem,
        data,
        step,
        League,
        time,
        description,
        status,
      },
    });
    return { staus: 200 };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
