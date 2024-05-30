import React from "react";
import { selectFavourites } from "../../state/index";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";

export const FavouriteModal = ({ open, handleClose }) => {
  const favourites = useSelector(selectFavourites);
  const isMobile = useMediaQuery("(max-width:600px)");

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : 400, // responsive width
    height: isMobile ? "auto" : 300, // responsive height
    maxHeight: "80vh", // ensure modal doesn't exceed viewport height
    bgcolor: "background.paper",
    boxShadow: 24,
    p: isMobile ? 2 : 4, // responsive padding
    overflowY: "auto", // enables vertical scrolling
    borderRadius: "15px",
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <h2 id="modal-title">Favourites</h2>
          {favourites && favourites.length > 0 ? (
            <List>
              {favourites.map((item, index) => (
                <ListItem key={index} onClick={() => alert(item.title)}>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography
              id="modal-description"
              variant="body1"
              sx={{ mt: 2, textAlign: "center" }}
            >
              Currently we are working on this feature we will include this in
              our next MVP
            </Typography>
          )}
        </Box>
      </Modal>
    </>
  );
};
