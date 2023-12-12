import React from "react";
import "../../shared/navigationbar.css";
const Search = () => {
  return (
    <div>
      <div id="conatiner">
        <div class="top-search  clearfix">
          <h3 class="head-pet">
            <span>Recipe Search</span>
          </h3>

          <form action="#" id="searchform">
            <p>
              <input
                type="text"
                name="s"
                id="s"
                class="field"
                value=""
                placeholder="Search for"
              />
              <input type="submit" name="s_submit" id="s-submit" value="" />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
