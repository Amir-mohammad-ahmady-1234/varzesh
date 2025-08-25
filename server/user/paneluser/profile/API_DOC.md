📑 Profile User APIs (Next.js 15 Internal)

1. GetUserById()

Description: گرفتن id و firstname کاربر از کوکی JWT

Input: هیچ ورودی مستقیم نداره (از کوکی token استفاده می‌کنه)

Output (Success):
{
"message": "ok",
"id": 1,
"firstname": "Ali"
}
////////////////////// 2. GetProfileDataUser(id: number)

Description: دریافت اطلاعات پروفایل کاربر

Input:
{
"id": 1
}
Output (Success):

{
"message": "ok",
"user": {
"id": 1,
"firstname": "Ali",
"email": "ali@example.com",
"phone": "09123456789",
"profileImage": "/uploads/profile1.png",
"totalMessage": 10,
"report": 0,
"status": "Waiting",
"createdAt": "2025-08-25T10:00:00.000Z",
"updatedAt": "2025-08-25T10:10:00.000Z"
}
}
///////////////////// 3. PostProfileUser({ id, email, file })

Description: آپدیت ایمیل و عکس پروفایل

Input (multipart/form-data):
{
"id": 1,
"email": "ali_new@example.com",
"file": "<binary image file>"
}
Output (Success):

{
"message": "کاربر آپدیت شد",
"path": "/uploads/profile1.png",
"status": 200
}
////////////////////// 4. PutphoneUser({ id })

Description: ارسال OTP برای تغییر شماره تلفن (فقط یک بار قابل استفاده است)

Input:
{
"id": 1
}
Output (Success):

{
"message": "کد ارسال شد",
"otpcode": "123456",
"status": 200
}
//////////////////////// 5. CheckOtpPhone({ id, otp })

Description: بررسی درستی کد OTP ارسال شده برای تغییر شماره

Input:
{
"id": 1,
"otp": "123456"
}
Output (Success):
{
"message": "اطلاعات صحیح هست",
"status": 200
}
//////////////////////// 6. ChngePhone({ id, phone })

Description: نهایی کردن تغییر شماره (بعد از تأیید OTP)

Input:
{
"id": 1,
"phone": "09123456789"
}
Output (Success):

{
"message": "کاربر آپدیت شد",
"status": 200
}
///////////////////// 7. PutProfileUser({ id, email, firstname })

Description: تغییر ایمیل و نام کاربر

Input:
{
"id": 1,
"email": "ali_new@example.com",
"firstname": "Ali Reza"
}
Output (Success):
{
"message": "کاربر آپدیت شد",
"status": 200
}
