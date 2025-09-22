import prisma from "../../../../../../lib/db";

export async function Lastgames() {
  const games = await prisma.game.findMany({
    orderBy: {
      id: "desc",
    },
    take: 5,
  });

  return games;
}
