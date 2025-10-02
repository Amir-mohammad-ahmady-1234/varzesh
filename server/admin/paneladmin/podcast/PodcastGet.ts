import prisma from "../../../../lib/db";

export async function PodcastGet() {
  const podcasts = await prisma.podcast.findMany();
  return podcasts;
}

