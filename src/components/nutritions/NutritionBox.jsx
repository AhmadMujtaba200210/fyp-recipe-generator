import React from "react";

export const NutritionBox = () => {
  return (
    <div
      class="nutritional"
      itemprop="nutrition"
      itemscope
      itemtype="http://schema.org/NutritionInformation"
    >
      <h3>Nutritional Info</h3>
      <p itemprop="description">This information is per serving.</p>
      <ul>
        <li class="nutrition">
          <p itemprop="name" class="type">
            Protein
          </p>
          <span class="value">6.60g</span>
        </li>
      </ul>
    </div>
  );
};
