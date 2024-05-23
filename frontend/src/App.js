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
import AiModel from "./screens/ai-model/AiModel";
import { SingleBlog } from "./screens/blog/SingleBlog";
import { SingleNews } from "./screens/news/SingleNews";
import LLMRecipe from "./components/generate/LLMRecipe";
import { Community } from "./screens/community/Community";
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
          <Route path="/community" element={<Community />} />
          <Route path="/ai" element={<AiModel />} />
          <Route path="/recipe/:recipe_id" element={<Details />} />
          <Route path="/blog/:blog_title" element={<SingleBlog />} />
          <Route path="/news/:news_title" element={<SingleNews />} />
          <Route path="/recipe/llm" element={<LLMRecipe />} />
          <Route path="/login" element={<LoginForm />} />

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
