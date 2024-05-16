import React, { useState, useEffect } from "react";
import "../../shared/navigationbar.css";
import footerlogo from "../../assets/images/footer-pixel.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getRecentRecipes();
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <div id="bottom-wrap">
        <ul id="bottom" className="clearfix">
          <li className="about">
            <a href="about-us.html">
              <img
                src={footerlogo}
                alt="Food Recipes"
                className="footer-logo"
              />
            </a>

            <h5>
              Welcome to PixelCuisine – Where AI Transforms Images into Recipes
            </h5>
            <Link to="/about" className="readmore">
              Read more About Us
            </Link>
          </li>

          <li className="Recent_Recipe_Footer_Widget">
            <h2 className="w-bot-border">
              <span>Recent</span> Recipes
            </h2>
            <ul
              className="recent-posts nostylewt"
              style={{ marginBottom: "0px", marginTop: "2px" }}
            >
              {recipes.map((recipe) => (
                <li key={recipe.id} className="clearfix">
                  <Link to={`/recipe/${recipe.recipeId}`} className="img-box">
                    <img
                      src={`${process.env.REACT_APP_API_BASE_URL}/get_image_122x132/${recipe.title}.jpg`}
                      className="attachment-most-rated-thumb wp-post-image"
                      alt={recipe.recipeId}
                    />
                  </Link>
                  <h5>
                    <Link to={`/recipe/${recipe.recipeId}`}>
                      {recipe.title}
                    </Link>
                  </h5>
                  <p style={{ paddingTop: "1px" }}>
                    {recipe.ingredients.slice(0, 60)}...
                  </p>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

export const getRecentRecipes = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_API_URL}/api/v1/recipe/recent`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response;
  } catch (error) {
    throw error;
  }
};
