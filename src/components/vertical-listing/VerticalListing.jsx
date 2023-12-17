import React from "react";
import "../../shared/navigationbar.css";

const VerticalListing = () => {
  return (
    <div>
      <h1 class="listing-title">Recent Recipes</h1>

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
            <span class="cuisine">
              {" "}
              Cuisine:{" "}
              <a href="recipe-single-1.html" rel="tag">
                American
              </a>
            </span>
          </div>

          <p>
            2 cups cream 120 grams dark chocolate, chopped 2 bags of earl grey
            tea 6 ...
          </p>

          <a href="recipe-single-1.html" class="readmore">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
export default VerticalListing;
