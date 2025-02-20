import React, { useState } from "react";
import "../../shared/navigationbar.css";
import RecipeInstructions from "../../components/instructions/RecipeInstructions";
import RecipeIngredients from "../../components/ingredients/RecipeIngredients";
import { NavigationBar } from "../../shared/NavigationBar";
import MiscRecipes from "../../components/misc-recipes/MiscRecipes";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import { FaHeart } from "react-icons/fa";
import SideProfile from "../sideprofile/SideProfile";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../state";

const LLMRecipe = () => {
  const location = useLocation();
  const { recipe } = location.state;
  const user = useSelector(selectCurrentUser);

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <NavigationBar />
      <div className="main-wrap">
        <div id="container">
          <div id="content" className="clearfix">
            <div
              id="left-area"
              className="clearfix"
              itemscope
              itemtype="http://schema.org/Recipe"
            >
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h1 className="title fn" itemprop="name">
                    {recipe.title}
                  </h1>
                  <IconButton
                    onClick={toggleLike}
                    style={{ marginLeft: "10px", marginBottom: "10px" }}
                    color={isLiked ? "secondary" : "default"}
                  >
                    <FaHeart style={{ color: isLiked ? "red" : "black" }} />
                  </IconButton>
                </div>
                
                <ul className="recipe-cat-info clearfix">
                  <li>
                    Cuisine:
                    <a href="#" rel="tag">
                      {recipe.cuisine}
                    </a>
                  </li>
                </ul>
                <ul className="recipe-info clearfix">
                  <li className="servings">
                    <strong className="name">Servings:</strong>
                    <span className="value">{recipe.serving}</span>
                  </li>
                </ul>
              </div>
              <div className="info-left instructions">
                <div itemprop="description">
                  <RecipeIngredients ingredients={recipe.ingredients} />
                  <h3 className="blue">Method</h3>
                  <RecipeInstructions instructions={recipe.instructions} />
                  <p>&nbsp;</p>
                </div>
              </div>
              {/* Right panel - Placeholder for future components such as Author, RateBox, NutritionalBox */}
              {/* Comment Box - Placeholder or could be implemented if required */}
            </div>
            <div id="sidebar">
            {user && <SideProfile/>}
              <MiscRecipes />
            </div>
          </div>
        </div>
      </div>
      <div id="footer-wrap">
        <Footer />
      </div>
    </div>
  );
};

export default LLMRecipe;
