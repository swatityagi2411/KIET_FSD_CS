import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <h2>Home Page Content</h2>
        <p>This content changes, header and footer remain same.</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
