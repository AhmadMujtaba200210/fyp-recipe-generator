import React, { useState, useEffect } from "react";
import "../../shared/navigationbar.css";
import { getRecipesRandom } from "../../server/requests"; // Update this path

const MiscRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchMiscRecipes = async () => {
      try {
        const response = await getRecipesRandom(2); // Assuming you have an API function for fetching misc recipes
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching misc recipes:", error);
      }
    };

    fetchMiscRecipes();
  }, []);

  return (
    <div>
      <div className="widget fav-recipes nostylewt">
        <h2 className="w-bot-border">
          <span>MISC</span> Recipes
        </h2>
        <div className="tabed">
          <ul className="tabs clearfix">
            <li className="current">
              Recipies<span></span>
            </li>
          </ul>
          <div className="block current">
            <ul className="highest">
              {recipes.map((recipe) => (
                <li key={recipe.id}>
                  <img
                    src={`${process.env.REACT_APP_API_BASE_URL}/get_image_43x51/${recipe.title}.jpg`} // Assuming your API provides an 'image' property
                    className="attachment-sidebar-tabs wp-post-image"
                    alt={recipe.title}
                  />

                  <h5>{recipe.title}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiscRecipes;
