import { useState } from "react";
import Timer from "./Timer";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        Toggle Timer
      </button>

      {show && <Timer />}
    </>
  );
}