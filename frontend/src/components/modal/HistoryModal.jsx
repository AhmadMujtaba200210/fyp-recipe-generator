import React from "react";
import { selectCurrentUser, selectHistory, setHistory } from "../../state/index";
import {
  Box,
  List,
  ListItem,
  Modal,
  Typography,
  IconButton,
  useMediaQuery
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useNavigate } from "react-router-dom";

export const HistoryModal = ({ open, handleClose }) => {
  const history = useSelector(selectHistory);
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : 400,
    height: isMobile ? "auto" : 300,
    maxHeight: "80vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: isMobile ? 2 : 4,
    overflowY: "auto",
    borderRadius: "15px",
  };

  const handleDelete = async (historyId) => {
    const URL = `${process.env.REACT_APP_BACKEND_API_URL}/api/v1/history/delete/${historyId}`;
    const HistoryUpdateURL = `${process.env.REACT_APP_BACKEND_API_URL}/api/v1/history/get/${user.userId}`;
    try {
      await fetch(URL, {
        method: "DELETE"
      });

      const updatedHistory = await fetch(HistoryUpdateURL, {
        method: "GET",
      });
      const historyData = await updatedHistory.json();
      dispatch(setHistory(historyData));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyle}>
        <h2 id="modal-title">Search History</h2>
        {history && history.length > 0 ? (
          <List>
            {history.map((item, index) => (
              <ListItem
                key={index}
                style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
              >
                <div onClick={() => {
                  console.log(item);
                  navigate(`/history/${item.historyId}`);
                }} style={{ flex: 1, fontWeight: "bold", cursor: "pointer" }}>
                  {item.title}
                </div>
                <div style={{ marginLeft: "10px", display: "flex", flexDirection: "column" }}>
                  <span>{item.serving}</span>
                  <span>{item.cuisine}</span>
                  <span>{item.createdDate.split("T")[0]}</span>
                </div>
                <IconButton onClick={() => handleDelete(item.historyId)} style={{ marginLeft: "auto" }}>
                  <HighlightOffIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography
            id="modal-description"
            variant="body1"
            sx={{ mt: 2, textAlign: "center" }}
          >
            No search history yet
          </Typography>
        )}
      </Box>
    </Modal>
  );
};
