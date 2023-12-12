import React from "react";
import "../../shared/navigationbar.css"

const RecipeListHorizental = () => {
  return (
    <div>
      RecipeListHorizental
      <ul class="cat-list clearfix">
        <li>
          <a href="recipe-single-1.html" class="img-box">
            <img
              src="../../src/assets/images/demo/7a0a46455c4ec56a5a02c097374fc513-222x144.jpg"
              class="attachment-recipe-4column-thumb wp-post-image"
              alt="7a0a46455c4ec56a5a02c097374fc513"
            />
          </a>
          <h4>
            <a href="recipe-single-1.html"> Chocolate Earl Grey Pots... </a>
          </h4>
          <p>
            {" "}
            2 cups cream 120 grams dark chocolate, chopped 2 bags of earl grey
            tea 6 <a href="recipe-single-1.html">...more </a>{" "}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default RecipeListHorizental;
