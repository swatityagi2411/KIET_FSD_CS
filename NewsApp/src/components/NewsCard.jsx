function NewsCard({ news }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <img src={news.urlToImage} width="200" />
      <h3>{news.title}</h3>
      <p>{news.description}</p>
    </div>
  );
}

export default NewsCard;