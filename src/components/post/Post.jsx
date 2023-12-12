import React from "react";
import "../../shared/navigationbar.css"

export const Post = () => {
  return (
    <div>
      Post
      <div class="post">
        <h1 class="post-title entry-title">
          <a
            href="single.html"
            rel="bookmark"
            title="Permanent Link to Best Bread pairing for Barbeque?"
          >
            Best Bread pairing for Barbeque?
          </a>
        </h1>
        <p class="meta vcard">
          {" "}
          By:{" "}
          <a class="author fn" href="#">
            {" "}
            admin{" "}
          </a>
          <span>|</span>
          <span class="comments">
            {" "}
            <a href="#" title="Comment on Best Bread pairing for Barbeque?">
              1 Comment
            </a>{" "}
          </span>
          <span>|</span>
          <time class="entry-date update" datetime="2012-12-06T11:08:16+00:00">
            On: December 6, 2012
          </time>
          <span>|</span> Category:
          <span class="cats">
            <a href="#" rel="category tag">
              barbeque
            </a>
          </span>
        </p>
        <div class="post-thumb single-img-box">
          <a
            rel="prettyPhoto"
            href="#"
            title="Best Bread pairing for Barbeque?"
          >
            <img
              src="images/demo/accor_33-575x262.jpg"
              class="attachment-thumbnail-blog wp-post-image"
              alt="accor_3"
            />
          </a>
        </div>
        <p>
          Quis sed mid elit, risus aliquet placerat. Pid et, vel phasellus augue
          a ultrices, natoque sociis porta proin nec? Dictumst magna rhoncus
          quis diam! Nascetur non risus elit pellentesque mauris pulvinar purus
          tincidunt, ac urna, placerat mus porta, egestas ultrices turpis. Amet
          adipiscing lectus ut eu natoque aliquet amet, augue...
          <a href="single.html" class=" res-more">
            more
          </a>
        </p>
        <a href="single.html" class="readmore rightbtn">
          Read more
        </a>
      </div>
    </div>
  );
};
