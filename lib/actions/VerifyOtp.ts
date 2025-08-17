export interface VerifyOtpState {
  message: {
    otp?: string;
    otherErr?: string;
  };
}

export async function VerifyOtp(prevState: VerifyOtpState, formData: FormData) {
  const data = {
    otp: formData.get("otp"),
    phone: localStorage.getItem("phone"),
  };

  if (typeof data.otp === "string" && !data.otp.trim())
    return {
      message: { otp: "کد otp 6 رقمی است" },
    };

  try {
    const res = await fetch("http://localhost:3000/api/auth/sentotp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      return { message: { otherErr: result.message } };
    }

    return { message: result.ok };
  } catch {
    return { message: { otherErr: "خطای غیرمنتظره رخ داد" } };
  }
}
