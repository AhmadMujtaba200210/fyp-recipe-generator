import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { Box, Modal, Snackbar, Alert, useMediaQuery } from "@mui/material";
import { setUpdateUser, selectCurrentUser } from "../../state/index";

export const EditProfileModal = ({ open, handleClose }) => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarVariant, setSnackbarVariant] = useState("success");

  const initialValues = {
    email: user?.email,
    fullName: user?.fullName,
    profession: user?.profession,
    description: user?.description,
    age: user?.age,
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : 400,
    height: "auto",
    maxHeight: "80vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: isMobile ? 2 : 4,
    overflowY: "auto",
    borderRadius: "15px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop: "10px",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    boxSizing: "border-box",
  };

  const updateSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    fullName: yup.string().required("Full Name is required"),
    profession: yup.string(),
    description: yup.string(),
    age: yup.number().positive().integer(),
  });

  const update = async (values, onSubmitProps) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_API_URL}/api/v1/user/update/${values.email}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        onSubmitProps.resetForm();
        setSnackbarMessage("Update successful!");
        setSnackbarVariant("success");
        setSnackbarOpen(true);
        dispatch(setUpdateUser({ user: data.user }));
        handleClose();
      } else if (response.status === 400) {
        setSnackbarMessage("Update failed. No changes found");
        setSnackbarVariant("warning");
        setSnackbarOpen(true);
      } else if (response.status === 404) {
        setSnackbarMessage("Update failed. User not registered.");
        setSnackbarVariant("error");
        setSnackbarOpen(true);
      } else {
        throw new Error("Internal Server Error");
      }
    } catch (error) {
      setSnackbarMessage("Server Error");
      setSnackbarVariant("error");
      setSnackbarOpen(true);
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    await update(values, onSubmitProps);
  };

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert elevation={6} variant="outlined" severity={snackbarVariant}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <h2 id="modal-title">User Profile</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={updateSchema}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} style={formStyle}>
                <input
                  style={inputStyle}
                  onChange={handleChange}
                  value={values.fullName}
                  onBlur={handleBlur}
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                />
                <input
                  style={inputStyle}
                  onChange={handleChange}
                  value={values.description}
                  onBlur={handleBlur}
                  type="text"
                  name="description"
                  placeholder="Description"
                  required
                />
                <input
                  style={inputStyle}
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  disabled
                />
                <input
                  style={inputStyle}
                  onChange={handleChange}
                  value={values.profession}
                  onBlur={handleBlur}
                  type="text"
                  name="profession"
                  placeholder="Profession"
                  required
                />
                <input
                  style={inputStyle}
                  onChange={handleChange}
                  value={values.age}
                  onBlur={handleBlur}
                  type="number"
                  name="age"
                  placeholder="Age"
                  required
                />
                <button type="submit" className="readmore">
                  Update
                </button>
              </form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};
