import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { Box, Stack, TextField } from "@mui/material";
import RecipeChipAuto from "../autocomplete/RecipeChipAuto";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import Spinner from "../dropzone/Spinner";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function RecipeChip({ data }) {
  const [chipData, setChipData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [ingredients, setIngredients] = React.useState([]);
  const [serving, setServing] = React.useState(2);
  const [cuisine, setCuisine] = React.useState("asian");
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [responseData, setResponseData] = React.useState([]);
  const [recipeData, setRecipeData] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (Array.isArray(data)) {
      setChipData(data);
      setIngredients(data);
    }
  }, [data]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip, index) => index !== chipToDelete)
    );

    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient, index) => index !== chipToDelete)
    );
  };

  const handleAddChip = (newChipLabel) => {
    if (newChipLabel !== "") {
      setChipData([...chipData, newChipLabel]);
      setIngredients([...ingredients, newChipLabel]);
    }
  };

  const handleRemoveAllChips = () => {
    setChipData([]);
    setIngredients([]);
  };

  const handleRecipeGeneration = async () => {
    const formData = new FormData();

    ingredients.forEach((data) => formData.append("ingredients", data));
    formData.append("serving", serving);
    formData.append("cuisine", cuisine);

    console.log(Object.fromEntries(formData.entries()));

    const URL = `${process.env.REACT_APP_LLM_API_URL}/api/v1/llm/recipe`;

    try {
      const response = await fetch(URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      setRecipeData(data);
      return data;
    } catch (error) {
      setSnackbarMessage(error.message);
      console.error(error);
      setSnackbarOpen(true);
    } finally {
      setIsSubmitting(false); // Set isSubmitting to false after API call completes
    }
  };

  const handleGenerateRecipe = async () => {
    try {
      setIsSubmitting(true); // Set isSubmitting to true before initiating API call
      const recipeLLM = await handleRecipeGeneration();
      navigate(`/recipe/llm`, {
        state: {
          recipe: recipeLLM,
        },
      });
    } catch (error) {
      console.error("LLM error:", error.message);
    }
  };

  return (
    <>
      {isSubmitting && <Spinner state={isSubmitting} />}{" "}
      {/* Render spinner while isSubmitting is true */}
      <Stack spacing={2}>
        <RecipeChipAuto addItem={handleAddChip} />
        <Paper
          sx={{
            display: "flex",
            justifyContent: "start",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0.5,
            m: 0,
          }}
          component="ul"
        >
          {chipData.map((label, index) => (
            <ListItem key={index}>
              <Chip label={label} onDelete={handleDelete(index)} />
            </ListItem>
          ))}
        </Paper>
        <Box>
          <button
            onClick={handleRemoveAllChips}
            className="readmore"
            style={{
              marginLeft: "auto",
              marginTop: "0.125rem",
              cursor: "pointer",
              transition:
                "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
            }}
          >
            Clear All
          </button>
          <p />
          <button
            className="readmore"
            onClick={() => setOpen(true)}
            style={{
              marginLeft: "auto",
              marginTop: "0.125rem",
              cursor: "pointer",
              transition:
                "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
            }}
          >
            Generate Recipe
          </button>

          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Preview Your Requirements:
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Ingredients:
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexWrap: "wrap",
                    listStyle: "none",
                    p: 0.5,
                    m: 0,
                  }}
                  component="ul"
                >
                  {ingredients.map((label, index) => (
                    <ListItem key={index}>
                      <Chip label={label} onDelete={handleDelete(index)} />
                    </ListItem>
                  ))}
                </Paper>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Serving:
                <TextField
                  type="number"
                  variant="outlined"
                  value={serving}
                  onChange={(event) => {
                    let newValue = event.target.value;

                    if (isNaN(newValue)) {
                      newValue = 0;
                    }

                    if (newValue < 0) {
                      newValue = 0;
                    }

                    setServing(newValue);
                  }}
                  sx={{ ml: 1, width: "10ch" }}
                />
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Cuisine:
                <TextField
                  variant="outlined"
                  value={cuisine}
                  onChange={(event) => {
                    setCuisine(event.target.value);
                  }}
                  sx={{ ml: 1, width: "15ch" }} // Apply custom styles for cuisine TextField
                />
              </Typography>

              <button
                className="readmore"
                onClick={handleGenerateRecipe}
                style={{
                  marginTop: "10px",
                  cursor: "pointer",
                  transition:
                    "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
                  // Use inline JavaScript to conditionally set marginLeft based on screen size
                  marginLeft:
                    window.innerWidth > 391 && window.innerWidth < 492
                      ? "120px"
                      : "280px",
                }}
              >
                Generate Recipe
              </button>

              {console.log(ingredients)}
            </Box>
          </Modal>
        </Box>
        <p />
      </Stack>
    </>
  );
}
