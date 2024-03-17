import React, { useState } from "react";
import "../../shared/navigationbar.css";
import footerlogo from "../../assets/images/footer-pixel.png";
import { getRecentRecipes } from "../../server/requests";
import { Link } from "react-router-dom";

const Footer = () => {
  const [recipes, setRecipes] = useState([]);
  useState(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getRecentRecipes();
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
    console.log(recipes);
  }, []);
  return (
    <div>
      <div id="bottom-wrap">
        <ul id="bottom" class="clearfix">
          <li class="about">
            <a href="about-us.html">
              <img src={footerlogo} alt="Food Recipes" class="footer-logo" />
            </a>

            <p>About Us soon ...</p>
            <Link to="/about" className="readmore">
              Read more About Us
            </Link>
          </li>

          <li
            id="recent_recipe_footer_widget-3"
            class="Recent_Recipe_Footer_Widget"
          >
            <h2 class="w-bot-border">
              <span>Recent</span> Recipes
            </h2>
            <ul
              class="recent-posts nostylewt"
              style={{ marginBottom: "0px", marginTop: "2px" }}
            >
              {recipes.map((recipe) => (
                <li key={recipe.id} class="clearfix">
                  <a href="recipe-single-1.html" class="img-box">
                    <img
                      src={`${process.env.REACT_APP_API_BASE_URL}/get_image_122x132/${recipe.title}.jpg`}
                      class="attachment-most-rated-thumb wp-post-image"
                      alt="7a0a46455c4ec56a5a02c097374fc513"
                    />
                  </a>
                  <h5>
                  <Link to={`/recipe/${recipe.recipeId}`}>{recipe.title}</Link>
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
