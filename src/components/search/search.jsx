import React from "react";
import "../../shared/navigationbar.css";
import SearchBarModel from "./SearchBarModel";
import { Button } from "@mui/material";
import { SearchBar } from "./SearchBar";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15em;
  overflow: hidden;
`;
const Search = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [results, setResults] = React.useState([]);

  return (
    <div>
      <div class="top-search  clearfix">
        <h3 class="head-pet">
          <span>Recipe Search</span>
        </h3>

        <form action="#" id="searchform">
          <p style={{ display: "flex" }}>
            <Button class="field" onClick={handleOpen} style={{ textAlign: "start",paddingLeft:"2em" 
            }}>
              Search for ...
              {/* <SearchBarModel/> */}
            </Button>
            <Modal
              keepMounted
              open={open}
              onClose={handleClose}

              // aria-labelledby="keep-mounted-modal-title"
              // aria-describedby="keep-mounted-modal-description"
              // disableEnforceFocus={false}
            >
              <AppContainer>
                <SearchBar />
              </AppContainer>
            </Modal>
            <input
              type="button"
              name="s_submit"
              id="s-submit"
              // value=""
              onClick={handleOpen}
            />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Search;
