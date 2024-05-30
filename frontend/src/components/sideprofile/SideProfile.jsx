import React, { useState } from "react";
import "../../shared/navigationbar.css";
import {
  Avatar,
  Button,
} from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { HistoryModal } from "../modal/HistoryModal";
import { FavouriteModal } from "../modal/FavouriteModal";
import { EditProfileModal } from "../modal/EditProfileModal";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../state";
const SideProfile = () => {
  const data = useSelector(selectCurrentUser)

  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const handleHistoryModalOpen = () => setIsHistoryModalOpen(true);
  const handleHistoryModalClose = () => setIsHistoryModalOpen(false);

  const [isFavouriteModalOpen, setIsFavouriteModalOpen] = useState(false);
  const handleFavouriteModalOpen = () => setIsFavouriteModalOpen(true);
  const handleFavouriteModalClose = () => setIsFavouriteModalOpen(false);

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const handleProfileModalOpen = () => setIsProfileModalOpen(true);
  const handleProfileModalClose = () => setIsProfileModalOpen(false);

  
  return (
    <>
      <HistoryModal
        open={isHistoryModalOpen}
        handleClose={handleHistoryModalClose}
      />
      <FavouriteModal
        open={isFavouriteModalOpen}
        handleClose={handleFavouriteModalClose}
      />
      <EditProfileModal
        open={isProfileModalOpen}
        handleClose={handleProfileModalClose}
      />
      <div id="text-2" className="widget widget_text clearfix">
        <div className="textwidget">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 ,bgcolor: "#63991b"}}
            >{data?.fullName[0]}</Avatar>
            <h4
              className="blue"
              style={{ marginLeft: "10px", marginTop: "8px" }}
            >
              {data?.fullName}
            </h4>
          </div>
          <ul>
            <li>{data?.description}</li>
            <li>
              <span className="email">{data?.email}</span>
              <Button
                style={{ marginLeft: "12px", marginTop: "8px" }}
                color="error"
                startIcon={<FaRegHeart />}
                onClick={handleFavouriteModalOpen}
              ></Button>
              <Button
                style={{ marginLeft: "25px", marginTop: "8px" }}
                color="success"
                startIcon={<FaHistory />}
                onClick={handleHistoryModalOpen}
              ></Button>
              <Button
                style={{ marginLeft: "25px", marginTop: "8px" }}
                color="secondary"
                startIcon={<ImProfile />}
                onClick={handleProfileModalOpen}
              ></Button>
            </li>
          </ul>
        </div>
        <div className="widget-bot-round"></div>
      </div>

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <h2 id="modal-title">Favourite Recipes</h2>
          <List>
            {favData.map((item, index) => (
              <ListItem button key={index} onClick={() => alert(item.title)}>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Modal> */}
    </>
  );
};

export default SideProfile;
