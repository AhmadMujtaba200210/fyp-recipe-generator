import React, { useState, useEffect } from "react";
import "../../shared/navigationbar.css";

const MiscRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchMiscRecipes = async () => {
      try {
        const response = await getRecipesRandom(2); // Assuming you have an API function for fetching misc recipes
        const data = await response.json();
        setRecipes(data);
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
                <div style={{ display: 'flex', marginBottom:'10px'}} key={recipe.id}>
                  <img
                    src={`${process.env.REACT_APP_API_BASE_URL}/get_image_43x51/${recipe.title}.jpg`} // Assuming your API provides an 'image' property
                    className="attachment-sidebar-tabs wp-post-image"
                    alt={recipe.title}
                  />

                  <h5 style={{ paddingLeft:'10px', paddingTop:'10px'}}>{recipe.title}</h5>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiscRecipes;

export const getRecipesRandom = async (random) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/recipe/hot/${random}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response;
    } catch (error) {
        throw error;
    }
}
