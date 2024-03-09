import React from 'react';

const RecipeIngredients = ({ ingredients }) => {
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
