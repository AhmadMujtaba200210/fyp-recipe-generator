import * as React from "react";
import { styled } from "@mui/material/styles";
import "./texfieldStyle.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
export default function RecipeChipAuto({ addItem }) {
  return (
    <Autocomplete
      type="search"
      disablePortal
      disableClearable
      id="combo-box-demo"
      options={top100Ingredients}
      sx={{ width: 200, marginTop: 50 }}
      onChange={(e, v) => {
        if (v) {
          console.log(v);
          addItem(v);
        }
      }}
      renderInput={(params) => (
        <TextField
          type="search"
          InputProps={{
            endAdornment: null,
          }}
          {...params}
          label="Ingredients"
        />
      )}
    />
  );
}


const top100Ingredients = [
  "Salt",
  "Pepper",
  "Garlic",
  "Onion",
  "Olive Oil",
  "Butter",
  "Tomato",
  "Flour",
  "Sugar",
  "Eggs",
  "Milk",
  "Cheese",
  "Chicken",
  "Beef",
  "Pasta",
  "Rice",
  "Lemon",
  "Honey",
  "Vinegar",
  "Bread",
  "Cinnamon",
  "Vanilla Extract",
  "Baking Powder",
  "Baking Soda",
  "Chocolate",
  "Yogurt",
  "Cream",
  "Spinach",
  "Broccoli",
  "Carrot",
  "Potato",
  "Bell Pepper",
  "Cucumber",
  "Avocado",
  "Cilantro",
  "Parsley",
  "Basil",
  "Mushroom",
  "Zucchini",
  "Lettuce",
  "Celery",
  "Green Onion",
  "Ginger",
  "Soy Sauce",
  "Fish Sauce",
  "Worcestershire Sauce",
  "Mustard",
  "Mayonnaise",
  "Ketchup",
  "Chili Powder",
  "Paprika",
  "Cumin",
  "Curry Powder",
  "Coriander",
  "Turmeric",
  "Oregano",
  "Thyme",
  "Rosemary",
  "Bay Leaf",
  "Sesame Oil",
  "Coconut Milk",
  "Peanut Butter",
  "Almond",
  "Walnut",
  "Cashew",
  "Pine Nut",
  "Sunflower Seed",
  "Quinoa",
  "Lentils",
  "Chickpeas",
  "Kidney Beans",
  "Black Beans",
  "Coconut Flakes",
  "Chia Seeds",
  "Flaxseed",
  "Tofu",
  "Seitan",
  "Tempeh",
  "Nutritional Yeast",
  "Maple Syrup",
  "Agave Syrup",
  "Molasses",
  "Raisins",
  "Dried Cranberries",
  "Dates",
  "Coconut Sugar",
  "Brown Sugar",
  "Powdered Sugar",
  "Cornstarch",
  "Arrowroot",
  "Gelatin",
  "Agar Agar",
  "Cornmeal",
  "Oatmeal",
  "Quinoa Flour",
  "Almond Flour",
  "Coconut Flour"
];

