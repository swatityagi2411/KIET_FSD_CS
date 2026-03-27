import { useEffect } from "react";

export default function Timer() {

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Component Unmounted");
    };
  }, []);

  return <h2>Timer Running</h2>;
}