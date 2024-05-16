import React from 'react';

const RecipeIngredients = ({ ingredients }) => {
  // Check if the ingredients array is present and has at least one item
  if (!ingredients || ingredients.length === 0) {
    return (
      <div>
        <h3 className="blue">Ingredients</h3>
        <p>LLM is generating Recipe...</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="blue">Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} className="ingredient" itemprop="ingredients">
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
