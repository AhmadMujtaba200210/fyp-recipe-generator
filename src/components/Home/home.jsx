import React from "react";
import { NavigationBar } from "../shared/NavigationBar";

export const Home = () => {
  return (
    <div>
      <div class="main-wrap">

        <NavigationBar/>
        <div id="container">
          {/* <!-- WEBSITE SEARCH STARTS HERE --> */}
          <div class="top-search  clearfix">
            <h3 class="head-pet">
              <span>Recipe Search</span>
            </h3>

            <form action="#" id="searchform">
              <p>
                <input
                  type="text"
                  name="s"
                  id="s"
                  class="field"
                  value=""
                  placeholder="Search for"
                />
                <input type="submit" name="s_submit" id="s-submit" value="" />
              </p>
            </form>

            <p class="statement">
              <span class="fireRed">Recipe Types:</span>
              <a href="#">Beef</a> , <a href="#">Cheese</a> ,{" "}
              <a href="#">Chicken</a> , <a href="#">Chocolate</a> ,{" "}
              <a href="#">Fish</a> , <a href="#">Pizzas</a>,{" "}
              <a href="#">Potatos</a>, <a href="#">Rolls</a>
            </p>
          </div>
          {/* <!-- end of top-search div--> */}

          {/* <!-- ============= CONTENT AREA STARTS HERE ============== --> */}
          <div id="content" class="clearfix homepage">
            {/* <!-- SLIDER STARTS HERE --> */}
            <div id="slider" class="slider2">
              {/* <!-- Start Most Rated --> */}

              <div class="most-rated">
                <span class="most-rated-title">Most Rated</span>
                <div class="item">
                  <a href="#" class="img-box">
                    <img
                      width="63"
                      height="53"
                      src="/src/assets/images/demo/Goat-Cheese-Chorizo-Rolls2-63x53.jpg"
                      class="attachment-most-rated-thumb wp-post-image"
                      alt="Goat-Cheese-Chorizo-Rolls2"
                    />
                  </a>
                  <h5>
                    <a href="#">Goat Cheese and Chorizo Rolls</a>
                  </h5>
                  <p>You know how bacon is...</p>
                </div>
              </div>
              {/* <!-- End Most Rated --> */}

              <h2 class="slider-head">
                {" "}
                <span>Top Recipes</span>of the day
              </h2>

              {/* <!-- Top recipes statement --> */}
              <p class="slogan">
                Sliding recipes are much more tasty as food than sliding.{" "}
              </p>

              {/* <!-- Start of Slides --> */}
              <div class="slides right-slider">
                <ul
                  class="cycle-slideshow"
                  data-cycle-fx={"scrollHorz"}
                  data-cycle-timeout={4000}
                  data-cycle-slides="li"
                  data-cycle-pager=".cycle-pager"
                >
                  <li>
                    <a href="#" className="img-box">
                      <img
                        width={515}
                        height={262}
                        src="/src/assets/images/demo/7a0a46455c4ec56a5a02c097374fc513-515x262.jpg"
                        className="attachment-li-slider-thumb wp-post-image"
                        alt="7a0a46455c4ec56a5a02c097374fc513"
                      />
                    </a>
                    <div className="slide-info">
                      <h2>
                        <a href="recipe-single-1.html">
                          Chocolate Earl Grey Pots de Creme Recipe
                        </a>
                      </h2>

                      <p>
                        2 cups cream 120 grams dark chocolate, chopped 2 bags of
                        earl grey tea 6 egg yolks 3 Tablespoons of sugar 1/2 cup
                        whipping cream 2 Tablespoons powdered ...
                      </p>
                      <a href="recipe-single-1.html" className="readmore">
                        Read more
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- end of slides --> */}
            </div>
            {/* <!-- end of Slider div --> */}

            {/* <!-- Home Page Whats Hot Recipe Area --> */}
            <div id="whats-hot">
              <h2 class="w-bot-border">
                What's <span>Hot</span>
              </h2>
              <ul class="cat-list clearfix">
                <li>
                  <h3>
                    <a href="recipe-single-1.html">Chocolate</a>
                  </h3>
                  <a href="recipe-single-1.html" class="img-box">
                    <img
                      src="/src/assets/images/demo/7a0a46455c4ec56a5a02c097374fc513-222x144.jpg"
                      class="attachment-recipe-4column-thumb wp-post-image"
                      alt="7a0a46455c4ec56a5a02c097374fc513"
                    />
                  </a>
                  <h4>
                    <a href="recipe-single-1.html">
                      {" "}
                      Chocolate Earl Grey Pots...{" "}
                    </a>
                  </h4>
                  <p>
                    {" "}
                    2 cups cream 120 grams dark chocolate, chopped 2 bags of
                    earl grey tea 6 <a href="recipe-single-1.html">
                      ...more{" "}
                    </a>{" "}
                  </p>
                </li>
                <li>
                  <h3>
                    {" "}
                    <a href="recipe-single-1.html">health </a>{" "}
                  </h3>
                  <a href="recipe-single-1.html" class="img-box">
                    {" "}
                    <img
                      src="/src/assets/images/demo/single-recipe_2-222x144.jpg"
                      class="attachment-recipe-4column-thumb wp-post-image"
                      alt="single-recipe_2"
                    />{" "}
                  </a>
                  <h4>
                    {" "}
                    <a href="recipe-single-1.html"> 10 Tips To Healthy... </a>
                  </h4>
                  <p>
                    Eat a variety of nutrient-rich foods. You need more than 40
                    different nutrients for good health,{" "}
                    <a href="recipe-single-1.html">...more </a>
                  </p>
                </li>
                <li>
                  <h3>
                    <a href="recipe-single-1.html">Rolls</a>
                  </h3>
                  <a href="recipe-single-1.html" class="img-box">
                    <img
                      src="/src/assets/images/demo/Goat-Cheese-Chorizo-Rolls2-222x144.jpg"
                      class="attachment-recipe-4column-thumb wp-post-image"
                      alt="Goat-Cheese-Chorizo-Rolls2"
                    />{" "}
                  </a>
                  <h4>
                    {" "}
                    <a href="recipe-single-1.html">
                      {" "}
                      Goat Cheese and Chorizo...{" "}
                    </a>{" "}
                  </h4>
                  <p>
                    {" "}
                    You know how bacon is all the rage these days? Bacon dipped
                    in chocolate, bacon{" "}
                    <a href="recipe-single-1.html">...more </a>
                  </p>
                </li>
                <li>
                  <h3>
                    {" "}
                    <a href="recipe-single-1.html"> Economical </a>{" "}
                  </h3>
                  <a href="recipe-single-1.html" class="img-box">
                    {" "}
                    <img
                      src="/src/assets/images/demo/accor_2-222x144.jpg"
                      class="attachment-recipe-4column-thumb wp-post-image"
                      alt="accor_2"
                    />{" "}
                  </a>
                  <h4>
                    <a href="recipe-single-1.html"> baking question </a>{" "}
                  </h4>
                  <p>
                    {" "}
                    Quis sed mid elit, risus aliquet placerat. Pid et, vel
                    phasellus augue a ultrices, natoque{" "}
                    <a href="recipe-single-1.html">...more </a>
                  </p>
                </li>
              </ul>
            </div>
            {/* <!-- end of whats-hot div --> */}

            <span class="w-pet-border"></span>

            <div id="home-infos" class="clearfix">
              <div class="widget nostylewt Weekly_Special_Widget wk-special clearfix">
                <h2 class="w-bot-border">
                  <span>Weekly</span> Special{" "}
                </h2>

                <div class="img-box for-all">
                  <a href="recipe-single-1.html">
                    <img
                      src="/src/assets/images/demo/Grilled-Five-Spice-Chicken-122x132.jpg"
                      class="attachment-weekly-special-thumb wp-post-image"
                      alt="Grilled-Five-Spice-Chicken"
                    />
                  </a>
                </div>
                <div class="for-res">
                  <a href="recipe-single-1.html">
                    <img
                      src="/src/assets/images/demo/Grilled-Five-Spice-Chicken-251x132.jpg"
                      class="attachment-weekly-for-res wp-post-image"
                      alt="Grilled-Five-Spice-Chicken"
                    />
                  </a>
                </div>
                <h4>
                  {" "}
                  <a href="recipe-single-1.html">
                    Vietnamese Style Grilled Five Spice Chicken
                  </a>
                </h4>

                <p>
                  It may not be in my best interest to admit this, but here goes
                  nothing: grilling chicken scares me. It’s just...
                  <a href="recipe-single-1.html"> more</a>
                </p>
                <a href="recipe-single-1.html" class="readmore">
                  Read More
                </a>
              </div>
              {/* <!-- end of weekly spcial widget --> */}
              <div class="widget fav-recipes nostylewt">
                {" "}
                //delete here
                <h2 class="w-bot-border">
                  <span>MISC</span> Recipes
                </h2>
                <div class="tabed">
                  <ul class="tabs clearfix">
                    <li class="current">
                      Recipies<span></span>
                    </li>
                  </ul>
                  <div class="block current">
                    <ul class="highest">
                      <li>
                        <a href="recipe-single-1.html" class="img-box">
                          <img
                            src="/src/assets/images/demo/7a0a46455c4ec56a5a02c097374fc513-63x53.jpg"
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
                </div>
                {/* <!-- end of tabed div --> */}
              </div>
              {/* <!-- end of fav-recipes widget --> */}

              <div class="widget newsEvent nostylewt">
                <h2 class="w-bot-border">
                  <span>News</span> and Events
                </h2>
                <ul class="list">
                  <li>
                    <h5>
                      <a href="single.html">Best Bread pairing for Barbeque?</a>
                    </h5>
                    <p>
                      Welcome to WordPress. This is your first post. Edit or
                      delete it,...<a href="single.html">more</a>
                    </p>
                  </li>
                  <li>
                    <h5>
                      {" "}
                      <a href="single.html">Best Bread pairing for Barbeque?</a>
                    </h5>
                    <p>
                      Quis sed mid elit, risus aliquet placerat. Pid et, vel
                      phasellus augue...<a href="single.html">more</a>{" "}
                    </p>
                  </li>
                </ul>
              </div>
              {/* <!-- end of fav-recipes widget --> */}
            </div>
            {/* <!-- end of home-infos div --> */}
          </div>
          {/* <!-- end of content div --> */}

          {/* <!-- CONTENT ENDS HERE --> */}
        </div>
        {/* <!-- end of container div --> */}
      </div>
    </div>
  );
};
