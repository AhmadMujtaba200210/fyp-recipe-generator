import React from "react";
import "../../shared/navigationbar.css"

const WeeklySpecial = () => {
  return (
    <div>

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
    </div>
  );
};

export default WeeklySpecial;