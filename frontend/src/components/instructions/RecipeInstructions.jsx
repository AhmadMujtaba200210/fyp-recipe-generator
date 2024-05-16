import React, { useState, useEffect } from 'react';
import '../../shared/navigationbar.css';

const RecipeInstructions = ({ instructions }) => {
  const [checkedSteps, setCheckedSteps] = useState([]);

  // Initialize checkedSteps array based on the length of instructions when component mounts or instructions change
  useEffect(() => {
    if (instructions && instructions.length > 0) {
      setCheckedSteps(new Array(instructions.length).fill(false));
    }
  }, [instructions]);

  const handleCheckboxChange = (index) => {
    const updatedCheckedSteps = [...checkedSteps];
    updatedCheckedSteps[index] = !updatedCheckedSteps[index];
    setCheckedSteps(updatedCheckedSteps);
  };

  // Handle cases where instructions are empty or undefined
  if (!instructions || instructions.length === 0) {
    return (
      <div>
        <h4 className="red">Instructions</h4>
        <p>LLM is generating Recipe...</p>
      </div>
    );
  }

  return (
    <div>
      {instructions.map((step, index) => (
        <div key={index}>
          <h4 className="red me-steps" style={{ textDecoration: checkedSteps[index] ? 'line-through' : 'none', margin: "0 0 6px 0" }}>
            <input
              type="checkbox"
              checked={checkedSteps[index] || false}
              onChange={() => handleCheckboxChange(index)}
            />
            Step {index + 1}
          </h4>
          <p className='instructions' style={{ textDecoration: checkedSteps[index] ? 'line-through' : 'none', padding: "0px" }} itemprop="recipeInstructions">
            {step}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecipeInstructions;
