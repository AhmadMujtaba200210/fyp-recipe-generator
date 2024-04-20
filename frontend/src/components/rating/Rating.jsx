import React from "react";

export const Rating = () => {
  return (
    <div class="rate-box">
      <h6>Average Member Rating</h6>

      <p class="ex-rates">
        <span class="on"></span>
        <span class="on"></span>
        <span class="on"></span>
        <span class="on"></span>
        <span class="off"></span> (4.1 / 5)
      </p>

      <div class="hreview-aggregate">
        <span
          class="rating"
          itemprop="aggregateRating"
          itemscope
          itemtype="http://schema.org/AggregateRating"
        >
          <span class="average">4.1</span>
          <span class="best" itemprop="ratingValue">
            5
          </span>
          <span class="count" itemprop="reviewCount">
            28
          </span>
        </span>
      </div>

      <form action="#" method="post" id="rate-product">
        <h6>Rate this recipe</h6>
        <p class="rates">
          <span class="off"></span>
          <span class="off"></span>
          <span class="off"></span>
          <span class="off"></span>
          <span class="off"></span>
          <input
            type="hidden"
            name="selected_rating"
            id="selected_rating"
            value=""
          />
          <input type="hidden" name="post_id" value="25" />
          <input type="hidden" name="action" value="rate_this" />
        </p>
      </form>
      <p id="output"></p>
      <p class="status">
        <span>28 people</span> rated this recipe
      </p>
      <p class="views">146</p>
    </div>
  );
};
