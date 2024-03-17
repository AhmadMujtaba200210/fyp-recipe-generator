import React from "react";
import "../shared/navigationbar.css";
import { Link } from "react-router-dom";
import img from "../assets/images/header-image.png";
import imgLogo from "../assets/images/logo-pixel.png";

export const NavigationBar = () => {
  return (
    <div id="header-wrapper" class="clearfix98">
      <div id="header" class="clearfix">
        <a class="responsive_logo" href="index.html">
          <img src={imgLogo} alt="" class="logo" />
        </a>
        <a href="index.html">
          <h1 class="sitenametext">Food Recipes</h1>
        </a>
        <a href="index.html">
          <img class="header-img" src={img} alt="Food Recipes" />
        </a>
      </div>

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
    </div>
  );
};
