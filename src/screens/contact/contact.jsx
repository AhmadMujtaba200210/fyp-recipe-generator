import React from "react";
import { NavigationBar } from "../../shared/NavigationBar";
import Footer from "../../components/footer/Footer";
import Search from "../../components/search/search";
import { LocationMap } from "../../components/map/LocationMap";
import ContactForm from "../../components/contactform/ContactForm";
import Address from "../../components/address/Address";

const Contact = () => {
  return (
    <div>
      {" "}
      <NavigationBar />
      <div class="main-wrap">
        <div id="container">
          <div class="top-search  clearfix">
            <Search />
          </div>

          <div id="content" class="clearfix ">
            <div id="left-area" class="clearfix">
              <LocationMap />

              <ContactForm />
            </div>

            <div id="sidebar">
              <Address />
            </div>
          </div>
        </div>
      </div>
      <div class="w-pet-border"></div>
      <Footer />
    </div>
  );
};
export default Contact;
