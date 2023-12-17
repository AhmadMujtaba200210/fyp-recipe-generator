import React from "react";
import { NavigationBar } from "../../shared/NavigationBar";
import Search from "../../components/search/search";
import Footer from "../../components/footer/Footer";
import MiscRecipes from "../../components/misc-recipes/MiscRecipes";
import { NewsEvents } from "../../components/news-events/NewsEvents";
import Cusine from "../../components/cusines/Cusine";
import { Post } from "../../components/post/Post";

export const Blog = () => {
  return (
    <div>
      <div class="main-wrap">
        <NavigationBar />
        <div id="container">
          <div class="top-search  clearfix">
            <Search />
          </div>

          <div id="content" class="clearfix ">
            <div id="left-area" class="clearfix">
              <Post />

              <div id="pagination">
                <a href="#" class="btn current">
                  1
                </a>
                <a href="#" class="btn">
                  2
                </a>
              </div>
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
