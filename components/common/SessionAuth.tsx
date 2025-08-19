"use client";
import { useRouter } from "next/navigation";

function SessionAuth() {
  const route = useRouter();
  route.push("/auth/login");
}

export default SessionAuth;
