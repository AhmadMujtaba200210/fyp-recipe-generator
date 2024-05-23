import React, { useState, useEffect } from "react";
import "../../shared/navigationbar.css";
import { getBlogs } from "../../server/requests";
import { Link } from "react-router-dom";

const Post = () => {
  // Assuming these values come from your server or some context
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Function to fetch posts based on the page number
  const fetchPosts = async (page) => {
    const response = await getBlogs(page);
    setPosts(response.data.content);
    setCurrentPage(response.data.pageable.pageNumber);
    setTotalPages(response.data.totalPages);
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  // Function to handle page change
  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Function to render pagination buttons
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 6;
    const halfMaxButtons = Math.floor(maxButtonsToShow / 2);

    let startPage = Math.max(1, currentPage - halfMaxButtons);
    let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

    // Adjust startPage and endPage if the current page is near the beginning or end
    if (currentPage <= halfMaxButtons) {
      startPage = 1;
      endPage = Math.min(totalPages, maxButtonsToShow);
    } else if (currentPage + halfMaxButtons >= totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - maxButtonsToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <a
          key={i}
          href="#"
          className={`btn ${i === currentPage ? "current" : ""}`}
          onClick={() => changePage(i)}
        >
          {i}
        </a>
      );
    }

    return buttons;
  };

  return (
    <div>
      <h1 className="listing-title">Recent Posts</h1>

      <br />
      <br />

      {posts.map((post) => (
        <div key={post.id} className="post">
          <h1 className="post-title entry-title">
            <Link to={`/blog/${post.title}`}>{post.title}</Link>
          </h1>
          <p className="meta vcard">
            {/* By:{" "} */}
            <a className="author fn" href="#">
              {" "}
              {/* {post.author}{" "} */}
            </a>
            {/* <span>|</span> */}
            <span className="comments">
              <a href="#" title={`Comment on ${post.title}`}>
                {/* {post.comments} Comments */}
              </a>
            </span>
            {/* <span>|</span> */}
            <time className="entry-date update" dateTime={post.date}>
              {/* On: {post.date} */}
            </time>
            {/* <span>|</span> Category: */}
            <span className="cats">
              <a href="#" rel="category tag">
                {/* {post.category} */}
              </a>
            </span>
          </p>
          {/* <div className="post-thumb single-img-box">
            <a rel="prettyPhoto" href="#" title={post.title}>
              <img
                src={post.image}
                className="attachment-thumbnail-blog wp-post-image"
                alt={post.title}
              />
            </a>
          </div> */}
          <p>{post.description.slice(1, 500)}...</p>
          <Link className="readmore rightbtn" to={`/blog/${post.title}`}>
            Read more
          </Link>
        </div>
      ))}

      {/* Pagination controls */}
      <div id="pagination">{renderPaginationButtons()}</div>
    </div>
  );
};

export default Post;
