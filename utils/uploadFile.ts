import { promises as fs } from "fs";
import path from "path";

export async function uploadFile(file: File, folder = "uploads") {
  if (!file) throw new Error("فایل موجود نیست");

  // مسیر فولدر روی سرور
  const uploadDir = path.join(process.cwd(), "public", folder);
  await fs.mkdir(uploadDir, { recursive: true });

  // اسم امن فایل
  const safeFileName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "");
  const fileName = `${Date.now()}-${safeFileName}`;

  // مسیر کامل روی سرور
  const filePath = path.join(uploadDir, fileName);

  // تبدیل فایل به buffer و ذخیره روی سرور
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  await fs.writeFile(filePath, buffer);

  // مسیر نسبی برای دیتابیس / مرورگر
  return `/${folder}/${fileName}`;
}
