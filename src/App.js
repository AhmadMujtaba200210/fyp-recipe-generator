import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Home } from "./screens/home/home";
import { About } from "./screens/about/About";
import { Blog } from "./screens/blog/Blog";
import Contact from "./screens/contact/contact";
import Listing from "./screens/recipelisting/Listing";
import { useSelector } from "react-redux";
import Details from "./screens/recipe/Details";
import LoginForm from "./screens/loginform/login";
import NotFound from "./NotFound";
function App() {
  // using useSelector to grab the current logged in state which is stored in localStorage of browser
  // we will grab the tok en from local storage, which will help us to be logged in
  const isAuth=useSelector((state)=>state.token);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipe" element={<Listing />} />
          <Route path="/community" element={<NotFound />} />
          <Route path="/recipe/:recipe_id" element={<Details />} />
          <Route path="/login" element={<LoginForm/>} />
          <Route
            path="/home"
            element={isAuth ? <Home /> : <Navigate to="/" />}
          />
          {/* <Route path="/profile/:userId" element={<ProfilePage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
