import React, { useState } from "react";
import { motion } from "framer-motion";
import "../loginform/login.css";
import { BiLogoGoogle,BiLogoApple,BiLogoFacebookCircle,BiLogoLinkedinSquare } from "react-icons/bi";


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.5 } },
  };

  const toggleButtonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="parentContainer">
      <motion.div
        className="container"
        id="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={`form-container sign-in`}
          variants={formVariants}
        >
          <form>
            <h1>{isLogin ? "Sign In" : "Create Account"}</h1>
            <div className="social-icons">
              {/* Social icons here */}
              <a href="#" class="icon">
                <i class="fa-brands"><BiLogoGoogle size={"2em"}/></i>
              </a>
              <a href="#" class="icon">
                <i class="fa-brands"><BiLogoApple size={"2em"}/></i>
              </a>
              <a href="#" class="icon">
                <i class="fa-brands"><BiLogoFacebookCircle size={"2em"}/></i>
              </a>
              <a href="#" class="icon">
                <i class="fa-brands"><BiLogoLinkedinSquare size={"2em"}/></i>
              </a>
            </div>
            <span>
              {isLogin
                ? "or use your email and password"
                : "or use your email for registration"}
            </span>
            {!isLogin && (
              <input type="text" placeholder="Name" required="true" />
            )}
            <input type="email" placeholder="Email" required="true" />
            <input type="password" placeholder="Password" required="true" />
            {isLogin && <a href="#">Forget Your Password?</a>}
            <button>{isLogin ? "Sign In" : "Sign Up"}</button>
          </form>
        </motion.div>
        <div className="toggle-container">
          <motion.div
            className="toggle"
            variants={toggleButtonVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className={`toggle-panel toggle-right`}
              variants={formVariants}
            >
              <h1>{!isLogin ? "Already a Member!" : "Join Community!"}</h1>
              <p className="para">
                {!isLogin
                  ? "Enter your personal details to use all site features"
                  : "Register with your personal details to use all site features"}
              </p>
              <motion.button
                onClick={toggleForm}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {!isLogin ? "Sign In" : "Sign Up "}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
