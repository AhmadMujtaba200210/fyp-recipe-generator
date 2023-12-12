import React from "react";
import "../../shared/navigationbar.css";
import { NavigationBar } from "../../shared/NavigationBar";
import VerticalListing from "../../components/verticalListing/VerticalListing";
import MiscRecipes from "../../components/misc-recipes/MiscRecipes";
import Cusine from "../../components/cusines/Cusine";
import Search from "../../components/search/search";
import Footer from "../../components/footer/Footer";
import { NewsEvents } from "../../components/news-events/NewsEvents";
const Listing = () => {
  return (
    <div>
      <div class="main-wrap">
        <NavigationBar />
        <div id="container">
          <Search />
          <div id="content" class="clearfix ">
            <div id="left-area" class="clearfix">
              <VerticalListing />
            </div>

            <div id="sidebar">
              <MiscRecipes />
              <NewsEvents />
              <Cusine />
            </div>
          </div>
        </div>
      </div>

      {/* Footer here */}
      <div id="footer-wrap">
        <Footer />
      </div>
    </div>
  );
};

export default Listing;
