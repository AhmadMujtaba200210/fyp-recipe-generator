import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeeklySpecial from "../../components/weekly-special/WeeklySpecial";
import MiscRecipes from "../../components/misc-recipes/MiscRecipes";
import { NewsEvents } from "../../components/news-events/NewsEvents";
import Footer from "../../components/footer/Footer";
import { NavigationBar } from "../../shared/NavigationBar";
import { getBlogDetails } from "../../server/requests";

export const SingleBlog = () => {
  const [details, setDetails] = useState(null);
  const { blog_title } = useParams();

  useEffect(() => {
    const getDetails = async (id) => {
      try {
        const response = await getBlogDetails(id);
        console.log("Response:", response.data);
        const data = await response.data;
        setDetails(data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    getDetails(blog_title);
  }, [blog_title]);

  if (!details) return null;

  return (
    <div>
      <NavigationBar />
      <div className="main-wrap">
        <div id="container">
          <div id="content" className="clearfix">
            <div
              id="left-area"
              className="clearfix"
              itemscope
              itemtype="http://schema.org/Recipe"
            >
              <div class="post-53 post category-barbeque" id="post-53">
                <h1 class="single-post-title">
                  {details.title}
                </h1>
                {/* <p class="meta">
                  By :{" "}
                  <a href="#" title="Posts by admin" rel="author">
                    admin
                  </a>{" "}
                  <span>|</span>{" "}
                  <span class="comments">
                    <a
                      href="#"
                      title="Comment on Best Bread pairing for Barbeque?"
                    >
                      1 Comment
                    </a>
                  </span>{" "}
                  <span>|</span> On : December 6, 2012 <span>|</span> Category :{" "}
                  <span class="cats">
                    <a href="#" rel="category tag">
                      barbeque
                    </a>
                  </span>{" "}
                </p> */}
                <p>
                  {details.description}
                </p>
{/*                 
                <div class="blog-post-social">
                  <h5>Share This Post!</h5>
                  <div class="share">
                    <a
                      class="twitter"
                      onclick="window.open('http://twitter.com/home?status=Best+Bread+pairing+for+Barbeque%3F - http://www.960demo.com/foodrecipes-dev/habitasse-augue-penatibus-sit-dictumst-arcu-in/','twitter','width=450,height=300,left='+(screen.availWidth/2-375)+',top='+(screen.availHeight/2-150)+'');return false;"
                      href="http://twitter.com/home?status=Best+Bread+pairing+for+Barbeque%3F%20-%20http://www.960demo.com/foodrecipes-dev/habitasse-augue-penatibus-sit-dictumst-arcu-in/"
                      title="Best Bread pairing for Barbeque?"
                      target="960development"
                    ></a>
                    <a
                      class="facebook"
                      onclick="window.open('http://www.facebook.com/share.php?u=http://www.960demo.com/foodrecipes-dev/habitasse-augue-penatibus-sit-dictumst-arcu-in/','facebook','width=450,height=300,left='+(screen.availWidth/2-375)+',top='+(screen.availHeight/2-150)+'');return false;"
                      href="http://www.facebook.com/share.php?u=http://www.960demo.com/foodrecipes-dev/habitasse-augue-penatibus-sit-dictumst-arcu-in/"
                      title="Best Bread pairing for Barbeque?"
                      target="960development"
                    ></a>
                    <a
                      class="google"
                      href="https://m.google.com/app/plus/x/?v=compose&amp;content=Best+Bread+pairing+for+Barbeque%3F%20-%20http://www.960demo.com/foodrecipes-dev/habitasse-augue-penatibus-sit-dictumst-arcu-in/"
                      onclick="window.open('https://m.google.com/app/plus/x/?v=compose&amp;content=Best+Bread+pairing+for+Barbeque%3F - http://www.960demo.com/foodrecipes-dev/habitasse-augue-penatibus-sit-dictumst-arcu-in/','gplusshare','width=450,height=300,left='+(screen.availWidth/2-375)+',top='+(screen.availHeight/2-150)+'');return false;"
                    ></a>
                    <a
                      class="print"
                      href="javascript:window.print()"
                      title="Print"
                    ></a>
                    <a
                      href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.960demo.com%2Ffoodrecipes-dev%2Fhabitasse-augue-penatibus-sit-dictumst-arcu-in%2F%26media=http://www.960demo.com/foodrecipes-dev/wp-content/uploads/2012/03/accor_3.jpg%26description=Best Bread pairing for Barbeque?"
                      class="pin-it-button"
                      count-layout="none"
                    >
                      <img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" />
                    </a>
                  </div>
                </div> */}
              </div>
              <span className="w-pet-border"></span>

              <div className="info-left instructions">
                <div itemprop="description"></div>
              </div>

              <span className="w-pet-border"></span>
              {/* Comment Box */}
            </div>

            <div id="sidebar">
              <WeeklySpecial />
              <MiscRecipes />
              <NewsEvents />
            </div>
          </div>
        </div>
      </div>
      <div id="footer-wrap">
        <Footer />
      </div>
    </div>
  );
};
