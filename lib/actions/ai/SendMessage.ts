"use server";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export async function sendMessage(message: string): Promise<string> {
  if (!message?.trim()) return "متن پیام نمی‌تواند خالی باشد.";

  try {
    const res = await fetch(`${baseUrl}/api/ai`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
      cache: "no-store",
    });

    const result = await res.json();

    if (!res.ok || result.error) {
      return result.message || "پاسخی از سرور دریافت نشد.";
    }

    return result.reply;
  } catch (err) {
    console.error("AI sendMessage error:", err);
    return "خطای غیرمنتظره در برقراری ارتباط.";
  }
}
