import React, { useState, useEffect } from "react";
import "../../shared/navigationbar.css";
import { getRecipesRandom } from "../../server/requests" ; 
import { Link } from "react-router-dom";

console.log(process.env)
const RecipeListHorizental = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getRecipesRandom(4);
        setRecipes(response.data);
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
            <Link to={`/recipe/${recipe.recipeId}`} className="img-box">
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/get_image_122x132/${recipe.title}.jpg`} // Assuming your API provides an 'image' property
                className="attachment-recipe-4column-thumb wp-post-image"
                alt={recipe.title}
              />
            </Link>
            <h4>
            <Link to={`/recipe/${recipe.recipeId}`}>{recipe.title}</Link>
            </h4>
            <p>{recipe.ingredients.slice(0,100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeListHorizental;
