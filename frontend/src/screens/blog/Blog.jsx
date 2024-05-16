import React from "react";
import { NavigationBar } from "../../shared/NavigationBar";
import Search from "../../components/search/search";
import Footer from "../../components/footer/Footer";
import MiscRecipes from "../../components/misc-recipes/MiscRecipes";
import { NewsEvents } from "../../components/news-events/NewsEvents";
import Cusine from "../../components/cusines/Cusine";
import Post from "../../components/post/Post";

export const Blog = () => {
  return (
    <div>
      <NavigationBar />
      <div class="main-wrap">
        <div id="container">
          <Search />

          <div id="content" class="clearfix ">
            <div id="left-area" class="clearfix">
               <Post />
            </div>

            <div id="sidebar">
              <MiscRecipes />
              <NewsEvents />
              <Cusine />
            </div>
            {/* Left section end here */}
          </div>
        </div>
      </div>

      <div id="footer-wrap">
        <Footer />
      </div>
    </div>
  );
};
