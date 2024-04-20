import React from "react";
import "../../shared/navigationbar.css";

const ContactForm = () => {
  return (
    <div>
      <h3>Contact Form</h3>

      <span class="w-pet-border"></span>
      <form id="contact-form" action="contact.php" method="post">
        <p>
          <input
            type="text"
            name="name"
            class="required"
            id="cname"
            data-msg-required="Please enter your name."
            data-rule-required="true"
            placeholder="Name here"
          />
        </p>
        <p>
          <input
            type="text"
            id="cemail"
            name="email"
            class="email"
            data-rule-required="true"
            data-rule-email="true"
            data-msg-required="Please enter your email address"
            data-msg-email="Please enter a valid email address"
            aria-required="true"
            placeholder="Email here"
          />
        </p>
        <p>
          <input
            type="text"
            id="cemail"
            name="email"
            class="email"
            data-rule-required="true"
            data-rule-email="true"
            data-msg-required="Please enter your email address"
            data-msg-email="Please enter a valid email address"
            aria-required="true"
            placeholder="Ingredients"
          />
        </p>
        <p>
          <textarea
            name="message"
            id="cmessage"
            class="required"
            title="* You must enter message."
            cols="30"
            rows="6"
            placeholder="Message here"
          ></textarea>
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
      </form>
    </div>
  );
};
export default ContactForm;
