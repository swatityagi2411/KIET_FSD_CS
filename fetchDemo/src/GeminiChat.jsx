import { useState } from "react";

const API_KEY = "AIzaSyDfLZLYUyYCX1G3kHd3Db0KBEvuk3xtLHg";

export default function GeminiChat() {
  const [answer, setAnswer] = useState("");

  const askGemini = async () => {
    console.log("Button clicked");

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: "Hello" }] }],
          }),
        }
      );

      console.log("Status:", response.status);

      const data = await response.json();
      console.log("DATA:", data);

      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response";

      setAnswer(reply);
    } catch (err) {
      console.error("ERROR:", err);
      setAnswer("Error");
    }
  };

  return (
    <div>
      <button onClick={askGemini}>Test Gemini</button>
      <p>{answer}</p>
    </div>
  );
}