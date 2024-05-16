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
import { RecipeSlider } from "../../components/slider/RecipeSlider";
const Details = () => {
  const [details, setDetails] = useState(null);
  const { recipe_id } = useParams();

  useEffect(() => {
    const getDetails = async (id) => {
      try {
        const response = await getRecipeDetails(id);
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    getDetails(recipe_id);
  }, [recipe_id]);

  if (!details) return null;

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
              {/* Slider here */}
              <RecipeSlider {...details} />
              <span className="w-pet-border"></span>

              <div className="info-left instructions">
                <div itemprop="description">
                  <RecipeIngredients ingredients={details.ingredients} />
                  <h3 className="blue">Method</h3>
                  <RecipeInstructions instructions={details.instructions} />
                  <p>&nbsp;</p>
                </div>
              </div>
              {/* Right panel */}
              <div className="info-right">
                {/* Author */}

                {/* RateBox */}

                {/* NutritionalBox */}
              </div>

              <span className="w-pet-border"></span>
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

export const getRecipeDetails = async (id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/recipe/id/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response;
  } catch (error) {
    throw error;
  }
};
