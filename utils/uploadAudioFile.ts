const ALLOWED_AUDIO_TYPES = [
  "audio/mpeg",
  "audio/mp3",
  "audio/wav",
  "audio/webm",
];

const MAX_AUDIO_SIZE_BYTES = 30 * 1024 * 1024; // 30MB

export async function uploadAudioFile(file: File, folder = "audio") {
  if (!file) throw new Error("فایل صوتی موجود نیست");

  if (!ALLOWED_AUDIO_TYPES.includes(file.type)) {
    throw new Error("فرمت فایل صوتی فقط باید MP3, WAV یا WEBM باشد");
  }

  if (file.size > MAX_AUDIO_SIZE_BYTES) {
    throw new Error("حجم فایل صوتی نباید بیشتر از 30 مگابایت باشد");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "audio_preset");
  formData.append("folder", folder);
  formData.append("resource_type", "video");

  const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) throw new Error("آپلود فایل صوتی در Cloudinary ناموفق بود!");

  const data = await res.json();
  return data.secure_url;
}
