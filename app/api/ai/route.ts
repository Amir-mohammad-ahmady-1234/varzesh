import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://text.pollinations.ai/prompt/${encodeURIComponent(message)}`
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
