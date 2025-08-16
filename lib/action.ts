"use server";

export interface userRegesterState {
  message: string | null;
}

// function isInvalidText(text: FormDataEntryValue | null) {
//   if (typeof text !== "string") return;
//   return !text || text.trim() === "";
// }

export async function userRegester(
  prevState: userRegesterState,
  formData: FormData
) {
  const data = {
    firstname: formData.get("name"),
    phone: formData.get("phone"),
    password: formData.get("password"),
  };

  const res = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  console.log(result);
  return result;
}
