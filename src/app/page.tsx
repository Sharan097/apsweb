
"use client";

import { useRouter } from "next/navigation";
import { SignupPage } from "@/components/auth/SignupPage";

export default function HomePage() {
  const router = useRouter();

  return (
    <SignupPage onSuccess={() => router.push("/dashboard")} />
  );
}