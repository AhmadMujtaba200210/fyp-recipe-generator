import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import WeeklySpecial from '../../components/weekly-special/WeeklySpecial';
import MiscRecipes from '../../components/misc-recipes/MiscRecipes';
import { NewsEvents } from '../../components/news-events/NewsEvents';
import Footer from '../../components/footer/Footer';
import { NavigationBar } from '../../shared/NavigationBar';
import { getBlogDetails } from '../../server/requests';

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
              {/* Slider here */}
              <span className="w-pet-border"></span>

              <div className="info-left instructions">
                <div itemprop="description">
                 
                </div>
              </div>
              {/* Right panel */}
              <div className="info-right">
                {/* Author */}

                {/* RateBox */}

                {/* NutritionalBox */}
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
  )
}
