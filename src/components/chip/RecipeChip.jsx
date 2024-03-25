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

export default function RecipeChip() {
  const [chipData, setChipData] = React.useState([
    { key: 1, label: "Angular" },
    { key: 2, label: "jQuery" },
    { key: 3, label: "Polymer" },
    { key: 4, label: "Vue.js" },
    { key: 5, label: "Angular" },
    { key: 6, label: "jQuery" },
    { key: 7, label: "Polymer" },
    { key: 8, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const handleAddChip = (newChipLabel) => {
    if (newChipLabel !== "") {
      console.log(newChipLabel);
      const newChip = {
        key: chipData.length,
        label: newChipLabel,
      };
      setChipData([...chipData, newChip]);
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
        {chipData.map((data) => {
          let icon;

          return (
            <ListItem key={data.key}>
              <Chip
                icon={icon}
                label={data.label}
                onDelete={
                  data.label === "React" ? undefined : handleDelete(data)
                }
              />
            </ListItem>
          );
        })}
      </Paper>
      <Box>
        <button
          onClick={handleRemoveAllChips}
          className="readmore"
          style={{
            marginLeft: "auto",
            marginTop: "0.125rem",
            // fontSize: "0.75rem",
            textTransform: "uppercase",
            // fontWeight: "600",
            // color: "rgba(81, 131, 40, 0.689)",
            // border: "1px solid rgba(81, 131, 40, 0.689)",
            // borderRadius: "0.375rem",
            // padding: "0.375rem 0.75rem",
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
      </Box>
    </Stack>
  );
}
