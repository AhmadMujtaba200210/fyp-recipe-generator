import React from "react";
import { NavigationBar } from "../../shared/NavigationBar";
import Search from "../../components/search/search";
import { AboutContent } from "../../components/aboutcontent/AboutContent";
import MiscRecipes from "../../components/misc-recipes/MiscRecipes";
import WeeklySpecial from "../../components/weekly-special/WeeklySpecial";
import Footer from "../../components/footer/Footer";
export const About = () => {
  return (
    <div>
      <NavigationBar />
      <div class="main-wrap">
        <div id="container">
          <Search />
          <div id="content" class="clearfix ">
            <div id="left-area" class="clearfix">
              <AboutContent />
            </div>

            <div id="sidebar">
              <MiscRecipes />

              <WeeklySpecial />
            </div>
          </div>
        </div>
        <div class="w-pet-border"></div>
        <Footer />
      </div>
    </div>
  );
};
