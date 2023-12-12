import React from "react";
import "../../shared/navigationbar.css"

export const NewsEvents = () => {
  return (
    <div>

      <div class="widget newsEvent nostylewt">
        <h2 class="w-bot-border">
          <span>News</span> and Events
        </h2>
        <ul class="list">
          <li>
            <h5>
              <a href="single.html">Best Bread pairing for Barbeque?</a>
            </h5>
            <p>
              Welcome to WordPress. This is your first post. Edit or delete
              it,...<a href="single.html">more</a>
            </p>
          </li>
          <li>
            <h5>
              {" "}
              <a href="single.html">Best Bread pairing for Barbeque?</a>
            </h5>
            <p>
              Quis sed mid elit, risus aliquet placerat. Pid et, vel phasellus
              augue...<a href="single.html">more</a>{" "}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
