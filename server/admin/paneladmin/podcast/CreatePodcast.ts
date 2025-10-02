import prisma from "../../../../lib/db";
import { uploadFile } from "../../../../utils/uploadFile";
import { uploadAudioFile } from "../../../../utils/uploadAudioFile";

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
    const imgPath = await uploadFile(props.img, "uploads");
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
  } catch (err) {
    console.log(err);
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
