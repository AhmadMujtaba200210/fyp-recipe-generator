import React from "react";
import "../../shared/navigationbar.css";

const Address = () => {
  return (
    <div>
      <div id="text-2" class="widget widget_text clearfix">
        <h4 class="blue">
          <span>Disclaimer for </span> Recipe Generation Model
        </h4>
        <div class="textwidget">
          <ul>
            <li>
              This recipe generation tool uses machine learning to create
              recipes from classified ingredients.
            </li>
            <li>
              While we aim for accuracy, the recipes may require user
              adjustments for proportions, cooking times, and personal dietary
              needs.
            </li>
            <li>
              Always use your culinary judgment and verify nutritional
              information independently.
            </li>
            <li>
              <span class="phone">051-2345678</span>
              <span class="email">pixelcuisine@gmail.com</span>
              <span class="note">Flavors by AI</span>
            </li>
          </ul>
        </div>
        <div class="widget-bot-round"></div>
      </div>
    </div>
  );
};
export default Address;
