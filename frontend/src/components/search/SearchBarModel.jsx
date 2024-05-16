import * as React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
// import "../ReactiveSearch/SearchBarModel.css";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20em;
`;
export default function SearchBarModel(value) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(value);
  const handleClose = () => setOpen(false);
  const [results, setResults] = React.useState([]);

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <AppContainer>
          <SearchBar />
        </AppContainer>
      </Modal>
    </div>
  );
}
