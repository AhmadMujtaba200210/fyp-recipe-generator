import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { Box, Stack } from "@mui/material"; // Import Stack from MUI
import RecipeChipAuto from "../autocomplete/RecipeChipAuto";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function RecipeChip({ data }) {
  const [chipData, setChipData] = React.useState([]);

  React.useEffect(() => {
    setChipData(data);
  }, [data]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip, index) => index !== chipToDelete)
    );
  };

  const handleAddChip = (newChipLabel) => {
    if (newChipLabel !== "") {
      console.log(newChipLabel);
      setChipData([...chipData, newChipLabel]);
    }
  };

  const handleRemoveAllChips = () => {
    setChipData([]);
  };

  return (
    <Stack spacing={2}>
      {" "}
      {/* Use Stack to manage spacing */}
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
      <Box style={{ display: "flex-wrap" }}>
        <button
          onClick={handleRemoveAllChips}
          className="readmore"
          style={{
            //marginLeft: "auto",
            marginTop: "0.125rem",
            cursor: "pointer",
            transition:
              "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
          }}
        >
          Clear All
        </button>
        <div
          style={{
            height: "50px",
          }}
        ></div>
        <div>
          <button
            onClick={handleRemoveAllChips}
            className="readmore"
            style={{
              marginLeft: "24rem",
              marginTop: "0.125rem",
              cursor: "pointer",
              transition:
                "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
            }}
          >
            Generate Recipe
          </button>
        </div>
      </Box>
      <p>hello there</p>
    </Stack>
  );
}
