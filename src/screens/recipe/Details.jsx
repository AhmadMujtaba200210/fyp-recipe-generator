import React, { useEffect, useState } from "react";
import "../../shared/navigationbar.css";
import RecipeInstructions from "../../components/instructions/RecipeInstructions";
import RecipeIngredients from "../../components/ingredients/RecipeIngredients";
import { NavigationBar } from "../../shared/NavigationBar";
import WeeklySpecial from "../../components/weekly-special/WeeklySpecial";
import MiscRecipes from "../../components/misc-recipes/MiscRecipes";
import { NewsEvents } from "../../components/news-events/NewsEvents";
import Footer from "../../components/footer/Footer";

import { useParams } from "react-router";
import { getRecipeDetails } from "../../server/requests";
import { RecipeSlider } from "../../components/slider/RecipeSlider";

const Details = () => {
  const [details, setDetails] = useState(null);
  const {recipe_id} = useParams();
  const getDetails = async (id) => {
    try {
      const response = await getRecipeDetails(id);
      setDetails(response.data);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  useEffect(() => {    
    getDetails(recipe_id);
  },[]);
  if (!details) return null;
  return (
    <div>
      <div class="main-wrap">

        <NavigationBar />
        <div id="container">
          <div id="content" class="clearfix ">
            <div
              id="left-area"
              class="clearfix"
              itemscope
              itemtype="http://schema.org/Recipe"
            >
              {/* Slider here */}
              <RecipeSlider {
                ...details
              }/>
              <span class="w-pet-border"></span>

              <div class="info-left instructions">
                <div itemprop="description">
                  <RecipeIngredients ingredients={details.ingredients} />
                  <h3 class="blue">Method</h3>
                  <RecipeInstructions instructions={details.instructions} />
                  <p>&nbsp;</p>
                </div>
              </div>
              {/* Right panel */}
              <div class="info-right">
                {/* Author */}

                {/* RateBox */}

                {/* NutritionalBox */}
              </div>

              <span class="w-pet-border"></span>
              {/* Comment Box */}
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

export default Details;
