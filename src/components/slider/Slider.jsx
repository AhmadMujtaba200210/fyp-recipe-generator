import React from "react";
import "../../shared/navigationbar.css"

export const Slider = () => {
  return (
    <div>
      
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
                src=""
                className="attachment-li-slider-thumb wp-post-image"
                alt="slider image here"
              />
            </a>
            <div className="slide-info">
              <h2>
                <a href="recipe-single-1.html">
                  Chocolate Earl Grey Pots de Creme Recipe
                </a>
              </h2>

              <p>
                2 cups cream 120 grams dark chocolate, chopped 2 bags of earl
                grey tea 6 egg yolks 3 Tablespoons of sugar 1/2 cup whipping
                cream 2 Tablespoons powdered ...
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
  );
};
