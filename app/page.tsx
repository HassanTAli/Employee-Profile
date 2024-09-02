"use client";
import LoginForm from "@/components/LoginForm";
import { isAuth } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (isAuth) {
      router.push("/Employee/profile");
    }
  }, [router]);

  return (
    <main className="flex items-center justify-center w-3/4">
      <LoginForm />
    </main>
  );
}
