import React, { useEffect, useState } from "react";
import "../../shared/navigationbar.css";
import RecipeInstructions from "../../components/instructions/RecipeInstructions";
import RecipeIngredients from "../../components/ingredients/RecipeIngredients";
import { NavigationBar } from "../../shared/NavigationBar";
import WeeklySpecial from "../../components/weekly-special/WeeklySpecial";
import MiscRecipes from "../../components/misc-recipes/MiscRecipes";
import { NewsEvents } from "../../components/news-events/NewsEvents";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { RecipeSlider } from "../slider/RecipeSlider";

const LLMRecipe = () => {

  const location = useLocation();
  var { recipe } = location.state;

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
                <h1 class="title fn" itemprop="name">

                  {recipe.title}
                </h1>

                <ul class="recipe-cat-info clearfix">
                  <li>
                    Cuisine:
                    <a href="#" rel="tag">
                      {recipe.cuisine}
                    </a>
                  </li>
                </ul>

                <ul class="recipe-info clearfix">
                  <li class="servings">
                    <strong class="name">Servings :</strong>
                    <span class="value">{recipe.serving}</span>
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
              <WeeklySpecial />
              <MiscRecipes />
              <NewsEvents />
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
