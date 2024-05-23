import React, { useState, useEffect } from "react";
import "../../shared/navigationbar.css";
import { getRecipes } from "../../server/requests";
import { Link } from "react-router-dom";


const VerticalListing = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchRecipes = (page) => {
    fetch(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/recipe?page=${page}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRecipes(data.content);
        setCurrentPage(data.pageable.pageNumber);
        setTotalPages(data.totalPages);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  };
  

  useEffect(() => {
    fetchRecipes(currentPage);
  }, [currentPage]);

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 6;
    const halfMaxButtons = Math.floor(maxButtonsToShow / 3);
    let startPage = Math.max(1, currentPage - halfMaxButtons);
    let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);
    // Adjust startPage and endPage if current page is near the beginning or end
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
      <h1 className="listing-title">Recent Recipes</h1>

      <br />
      <br />

      {recipes.map((recipe) => (
        <div
          key={recipe.recipeId}
          className="post-315 recipe tag-chocolate-2 tag-cointreau recipe-listing-item clearfix post-thumb"
        >
          <div className="">
            <div className="ver-img">
          <Link to={`/recipe/${recipe.recipeId}`}>
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/get_image/${recipe.title}.jpg`}
                alt={recipe.title}
              />
              </Link>
              </div>
          </div>
          <div className="recipe-info">
            <h2>
              <Link to={`/recipe/${recipe.recipeId}`}>{recipe.title}</Link>
            </h2>

            <div className="recipe-tags">
              <span className="cuisine">
                Cuisine: <a rel="tag">{recipe.cuisine}</a>
              </span>
            </div>

            <p>{recipe.ingredients.slice(0, 100)}...</p>

            <p>
              <strong>Instructions:</strong> {recipe.instructions.slice(0, 100)}
              ...
            </p>
            
            
            <Link className="readmore" to={`/recipe/${recipe.recipeId}`}>
              Read more
              </Link>
          </div>
        </div>
      ))}

      {/* Pagination controls */}
      <div id="pagination">{renderPaginationButtons()}</div>
    </div>
  );
};

export default VerticalListing;
