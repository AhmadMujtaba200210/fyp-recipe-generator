import React from "react";
import { NavigationBar } from "../../shared/NavigationBar";
import Search from "../../components/search/search";
import WeeklySpecial from "../../components/weekly-special/WeeklySpecial";
import { NewsEvents } from "../../components/news-events/NewsEvents";
import MiscRecipes from "../../components/misc-recipes/MiscRecipes";
import Slider from "../../components/slider/Slider";
import RecipeListHorizental from "../../components/single-recipe-horizental/RecipeListHorizental";
import Footer from "../../components/footer/Footer";

export const Home = () => {
  return (
    <div>
      <NavigationBar />
      <div class="main-wrap">
        <div id="container">
          <Search />
          <div id="content" class="clearfix homepage">
            <div id="slider" class="slider2">
              <h2 class="slider-head">
                {" "}
                <span>Top Recipes</span>of the day
              </h2>
              <p class="slogan">
                Sliding recipes are much more tasty as food than sliding.{" "}
              </p>
              <Slider />
            </div>

            <div id="whats-hot">
              <h2 class="w-bot-border">
                What's <span>Hot</span>
              </h2>
              <RecipeListHorizental />
            </div>
            <span class="w-pet-border"></span>
            <div id="home-infos" class="clearfix">
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
