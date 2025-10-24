import { uploadAudioFile } from "../../../../utils/uploadAudioFile";
import { uploadImage } from "../../../../lib/cloudinary";
import { prisma } from "../../../../lib/db";

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
  try {
    const imgPath = await uploadImage(props.img);
    const audioPath = await uploadAudioFile(props.audio, "audio");

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
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
