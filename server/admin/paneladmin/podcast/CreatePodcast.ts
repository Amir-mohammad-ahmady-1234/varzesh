import prisma from "../../../../lib/db";
import { uploadFile } from "../../../../utils/uploadFile";

export type PodcastCategory = "FOOTBALL" | "BOXING" | "BASKETBALL";

export type PodcastProps = {
  title: string;
  img: File;
  category: PodcastCategory;
  summary: string;
  description: string;
  audio: File;
};

export async function PodcastCreate(props: PodcastProps) {
  const imgPath = await uploadFile(props.img, "uploads");
  const audioPath = await uploadFile(props.audio, "audio");

  const podcast = await prisma.podcast.create({
    data: {
      title: props.title,
      img: imgPath,
      category: props.category,
      summary: props.summary,
      description: props.description,
      audioUrl: audioPath,
    },
  });

  return podcast;
}
