import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  let c={name: "Xebia", Location: "Gurgaon"};
  return (
    <div className="app">
      <Header title ="First App" />

      <main>
        <h2>Home Page Content</h2>
        <p>This content changes, header and footer remain same.</p>
      </main>
      <card>
        <h4>I am just trying children prop</h4>
        <p>How does it work and useful to test</p>
      </card>

      <Footer year="2026" company="Xebia" field="IT" />
    </div>
  );
}

export default App;
