import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import "./login.css";
import {
  BiLogoGoogle,
  BiLogoApple,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../state";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert"

const LoginForm = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State to manage Snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = useState(""); 
  // Accessing Redux state using useSelector
  // const user = useSelector((state) => state.auth.user);
  // const token = useSelector((state) => state.auth.token);

  const registerSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const initialValuesLogin = {
    email: "",
    password: "",
  };

  const register = async (values, onSubmitProps) => {
    try {
      const { firstName, lastName, email, password } = values;
    
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };
    
      const registerResponse = await fetch(
        `${process.env.REACT_APP_BACKEND_API_URL}/api/v1/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
    
      const savedUser = await registerResponse.json();
      onSubmitProps.resetForm();
    
      console.log(savedUser);
      if (savedUser) {
        setPageType("login");
        setSnackbarMessage("Registration successful!"); // Set success message
        setSnackbarOpen(true);
      }
    } catch (error) {
      setSnackbarMessage("Registration failed. Email Already Registered!"); // Set error message
      setSnackbarOpen(true);
    }
  };
  
  const login = async (values, onSubmitProps) => {
    try {
      console.log(values);
      const loggedInResponse = await fetch(
        `${process.env.REACT_APP_BACKEND_API_URL}/api/v1/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      const loggedIn = await loggedInResponse.json();
      onSubmitProps.resetForm();
  
      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        navigate("/community");
      }
    } catch (error) {
      setSnackbarMessage("Login failed. Please check your credentials."); // Set error message
      setSnackbarOpen(true);
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (pageType === "login") {
      await login(values, onSubmitProps);
    } else {
      await register(values, onSubmitProps);
    }
  };

  return (
    <div className="parentContainer">
      <motion.div
        className="container"
        id="container"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
        initial="hidden"
        animate="visible"
      >
        <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <MuiAlert
          elevation={6}
          variant="outlined"
          // onClose={() => setSnackbarOpen(false)}
          severity="error" // Change severity as per message type
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
        <motion.div
          className={`form-container sign-in`}
          variants={{
            hidden: { opacity: 0, x: "-100%" },
            visible: {
              opacity: 1,
              x: 0,
              transition: { type: "tween", duration: 0.5 },
            },
          }}
        >
          <Formik
            onSubmit={(values, onSubmitProps) => {
              handleFormSubmit(values, onSubmitProps);
            }}
            initialValues={
              pageType === "login" ? initialValuesLogin : initialValuesRegister
            }
            validationSchema={
              pageType === "login" ? loginSchema : registerSchema
            }
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
              resetForm,
            }) => (
              <form onSubmit={handleSubmit}>
                <h1>{pageType === "login" ? "Sign In" : "Create Account"}</h1>
                <div className="social-icons">
                  <a href="#" className="icon">
                    <i className="fa-brands">
                      <BiLogoGoogle size={"2em"} />
                    </i>
                  </a>
                  <a href="#" className="icon">
                    <i className="fa-brands">
                      <BiLogoApple size={"2em"} />
                    </i>
                  </a>
                  <a href="#" className="icon">
                    <i className="fa-brands">
                      <BiLogoFacebookCircle size={"2em"} />
                    </i>
                  </a>
                  <a href="#" className="icon">
                    <i className="fa-brands">
                      <BiLogoLinkedinSquare size={"2em"} />
                    </i>
                  </a>
                </div>
                <span>
                  {pageType === "login"
                    ? "or use your email and password"
                    : "or use your email for registration"}
                </span>
                
                {pageType !== "login" && (
                  <React.Fragment>
                    <input
                      onChange={handleChange}
                      value={values.firstName}
                      onBlur={handleBlur}
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required={true}
                    />
                    {touched.firstName && errors.firstName && (
                      <div className="error">{errors.firstName}</div>
                    )}
                    <input
                      onChange={handleChange}
                      value={values.lastName}
                      onBlur={handleBlur}
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required={true}
                    />
                    {touched.lastName && errors.lastName && (
                      <div className="error">{errors.lastName}</div>
                    )}
                  </React.Fragment>
                )}
                <input
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                />
                {touched.email && errors.email && (
                  <div className="error">{errors.email}</div>
                )}
                <input
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required={true}
                />
                {touched.password && errors.password && (
                  <div className="error">{errors.password}</div>
                )}
                {pageType === "login" && <a href="#">Forget Your Password?</a>}
                <button type="submit">
                  {pageType === "login" ? "Sign In" : "Sign Up"}
                </button>
              </form>
            )}
          </Formik>
        </motion.div>
        <div className="toggle-container">
          <motion.div
            className="toggle"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } },
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className={`toggle-panel toggle-right`}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              <h1 id="pageHeading">
                {pageType === "login" ? "Join Community!" : "Already a Member!"}
              </h1>
              <p className="para">
                {pageType === "login"
                  ? "Register with your personal details to use all site features"
                  : "Enter your personal details to use all site features"}
              </p>
              <motion.button
                onClick={() =>
                  setPageType(pageType === "login" ? "register" : "login")
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {pageType === "login" ? "Sign Up" : "Sign In"}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
