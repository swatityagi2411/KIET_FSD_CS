"use client"; // client side rendering as next js has SSR

import { useState } from "react";
import { useRouter } from "next/navigation"; // to create router object for navigation to another page

export default function LoginPage() {

  const router = useRouter(); // creating router object

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if(email.trim() === "admin@gmail.com" &&
       password.trim() === "1234") {

      localStorage.setItem("isLoggedIn", "true");

      router.push("/dashboard");

    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>

      <h1>Login Page</h1>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}