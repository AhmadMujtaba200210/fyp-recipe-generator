import React from "react";
import "../../shared/navigationbar.css";

const Cusine = () => {
  return (
    <div>
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
  );
};

export default Cusine;
