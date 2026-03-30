import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

export default function News() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("tesla");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  function fetchdata() {
    setLoading(true);
    setError("");
    setCurrentPage(1);

    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2026-02-28&sortBy=publishedAt&apiKey=dd87f40200304e7289285277a13c8071"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "ok") {
          throw new Error("API Error");
        }

        setNews(data.articles || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Data Not available");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchdata();
  }, []);

  const lastIndex = itemPerPage * currentPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentNews = news.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(news.length / itemPerPage);

  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>{error}</h1>;
  if (news.length === 0) return <h2>No News Found</h2>;

  return (
    <div>
      <h3>Latest News</h3>

      <input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={fetchdata}>Search</button>

      {currentNews.map((item, index) => (
        <NewsCard key={index} news={item} />
      ))}

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
           Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "5px",
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next 
        </button>
      </div>
    </div>
  );
}