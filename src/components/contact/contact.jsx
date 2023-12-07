import React from "react";
import { NavigationBar } from "../shared/NavigationBar";

const Contact = () => {
  return (
    <div>
      {" "}

     <NavigationBar/>
      <div class="main-wrap">
        <div id="container">
          <div class="top-search  clearfix">
            <h3 class="head-pet">
              
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
              <h1 class="title">Contact Us</h1>
              <br />
              <div class="single-img-box contact-map">
                <div id="map_canvas"> </div>
              </div>

              <h3>Contact Form</h3>

              <span class="w-pet-border"></span>
              <form id="contact-form" action="contact.php" method="post">
                <p>
                  <input
                    type="text"
                    name="name"
                    class="required"
                    id="cname"
                    data-msg-required="Please enter your name."
                    data-rule-required="true"
                    placeholder="Name here"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    id="cemail"
                    name="email"
                    class="email"
                    data-rule-required="true"
                    data-rule-email="true"
                    data-msg-required="Please enter your email address"
                    data-msg-email="Please enter a valid email address"
                    aria-required="true"
                    placeholder="Email here"
                  />
                </p>
                <p>
                  <textarea
                    name="message"
                    id="cmessage"
                    class="required"
                    title="* You must enter message."
                    cols="30"
                    rows="6"
                  >
                    Message
                  </textarea>
                </p>
                <p>
                  <input type="hidden" name="action" value="send_message" />
                  <input
                    type="hidden"
                    name="target"
                    value="robot@inspirythemes.com"
                  />
                  <input
                    type="submit"
                    name="contact-submit"
                    id="contact-submit"
                    value="Send Now"
                    class="readmore"
                  />
                  <img
                    src="images/loading.gif"
                    id="contact-loader"
                    alt="Loader"
                  />
                </p>
                <p id="message-sent"></p>
                <div id="search-error-container"> </div>
                <p>
                  <span class="w-pet-border"></span>
                </p>
              </form>
            </div>

            <div id="sidebar">
              <div id="text-2" class="widget widget_text clearfix">
                <h4 class="blue">
                  <span>Restaurant</span> Address
                </h4>
                <div class="textwidget">
                  <ul>
                    <li>
                      If food is an experience for you, then you will find it at
                      the Food Recipe
                    </li>
                    <li>
                      Recipe north street, opp secure garden. Hotel View 364001
                    </li>
                    <li>
                      <span class="phone">236-456-1226</span>
                      <span class="email">info@recipes.com</span>
                      <span class="note">236-456-321</span>
                    </li>
                  </ul>
                </div>
                <div class="widget-bot-round"></div>
              </div>
              <div id="text-3" class="widget widget_text clearfix">
                <h4 class="blue">
                  <span>Head</span> Office Address
                </h4>
                <div class="textwidget">
                  <ul>
                    <li>
                      If food is an experience for you, then you will find it at
                      the Food Recipe
                    </li>
                    <li>
                      Recipe north street, opp secure garden. Hotel View 364001
                    </li>
                    <li>
                      <span class="phone">236-456-1226</span>
                      <span class="email">info@recipes.com</span>
                      <span class="note">236-456-321</span>
                    </li>
                  </ul>
                </div>
                <div class="widget-bot-round"></div>
              </div>
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
export default Contact;
