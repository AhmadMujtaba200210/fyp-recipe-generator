import React, { useState, useEffect } from "react";
import "../../shared/navigationbar.css";
import { getRecipesRandom } from "../../server/requests" ; 

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
            <a href={`recipe-single-${recipe.id}.html`} className="img-box">
              <img
                src={recipe.image} // Assuming your API provides an 'image' property
                className="attachment-recipe-4column-thumb wp-post-image"
                alt={recipe.title}
              />
            </a>
            <h4>
              <a href={`recipe-single-${recipe.id}.html`}>{recipe.title}</a>
            </h4>
            <p>{recipe.ingredients}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeListHorizental;
