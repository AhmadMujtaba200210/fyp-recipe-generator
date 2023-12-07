import React from "react";
import { NavigationBar } from "../shared/NavigationBar";

export const About = () => {
  return (
    <div class="main-wrap">
        <NavigationBar />
      <div id="container">
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

        <div id="content" class="clearfix ">
          <div id="left-area" class="clearfix">
            <div
              class="post-34 page type-page status-publish hentry"
              id="page-34"
            >
              <h1 class="post-title">About</h1>
              <p class="meta">
                <span class="comments">
                  <span>Comments Off</span>
                </span>{" "}
                <span>|</span> <span> March 6, 2012</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </p>
              <p>
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim placerat facer possim assum. Typi
                non habent claritatem insitam; est usus legentis in iis qui
                facit eorum claritatem. Investigationes demonstraverunt lectores
                legere me lius quod ii legunt saepius. Claritas est etiam
                processus dynamicus, qui sequitur mutationem consuetudium
                lectorum. Mirum est notare quam littera gothica, quam nunc
                putamus parum claram, anteposuerit litterarum formas humanitatis
                per seacula quarta decima et quinta decima. Eodem modo typi, qui
                nunc nobis videntur parum clari, fiant sollemnes in futurum.
              </p>
              <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </p>
              <p>
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim placerat facer possim assum. Typi
                non habent claritatem insitam; est usus legentis in iis qui
                facit eorum claritatem. Investigationes demonstraverunt lectores
                legere me lius quod ii legunt saepius. Claritas est etiam
                processus dynamicus, qui sequitur mutationem consuetudium
                lectorum. Mirum est notare quam littera gothica, quam nunc
                putamus parum claram, anteposuerit litterarum formas humanitatis
                per seacula quarta decima et quinta decima. Eodem modo typi, qui
                nunc nobis videntur parum clari, fiant sollemnes in futurum.
              </p>
            </div>
          </div>

          <div id="sidebar">
            <div class="widget fav-recipes nostylewt">
              <h2 class="w-bot-border">
                <span>MISC</span> Recipes
              </h2>

              <div class="tabed">
                <ul class="tabs clearfix">
                  <li class="current">
                    Recent<span></span>
                  </li>
                  <li>
                    Popular<span></span>
                  </li>
                  <li>
                    Random<span></span>
                  </li>
                </ul>
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

                      <p class="rate">
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="off"></span>
                        (4.3 / 5)
                      </p>
                    </li>
                    <li>
                      <a href="recipe-single-1.html" class="img-box">
                        <img
                          src="images/demo/Pesto-Pizza-with-Roasted-Garlic-Potato2-63x53.jpg"
                          class="attachment-sidebar-tabs wp-post-image"
                          alt="Pesto-Pizza-with-Roasted-Garlic-Potato2"
                        />
                      </a>
                      <h5>
                        {" "}
                        <a href="recipe-single-1.html">
                          Pesto Pizza With Roasted Garlic &#038; Potato
                        </a>
                      </h5>

                      <p class="rate">
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="off"></span>
                        (4.1 / 5)
                      </p>
                    </li>
                    <li>
                      <a href="recipe-single-1.html" class="img-box">
                        <img
                          src="images/demo/Pimento-Cheese-Potato-Skins-63x53.jpg"
                          class="attachment-sidebar-tabs wp-post-image"
                          alt="Pimento-Cheese-Potato-Skins"
                        />
                      </a>
                      <h5>
                        <a href="recipe-single-1.html">
                          Pimento Cheese Potato Skins
                        </a>
                      </h5>

                      <p class="rate">
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="off"></span>
                        (4.4 / 5)
                      </p>
                    </li>
                  </ul>
                </div>

                <div class="block">
                  <ul class="highest">
                    <li>
                      <a href="recipe-single-1.html" class="img-box">
                        <img
                          src="images/demo/Goat-Cheese-Chorizo-Rolls2-63x53.jpg"
                          class="attachment-sidebar-tabs wp-post-image"
                          alt="Goat-Cheese-Chorizo-Rolls2"
                        />
                      </a>
                      <h5>
                        {" "}
                        <a href="recipe-single-1.html">
                          Goat Cheese and Chorizo Rolls
                        </a>
                      </h5>

                      <p class="rate">
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="off"></span>
                        (4.3 / 5)
                      </p>
                    </li>
                    <li>
                      <a href="recipe-single-1.html" class="img-box">
                        <img
                          src="images/demo/Pimento-Cheese-Potato-Skins-63x53.jpg"
                          class="attachment-sidebar-tabs wp-post-image"
                          alt="Pimento-Cheese-Potato-Skins"
                        />
                      </a>
                      <h5>
                        {" "}
                        <a href="recipe-single-1.html">
                          Pimento Cheese Potato Skins
                        </a>
                      </h5>

                      <p class="rate">
                        {" "}
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="off"></span>
                        (4.4 / 5)
                      </p>
                    </li>
                    <li>
                      <a href="recipe-single-1.html" class="img-box">
                        <img
                          src="images/demo/Warm-Marinated-Flank-Steak-Salad-1-63x53.jpg"
                          class="attachment-sidebar-tabs wp-post-image"
                          alt="Warm-Marinated-Flank-Steak-Salad-1"
                        />
                      </a>
                      <h5>
                        {" "}
                        <a href="recipe-single-1.html">
                          Warm Flank Steak Salad With Mint And Cilantro
                        </a>
                      </h5>

                      <p class="rate">
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="off"></span>( 4.2 / 5)
                      </p>
                    </li>
                  </ul>
                </div>

                <div class="block">
                  <ul class="highest">
                    <li>
                      <a href="recipe-single-1.html" class="img-box">
                        <img
                          src="images/demo/Goat-Cheese-Chorizo-Rolls2-63x53.jpg"
                          class="attachment-sidebar-tabs wp-post-image"
                          alt="Goat-Cheese-Chorizo-Rolls2"
                        />
                      </a>
                      <h5>
                        {" "}
                        <a href="recipe-single-1.html">
                          Goat Cheese and Chorizo Rolls
                        </a>
                      </h5>

                      <p class="rate">
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="off"></span>
                        (4.3 / 5)
                      </p>
                    </li>
                    <li>
                      <a href="recipe-single-1.html" class="img-box">
                        <img
                          src="images/demo/Jalapeno-Poppers-63x53.jpg"
                          class="attachment-sidebar-tabs wp-post-image"
                          alt="Jalapeño-Poppers"
                        />
                      </a>
                      <h5>
                        <a href="http://www.960demo.com/foodrecipes-dev/recipe/jalapeno-poppers/">
                          Jalapeno Poppers
                        </a>
                      </h5>

                      <p class="rate">
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="off"></span>
                        (4.4 / 5)
                      </p>
                    </li>
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

                      <p class="rate">
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="on"></span>
                        <span class="off"></span>
                        (4.3 / 5)
                      </p>
                    </li>
                  </ul>
                </div>

                <div class="bot-border"></div>
              </div>
            </div>

            <div class="widget nostylewt Weekly_Special_Widget wk-special clearfix">
              <h2 class="w-bot-border">
                <span>Weekly</span> Special{" "}
              </h2>

              <div class="img-box for-all">
                <a href="recipe-single-1.html">
                  <img
                    src="images/demo/Grilled-Five-Spice-Chicken-122x132.jpg"
                    class="attachment-weekly-special-thumb wp-post-image"
                    alt="Grilled-Five-Spice-Chicken"
                  />
                </a>
              </div>
              <div class="for-res">
                <a href="recipe-single-1.html">
                  <img
                    src="images/demo/Grilled-Five-Spice-Chicken-251x132.jpg"
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
          </div>
          <div class="bot-ads-area">
            <div class="ads-642x79">
              <a href="#">
                <img src="images/ad-652x95.png" alt="Recipe Ads" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-pet-border"></div>
    </div>
  );
};
