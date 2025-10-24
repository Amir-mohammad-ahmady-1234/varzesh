import { prisma } from "../../../../lib/db";

export async function GetPodcast() {
  const podcast = await prisma.podcast.findMany();

  return podcast;
}
