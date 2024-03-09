import React from "react";

export const RecipeComments = () => {
  return (
    <div class="comments">
      <div id="respond" class="comment-respond">
        <h3 id="reply-title" class="comment-reply-title">
          Leave a Reply
          <small>
            <a
              rel="nofollow"
              id="cancel-comment-reply-link"
              href="#"
              style="display:none;"
            >
              Cancel reply
            </a>
          </small>
        </h3>
        <form action="#" method="post" id="commentform" class="comment-form">
          <p class="logged-in-as">
            Logged in as <a href="#">admin</a>.
            <a
              href="images/demo/001-250x212.png"
              title="Log out of this account"
            >
              Log out?
            </a>
          </p>

          <p class="comment-form-comment">
            <label for="comment">Comment</label>
            <textarea
              id="comment"
              name="comment"
              cols="45"
              rows="8"
              aria-describedby="form-allowed-tags"
              aria-required="true"
            ></textarea>
          </p>
          <p class="form-submit">
            <input
              name="submit"
              type="submit"
              id="submit"
              class="submit"
              value="Post Comment"
            />
            <input
              type="hidden"
              name="comment_post_ID"
              value="25"
              id="comment_post_ID"
            />
            <input
              type="hidden"
              name="comment_parent"
              id="comment_parent"
              value="0"
            />
          </p>
        </form>
      </div>
    </div>
  );
};
