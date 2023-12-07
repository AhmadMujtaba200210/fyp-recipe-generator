import React from "react";
import "../shared/navigationbar.css";
import { NavigationBar } from "../shared/NavigationBar";
const Listing = () => {
  return (
    <div>
      <NavigationBar />
      <div id="content" class="clearfix ">
        <div id="left-area" class="clearfix">
          <h1 class="listing-title">Recent Recipes</h1>

          <form class="sorting-form" method="get" action="#">
            <label for="recipe-sorting">Sort:- </label>
            <select id="recipe-sorting" name="recipe-sort">
              <option value="date">Mose Recent</option>
              <option value="rand">Rand</option>
              <option value="comment_count">Comment Count</option>
              <option value="title">Title</option>
              <option value="rating_average">High Rated</option>
              <option value="rating_counter">Most Rated</option>
              <option value="views">Most Views</option>
            </select>
          </form>

          <span class="w-pet-border"></span>
          <br />

          <div
            class="post-315 recipe tag-chocolate-2 tag-cointreau recipe-listing-item clearfix"
            id="post-315"
          >
            <div class="post-thumb single-img-box">
              <a
                href="recipe-single-1.html"
                title="Chocolate Earl Grey Pots de Creme Recipe"
              >
                <img
                  src="images/demo/7a0a46455c4ec56a5a02c097374fc513-250x212.jpg"
                  class="attachment-recipe-listing wp-post-image"
                  alt="7a0a46455c4ec56a5a02c097374fc513"
                />
              </a>
            </div>
            <div class="recipe-info">
              <h2>
                <a href="recipe-single-1.html">
                  Chocolate Earl Grey Pots de Creme Recipe
                </a>
              </h2>

              <div class="recipe-tags">
                <span class="type">
                  {" "}
                  Recipe Type:{" "}
                  <a href="recipe-single-1.html" rel="tag">
                    Chocolate
                  </a>
                </span>
                <span class="cuisine">
                  {" "}
                  Cuisine:{" "}
                  <a href="recipe-single-1.html" rel="tag">
                    American
                  </a>
                </span>
              </div>

              <p>
                2 cups cream 120 grams dark chocolate, chopped 2 bags of earl
                grey tea 6 ...
              </p>

              <a href="recipe-single-1.html" class="readmore">
                Read more
              </a>
            </div>
          </div>

          {/* TODO: pagination */}
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
          <div class="widget fav-recipes nostylewt">
            <h2 class="w-bot-border">
              <span>MISC</span> Recipes
            </h2>
{/* TODO: add map here */}
            <div class="tabed">
              <div class="block current">
                <ul class="highest">
                  <li>
                    <a href="recipe-single-1.html" class="img-box">
                      <img
                        src="images/demo/7a0a46455c4ec56a5a02c097374fc513-63x53.jpg"
                        class="attachment-sidebar-tabs wp-post-image"
                        alt="7a0a46455c4ec56a5a02c097374fc513"
                      />
                    </a>
                    <h5>
                      {" "}
                      <a href="recipe-single-1.html">
                        Chocolate Earl Grey Pots de Creme Recipe
                      </a>
                    </h5>
                  </li>
                </ul>
              </div>

              <div class="bot-border"></div>
            </div>
          </div>

          <div
            id="recipe_types-2"
            class="widget nostylewt Recipe_Types_Widget clearfix"
          >
            <h2 class="w-bot-border bmarginless">
              <span>Recipe</span> Types
            </h2>
            {/* TODO: add map here */}
            <div class="archives clearfix">
              <ul>
                {" "}
                <li class="cat-item cat-item-31">
                  <a href="http://inspirythemesdemo.com/alt-foodrecipes/recipe-type/cheese-2/">
                    Cheese
                  </a>
                </li>
                <li class="cat-item cat-item-33">
                  <a href="#">Chicken</a>
                </li>
                <li class="cat-item cat-item-36">
                  <a href="#">Chocolate</a>
                </li>
                <li class="cat-item cat-item-50">
                  <a href="#">Pizzas</a>
                </li>
                <li class="cat-item cat-item-52">
                  <a href="#">Potatos</a>
                </li>
                <li class="cat-item cat-item-53">
                  <a href="#">Rolls</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
