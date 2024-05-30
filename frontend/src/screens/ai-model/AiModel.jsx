import React from "react";
import { NavigationBar } from "../../shared/NavigationBar";
import Footer from "../../components/footer/Footer";
import Search from "../../components/search/search";
import { LocationMap } from "../../components/map/LocationMap";
import ContactForm from "../../components/contactform/ContactForm";
import Address from "../../components/address/Address";
import ImageDropzone from "../../components/dropzone/ImageDropzone";
import RecipeChip from "../../components/chip/RecipeChip";
import SideProfile from "../../components/sideprofile/SideProfile";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../state";


const AiModel = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <div>
      <NavigationBar />
      <div class="main-wrap">
        <div id="container">
          <Search />

          <div id="content" class="clearfix ">
            <div id="left-area" class="clearfix">
              <ImageDropzone />
            </div>

            <div id="sidebar">
              {user && <SideProfile/>}
              <Address />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AiModel;
