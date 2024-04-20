import React from "react";

export const RecipeSlider = (props) => {
  return (
    <div>
      <h1 class="title fn" itemprop="name">
        {/* title here */}
        {props.title}
      </h1>
      {/* published date here */}
      <span class="published">2013-02-06</span>

      <ul class="recipe-cat-info clearfix">
        <li>
          Cuisine:
          <a href="#" rel="tag">
            {props.cuisine}
          </a>
        </li>
      </ul>

      {/* Image Slider */}
      <div class="single-img-box ">
        <div
          class="single-slider cycle-slideshow "
          data-cycle-pager=".cycle-pager"
        >
          {/* image here */}
          <img itemprop="image" src={{}} alt="" />
        </div>
        <div class="img-nav cycle-pager"></div>
      </div>

      <ul class="recipe-info clearfix">
        <li class="servings">
          <strong class="name">Servings :</strong>
          <span class="value">4</span>
        </li>
        <li class="prep-time">
          <strong class="name">Prep Time :</strong>
          <span class="value">
            <meta itemprop="prepTime" content="PT35M" />
            35
          </span>
        </li>
      </ul>
    </div>
  );
};
