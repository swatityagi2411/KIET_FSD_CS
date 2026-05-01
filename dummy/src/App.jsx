import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("Click to generate a quote ✨");

  const getQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote(data.content);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🌟 AI Quote Generator</h2>
      <p>{quote}</p>
      <button onClick={getQuote}>Generate Quote</button>
    </div>
  );
}

export default App;