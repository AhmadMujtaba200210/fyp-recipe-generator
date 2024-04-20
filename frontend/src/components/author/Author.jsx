import React from "react";

export const Author = () => {
  return (
    <div
      class="cookname"
      itemprop="author"
      itemscope
      itemtype="http://schema.org/Person"
    >
      <div class="img-box">
        <a itemprop="url" class="imgc" href="#">
          <img
            class="auth-photo"
            src="images/demo/001-250x212.png"
            alt="admin"
          />
        </a>
        <div class="share"> </div>
      </div>
      <div class="cook-info author vcard">
        <h5 itemprop="name" class="fn given-name url">
          <a href="#" title="Posts by admin" rel="author">
            admin
          </a>
        </h5>
        <p itemprop="description"></p>
        <a itemprop="url" class="url" href="#">
          More From This Chef &raquo;
        </a>
      </div>
    </div>
  );
};
