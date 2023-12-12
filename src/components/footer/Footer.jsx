import React from "react";
import "../../shared/navigationbar.css"

const Footer = () => {
  return (
    <div>
      <div id="bottom-wrap">
        <ul id="bottom" class="clearfix">
          <li class="about">
            <a href="about-us.html">
              <img
                src="images/footer-logo.png"
                alt="Food Recipes"
                class="footer-logo"
              />
            </a>

            <p>
              Donec sollicitudin molestie malesuada. Proin eget tortor risus.
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. ...
            </p>
            <a href="about-us.html" class="readmore">
              Read more About Us
            </a>
          </li>

          <li
            id="recent_recipe_footer_widget-3"
            class="Recent_Recipe_Footer_Widget"
          >
            <h2 class="w-bot-border">
              <span>Recent</span> Recipes
            </h2>
            <ul class="recent-posts nostylewt">
              <li class="clearfix">
                <a href="recipe-single-1.html" class="img-box">
                  <img
                    src="images/demo/7a0a46455c4ec56a5a02c097374fc513-63x53.jpg"
                    class="attachment-most-rated-thumb wp-post-image"
                    alt="7a0a46455c4ec56a5a02c097374fc513"
                  />
                </a>
                <h5>
                  <a href="recipe-single-1.html">
                    Chocolate Earl Grey Pots de...
                  </a>
                </h5>

                <p>2 cups cream 120 grams dark chocolate, chopped 2 bags...</p>
              </li>
              <li class="clearfix">
                <a href="recipe-single-1.html" class="img-box">
                  <img
                    src="images/demo/Pesto-Pizza-with-Roasted-Garlic-Potato2-63x53.jpg"
                    class="attachment-most-rated-thumb wp-post-image"
                    alt="Pesto-Pizza-with-Roasted-Garlic-Potato2"
                  />
                </a>
                <h5>
                  <a href="recipe-single-1.html">
                    Pesto Pizza With Roasted Garlic...
                  </a>
                </h5>
                <p>Mention potatoes on pizza and you’ll get one of two...</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;