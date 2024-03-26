import * as React from "react";
import "./texfieldStyle.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAutocomplete } from "@mui/material";

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
        console.log(v);
        addItem(v.label);
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Ingredients = [
  { label: "Salt" },
  { label: "Pepper" },
  { label: "Garlic" },
  { label: "Onion" },
  { label: "Olive Oil" },
  { label: "Butter" },
  { label: "Tomato" },
  { label: "Flour" },
  { label: "Sugar" },
  { label: "Eggs" },
  { label: "Milk" },
  { label: "Cheese" },
  { label: "Chicken" },
  { label: "Beef" },
  { label: "Pasta" },
  { label: "Rice" },
  { label: "Lemon" },
  { label: "Honey" },
  { label: "Vinegar" },
  { label: "Bread" },
  { label: "Cinnamon" },
  { label: "Vanilla Extract" },
  { label: "Baking Powder" },
  { label: "Baking Soda" },
  { label: "Chocolate" },
  { label: "Yogurt" },
  { label: "Cream" },
  { label: "Spinach" },
  { label: "Broccoli" },
  { label: "Carrot" },
  { label: "Potato" },
  { label: "Bell Pepper" },
  { label: "Cucumber" },
  { label: "Avocado" },
  { label: "Cilantro" },
  { label: "Parsley" },
  { label: "Basil" },
  { label: "Mushroom" },
  { label: "Zucchini" },
  { label: "Lettuce" },
  { label: "Celery" },
  { label: "Green Onion" },
  { label: "Ginger" },
  { label: "Soy Sauce" },
  { label: "Fish Sauce" },
  { label: "Worcestershire Sauce" },
  { label: "Mustard" },
  { label: "Mayonnaise" },
  { label: "Ketchup" },
  { label: "Chili Powder" },
  { label: "Paprika" },
  { label: "Cumin" },
  { label: "Curry Powder" },
  { label: "Coriander" },
  { label: "Turmeric" },
  { label: "Oregano" },
  { label: "Thyme" },
  { label: "Rosemary" },
  { label: "Bay Leaf" },
  { label: "Sesame Oil" },
  { label: "Coconut Milk" },
  { label: "Peanut Butter" },
  { label: "Almond" },
  { label: "Walnut" },
  { label: "Cashew" },
  { label: "Pine Nut" },
  { label: "Sunflower Seed" },
  { label: "Quinoa" },
  { label: "Lentils" },
  { label: "Chickpeas" },
  { label: "Kidney Beans" },
  { label: "Black Beans" },
  { label: "Coconut Flakes" },
  { label: "Chia Seeds" },
  { label: "Flaxseed" },
  { label: "Tofu" },
  { label: "Seitan" },
  { label: "Tempeh" },
  { label: "Nutritional Yeast" },
  { label: "Maple Syrup" },
  { label: "Agave Syrup" },
  { label: "Molasses" },
  { label: "Raisins" },
  { label: "Dried Cranberries" },
  { label: "Dates" },
  { label: "Coconut Sugar" },
  { label: "Brown Sugar" },
  { label: "Powdered Sugar" },
  { label: "Cornstarch" },
  { label: "Arrowroot" },
  { label: "Gelatin" },
  { label: "Agar Agar" },
  { label: "Cornmeal" },
  { label: "Oatmeal" },
  { label: "Quinoa Flour" },
  { label: "Almond Flour" },
  { label: "Coconut Flour" }
];
