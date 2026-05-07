"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {

  const router = useRouter();

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    router.push("/login");
  };

  return (
    <div style={{ display: "flex" }}>

      <div style={{
        width: "200px",
        background: "#f0f0f0",
        padding: "20px",
        minHeight: "100vh"
      }}>

        <h2>Dashboard</h2>

        <div>
          <Link href="/dashboard">
            Home
          </Link>
        </div>

        <br />

        <div>
          <Link href="/dashboard/settings">
            Settings
          </Link>
        </div>

        <br />

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

      <div style={{
        padding: "20px",
        flex: 1
      }}>
        {children}
      </div>

    </div>
  );
}