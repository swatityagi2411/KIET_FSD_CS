import "./Footer.css";

function Footer(props) {
  const{year ,company} = props;
  return (
    <footer className="footer">
      <p>© {year}{company} </p>
    </footer>
  );
}

export default Footer;
