import React from "react";
import "../shared/navigationbar.css";
import {  Link } from "react-router-dom";


export const NavigationBar = () => {
  return (
    
    <div>
     
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
          </ul>

         {/* TODO: add social media icons and links */}
          <ul id="menu-social-menu" class="social-nav">
            <li class="facebook">
             
            </li>
          </ul>
        </div>

      
        <div class="w-pet-border"></div>
      </div>
    </div>
  );
};
