import React, { useState, useEffect } from "react";
import "../../shared/navigationbar.css";

export const NewsEvents = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNewsRandom(2);
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <div className="widget newsEvent nostylewt">
        <h2 className="w-bot-border">
          <span>News</span> and Events
        </h2>
        <ul className="list">
          {news.map((item) => (
            <li key={item.id}>
              <h5>
                <a href={`single.html`}>{item.title}</a>
              </h5>
              <p>
                {item.description.slice(0, 100)}...{/* Displaying first 100 characters, adjust as needed */}
                <a href={`single.html`} onClick={() => {}}>more</a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getNewsRandom = async (random) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/news/hot/${random}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response;
    } catch (error) {
        throw error;
    }
}
