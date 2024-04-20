import React, { useEffect, useState } from "react";
import "./navigationbar.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import img from "../assets/images/header-image.png";
import imgLogo from "../assets/images/logo-pixel.png";
import { IoClose, IoMenu } from "react-icons/io5";

export const NavigationBar = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 765);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="header-wrapper" class="clearfix98">
      <div id="header" class="clearfix">
        <Link className="responsive_logo" to={`/`}>
          <img src={imgLogo} alt="" class="logo" />
        </Link>
        <Link to={`/`}>
          <img class="header-img" src={img} alt="Food Recipes" />
        </Link>
        <a href="index.html"></a>
      </div>

      {/* navbar from here */}
      {!isMobileView ? (
        <div id="nav-wrap">
          <div class="inn-nav clearfix">
            <ul id="menu-main-navigation" class="nav">
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/recipe`}>Recipe Listing</Link>
              </li>
              <li>
                <Link to={`/blog`}>Blog</Link>
              </li>
              <li>
                <Link to={`/about`}>About</Link>
              </li>
              <li>
                <Link to={`/contact`}>Contact</Link>
              </li>
              <li>
                <Link to={`/community`}>Communtiy</Link>
              </li>
              <li>
                <Link to={`/ai`}>LLM</Link>
              </li>
              <li className="login-icon" style={{ float: "right" }}>
                <Link to={`/login`}>Login</Link>
              </li>
            </ul>
            <ul id="menu-social-menu" class="social-nav">
              <li class="facebook"></li>
            </ul>
          </div>

          <div class="w-pet-border"></div>
        </div>
      ) : (
        <div className="header">
          <div className="logo-nav">
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/recipe`}>Recipe Listing</Link>
              </li>
              <li>
                <Link to={`/blog`}>Blog</Link>
              </li>
              <li>
                <Link to={`/about`}>About</Link>
              </li>
              <li>
                <Link to={`/contact`}>Contact</Link>
              </li>
              <li>
                <Link to={`/community`}>Communtiy</Link>
              </li>
              <li>
                <Link to={`/ai`}>LLM</Link>
              </li>
              <li className="login-icon" style={{ float: "right" }}>
                <Link to={`/login`}>Login</Link>
              </li>
              <li className="option mobile-option" onClick={closeMobileMenu}>
                <a href="" className="sign-up">
                  SIGN-UP
                </a>
              </li>
            </ul>
          </div>
          <ul className="signin-up">
            <li className="sign-in" onClick={closeMobileMenu}>
              <a href="#">SIGN-IN</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="" className="signup-btn">
                SIGN-UP
              </a>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <IoClose className="menu-icon" />
            ) : (
              <IoMenu className="menu-icon" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

//       <nav className="nav container">
//         <a href="/" className="nav__logo">
//           Navigation Bar
//         </a>

//         <div
//           className={`nav__menu ${showMenu ? "show-menu" : ""}`}
//           id="nav-menu"
//         >
//           <ul className="nav__list">
//             <li className="nav__item">
//               <a href="/" className="nav__link" onClick={closeMenuOnMobile}>
//                 Home
//               </a>
//             </li>
//             <li className="nav__item">
//               <a href="/news" className="nav__link" onClick={closeMenuOnMobile}>
//                 News
//               </a>
//             </li>
//             <li className="nav__item">
//               <a
//                 href="/about-us"
//                 className="nav__link"
//                 onClick={closeMenuOnMobile}
//               >
//                 About Us
//               </a>
//             </li>
//             <li className="nav__item">
//               <a
//                 href="/favorite"
//                 className="nav__link"
//                 onClick={closeMenuOnMobile}
//               >
//                 Favorite
//               </a>
//             </li>
//             <li className="nav__item">
//               <a
//                 href="/location"
//                 className="nav__link"
//                 onClick={closeMenuOnMobile}
//               >
//                 Location
//               </a>
//             </li>
//             <li className="nav__item">
//               <a href="/get-started" className="nav__link nav__cta">
//                 Get Started
//               </a>
//             </li>
//           </ul>
//           <div className="nav__close" id="nav-close" onClick={toggleMenu}>
//             <IoClose />
//           </div>
//         </div>

//         <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
//           <IoMenu />
//         </div>
//       </nav>

// export default NavigationBar;
