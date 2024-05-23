import React, { useState, useEffect } from "react";
import "../../shared/navigationbar.css";
import { Link } from "react-router-dom";

const RecipeListHorizental = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getRecipesRandom(4);
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      
      <ul className="cat-list clearfix">
        {
        recipes.map((recipe) => (
          <li key={recipe.id}>
            <div
              className="hor-img"
              >
            <Link to={`/recipe/${recipe.recipeId}`} className="">
              
              <img
              src={`${process.env.REACT_APP_API_BASE_URL}/get_image/${recipe.title}.jpg`}
              className="attachment-recipe-4column-thumb wp-post-image"
                alt={recipe.title}
              />
              
            </Link>
            </div>
            <div className="recipe-heading">
            <h4>
            <Link to={`/recipe/${recipe.recipeId}`}>{recipe.title}</Link>
            </h4>
            <p>{recipe.ingredients.slice(0,100)}...</p>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default RecipeListHorizental;

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
};
