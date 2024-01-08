import React from "react";
import "../../shared/navigationbar.css";

const AddRecipeForm = () => {
  return (
    <div>
      <h3>Add new recipe</h3>
      <span class="w-pet-border"></span>
      <form id="contact-form" action="contact.php" method="post">
        <p>
          <input
            type="text"
            name="title"
            class="required"
            id="cname"
            data-msg-required="Please enter title of your recipe."
            data-rule-required="true"
            placeholder="Title here"
          />
        </p>
        <p>
          <input
            type="text"
            id="cemail"
            name="ingredients"
            class="required"
            data-rule-required="true"
            aria-required="true"
            placeholder="Ingredients here"
          />
        </p>
        <p>
          <textarea
            name="Instructions"
            id="cmessage"
            class="required"
            title="Enter step by step instructions."
            placeholder="Instructions here"
            cols="30"
            rows="6"
          >
            
          </textarea>
        </p>
        <p>
          <input type="hidden" name="action" value="send_message" />
          <input type="hidden" name="target" value="robot@inspirythemes.com" />
          <input
            type="submit"
            name="contact-submit"
            id="contact-submit"
            value="Send Now"
            class="readmore"
          />
          <img src="images/loading.gif" id="contact-loader" alt="Loader" />
        </p>
        <p id="message-sent"></p>
        <div id="search-error-container"> </div>
        <p>
          <span class="w-pet-border"></span>
        </p>
      </form>
    </div>
  );
};
export default AddRecipeForm;
