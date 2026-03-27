import "./Header.css";

function Header(obj) {
  return (
    <header className="header">
      <h1>{obj.title}</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
