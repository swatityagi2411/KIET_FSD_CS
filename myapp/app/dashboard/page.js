"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {

  const router = useRouter();

  useEffect(() => {

    const isLoggedIn =
      localStorage.getItem("isLoggedIn");

    if(!isLoggedIn) {
      router.push("/login");
    }

  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Protected Route</p>
    </div>
  );
}