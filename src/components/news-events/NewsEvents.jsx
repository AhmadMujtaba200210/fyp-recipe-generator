import React, { useState, useEffect } from "react";
import "../../shared/navigationbar.css";
import { getNewsRandom } from "../../server/requests"; // Update this path

export const NewsEvents = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNewsRandom(2);
        setNews(response.data);
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
                <a href={`single.html`} onClick={{}}>more</a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
