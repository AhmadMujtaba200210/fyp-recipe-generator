import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import loadingFile from "../../assets/images/Dual Ball-1s-204px (1).gif";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function Spinner(state) {
  const [open, setOpen] = React.useState(false);
  const [close, setClose] = React.useState(true);

  React.useEffect(() => {
    setOpen(state);
    setClose(!state);
  }, [state]);
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={loadingFile}
            alt="Loading"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </Box>
      </Modal>
    </div>
  );
}
