import React, { useEffect, useState } from "react";
import "./navigationbar.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import img from "../assets/images/header-image.png";
import imgLogo from "../assets/images/logo-pixel.png";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentToken, selectCurrentUser, setLogout } from "../state";
import { Avatar, Box, Button, SwipeableDrawer } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaRegHeart } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import LogoutIcon from "@mui/icons-material/Logout";
import { HistoryModal } from "../components/modal/HistoryModal";
import { FavouriteModal } from "../components/modal/FavouriteModal";
import { EditProfileModal } from "../components/modal/EditProfileModal";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { IoClose, IoMenu } from "react-icons/io5";

export const NavigationBar = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const dispatch = useDispatch();
  const closeMobileMenu = () => setClick(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const handleHistoryModalOpen = () => setIsHistoryModalOpen(true);
  const handleHistoryModalClose = () => setIsHistoryModalOpen(false);

  const [isFavouriteModalOpen, setIsFavouriteModalOpen] = useState(false);
  const handleFavouriteModalOpen = () => setIsFavouriteModalOpen(true);
  const handleFavouriteModalClose = () => setIsFavouriteModalOpen(false);

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const handleProfileModalOpen = () => setIsProfileModalOpen(true);
  const handleProfileModalClose = () => setIsProfileModalOpen(false);

  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const drawerBleeding = 56;
  const StyledBox = styled("div")(({ theme }) => ({
    backgroundColor: grey[200],
  }));
  const [open, setOpen] = React.useState(false);

  const toggleDrawerNav = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 765);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const list = (user) => (
    <>
      <HistoryModal
        open={isHistoryModalOpen}
        handleClose={handleHistoryModalClose}
      />
      <FavouriteModal
        open={isFavouriteModalOpen}
        handleClose={handleFavouriteModalClose}
      />
      <EditProfileModal
        open={isProfileModalOpen}
        handleClose={handleProfileModalClose}
      />
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <ListItem disablePadding>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
                marginTop: "20px",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 46, height: 46, marginLeft: "13px" }}
              />
              <h4
                className="blue"
                style={{ marginLeft: "10px", marginTop: "8px" }}
              >
                {user?.fullName?.toUpperCase()}
              </h4>
            </div>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleProfileModalOpen}>
              <ListItemIcon>
                <Button color="secondary" startIcon={<ImProfile />}></Button>
              </ListItemIcon>
              <ListItemText primary="Edit Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleHistoryModalOpen}>
              <ListItemIcon>
                <Button color="success" startIcon={<FaHistory />}></Button>
              </ListItemIcon>
              <ListItemText primary="Search History" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleFavouriteModalOpen}>
              <ListItemIcon>
                <Button color="error" startIcon={<FaRegHeart />}></Button>
              </ListItemIcon>
              <ListItemText primary="Show Favourites" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              dispatch(setLogout());
              setIsDrawerOpen(false);
            }}
          >
            <ListItemIcon>
              <Button color="error" startIcon={<LogoutIcon />}></Button>
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </ListItem>
      </Box>
    </>
  );

  return (
    <>
      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {/* Content of the drawer */}
        {list(user)}
      </SwipeableDrawer>

      <div id="header-wrapper" class="clearfix98">
        <div id="header" class="clearfix">
          <Link className="responsive_logo" to={`/`}>
            <img src={imgLogo} alt="" class="logo" />
          </Link>
          {!isMobileView && (
            <Link to={`/`}>
              <img class="header-img" src={img} alt="Food Recipes" />
            </Link>
          )}

          <a href="index.html"></a>
        </div>

        {/* navbar from here */}
        {!isMobileView ? (
          <div id="nav-wrap">
            <div class="inn-nav clearfix">
              <ul id="menu-main-navigation" class="nav">
                <li>
                  <Link to={`/`}>Home</Link>
                </li>
                <li>
                  <Link to={`/recipe`}>Recipe Listing</Link>
                </li>
                <li>
                  <Link to={`/blog`}>Blog</Link>
                </li>
                <li>
                  <Link to={`/about`}>About</Link>
                </li>
                <li>
                  <Link to={`/contact`}>Contact</Link>
                </li>
                <li>
                  <Link to={`/ai`}>RecipeX</Link>
                </li>
                <li className="login-icon" style={{ float: "right" }}>
                  {user ? (
                    <Link onClick={toggleDrawer(true)}>
                      {user?.fullName?.toUpperCase()}
                    </Link>
                  ) : (
                    <Link to={`/login`}>Login</Link>
                  )}
                </li>
              </ul>
              <ul id="menu-social-menu" class="social-nav">
                <li class="facebook"></li>
              </ul>
            </div>

            <div class="w-pet-border"></div>
          </div>
        ) : (
          <div className="header">
            <div className="logo-nav">
              <ul className={click ? "nav-options active" : "nav-options"}>
                <li>
                  <Link to={`/`}>Home</Link>
                </li>
                <li>
                  <Link to={`/recipe`}>Recipe Listing</Link>
                </li>
                <li>
                  <Link to={`/blog`}>Blog</Link>
                </li>
                <li>
                  <Link to={`/about`}>About</Link>
                </li>
                <li>
                  <Link to={`/contact`}>Contact</Link>
                </li>
                <li>
                  <Link to={`/ai`}>RecipeX</Link>
                </li>
                <li className="login-icon" style={{ float: "right" }}>
                  {user ? (
                    <Link onClick={toggleDrawer(true)}>
                      {user?.fullName?.toUpperCase()}
                    </Link>
                  ) : (
                    <Link to={`/login`}>Login</Link>
                  )}
                </li>
                {/* <li className="option mobile-option" onClick={closeMobileMenu}>
                  <a href="" className="sign-up">
                    SIGN-UP
                  </a>
                </li> */}
              </ul>
            </div>
            
            <div className="mobile-menu" onClick={handleClick}>
              {click ? (
                <IoClose className="menu-icon" />
              ) : (
                <IoMenu className="menu-icon" />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// <>
//             <Box sx={{ textAlign: "left", pt: 1 }}>
//               <Button onClick={toggleDrawerNav(true)}
//                 style={{fontSize:"50px",color:"black"}}
//               >
//                 <IoMenu />
//               </Button>
//             </Box>
//             <SwipeableDrawer
//               anchor="bottom"
//               open={open}
//               onClose={toggleDrawerNav(false)}
//               onOpen={toggleDrawerNav(true)}
//             >
//               <StyledBox
//                 sx={{
//                   px: 2,
//                   pb: 2,
//                   height: "100%",
//                   overflow: "auto",
//                 }}
//               >
//                 Certainly! Here's a paragraph exploring the theme of exploration
//                 and discovery: In the vast expanse of the universe, there exists
//                 a perpetual allure for exploration, a timeless yearning encoded
//                 within the very essence of human nature. From the ancient
//                 mariners navigating the uncharted waters to the intrepid
//                 astronauts venturing into the depths of space, the spirit of
//                 discovery has propelled humanity forward, transcending
//                 boundaries and unlocking the mysteries of existence. With each
//                 step taken on distant shores or each probe launched into the
//                 cosmos, we defy the limitations imposed by our own
//                 understanding, embracing the unknown with unwavering courage and
//                 insatiable curiosity. It is through the lens of exploration that
//                 we redefine the boundaries of possibility, stretching the fabric
//                 of our imagination to encompass realms yet unexplored. And in
//                 the pursuit of discovery, we not only unravel the secrets of the
//                 universe but also unearth the depths of our own potential,
//                 forging paths of enlightenment and innovation that resonate
//                 across the annals of history. In this ceaseless journey of
//                 exploration, we find not only the answers to our questions but
//                 also the questions that ignite the flames of our collective
//                 imagination, driving us ever forward towards the horizon of
//                 discovery.
//                 {/* <Skeleton variant="rectangular" height="100%" /> */}
//               </StyledBox>
//             </SwipeableDrawer>
//           </>
