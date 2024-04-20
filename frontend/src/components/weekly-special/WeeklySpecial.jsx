import React, { useState, useEffect } from "react";
import "../../shared/navigationbar.css";
import { getWeeklySpecial } from "../../server/requests";
import { Link } from "react-router-dom";

const WeeklySpecial = () => {
  const [special, setSpecial] = useState(null);

  useEffect(() => {
    const fetchWeeklySpecial = async () => {
      try {
        const response = await getWeeklySpecial();
        setSpecial(response.data);
      } catch (error) {
        console.error("Error fetching weekly special:", error);
      }
    };

    fetchWeeklySpecial();
  }, []);

  if (!special) {
    return null; // Return null or loading indicator while data is being fetched
  }

  return (
    <div>
      <div className="widget nostylewt Weekly_Special_Widget wk-special clearfix">
        <h2 className="w-bot-border">
          <span>Weekly</span> Special{" "}
        </h2>

        <div className="img-box for-all">
        <Link to={`/recipe/${special[0].recipeId}`}>
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}/get_image_122x132/${special[0].title}.jpg`} // Assuming your API provides an 'image' property
              className="attachment-weekly-special-thumb wp-post-image"
              alt={special[0].title}
            />
          </Link>
        </div>
        
        <h4>
          {" "}
          <Link to={`/recipe/${special[0].recipeId}`}>
            {special[0].title}
          </Link>
        </h4>
        <p>
          {special[0].instructions.slice(0, 100)}...
          {/* Displaying first 100 characters, adjust as needed */}
          <Link to={`/recipe/${special[0].recipeId}`}></Link>

        </p>
        <Link className="readmore" to={`/recipe/${special[0].recipeId}`}>readmore</Link>
      </div>
    </div>
  );
};

export default WeeklySpecial;
