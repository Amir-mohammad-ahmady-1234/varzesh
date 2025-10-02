import { promises as fs } from "fs";
import path from "path";

const ALLOWED_AUDIO_TYPES = [
  "audio/mpeg",
  "audio/mp3",
  "audio/wav",
  "audio/webm",
];

const MAX_AUDIO_SIZE_BYTES = 30 * 1024 * 1024; 

export async function uploadAudioFile(file: File, folder = "audio") {
  if (!file) throw new Error("فایل صوتی موجود نیست");

  if (!ALLOWED_AUDIO_TYPES.includes(file.type)) {
    throw new Error("فرمت فایل صوتی فقط باید MP3, WAV یا WEBM باشد");
  }

  if (file.size > MAX_AUDIO_SIZE_BYTES) {
    throw new Error("حجم فایل صوتی نباید بیشتر از 30 مگابایت باشد");
  }

  const uploadDir = path.join(process.cwd(), "public", folder);
  await fs.mkdir(uploadDir, { recursive: true });

  const safeFileName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "");
  const fileName = `${Date.now()}-${safeFileName}`;

  const filePath = path.join(uploadDir, fileName);

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  await fs.writeFile(filePath, buffer);

  return `/${folder}/${fileName}`;
}

