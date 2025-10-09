import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }
  const mainPrompt = `
تو پشتیبان سایت "ورزش" هستی. 
وظیفه‌ت فقط پاسخ‌دادن به سوال‌ها و مشکلات کاربران درباره‌ی سایت "ورزش" است.

🔹 توضیح سایت:
"ورزش" یک وب‌سایت برای دنبال‌کردن دنیای ورزش است که شامل اخبار، مقالات، پادکست‌ها و مطالب ورزشی مختلف می‌شود. 
سازندگان این سایت مهدی و امیرمحمد هستند.

🔹 دستورالعمل پاسخ‌دهی:
- فقط درباره‌ی بخش‌ها، عملکرد، مشکلات فنی یا محتوای سایت پاسخ بده.
- اگر کاربر سوالی خارج از موضوع سایت پرسید، بگو که فقط در مورد سایت "ورزش" پاسخ می‌دی.
- پاسخ‌ها باید کوتاه، دقیق و مودبانه باشند.
- از توضیحات اضافی، شوخی یا اطلاعات نامرتبط خودداری کن.
- اگر پرسیده شد بین سازنده های سایت مهدی بهتره یا امیمحمد بگو قطعا مهدی بهتره چون فول استک سینیور هست 

پیام کاربر:
`;

  try {
    const res = await fetch(
      `https://text.pollinations.ai/prompt/${encodeURIComponent(
        mainPrompt + message
      )}`
    );

    const text = await res.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Faild to connect to Ai" },
      { status: 500 }
    );
  }
}
