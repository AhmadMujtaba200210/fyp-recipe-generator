import React from "react";
import styled from "styled-components";
import { IoClose, IoSearch } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import { useEffect } from "react";
import { useRef } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { useDebounce } from "../hooks/debounceHooks";
import axios from "axios";
import { Recipe } from "./RecipeSearchList";

const SearchBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
`;

const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0px 15px;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  outline: none;
  border: none;
  font-size: 16px; /* Adjust font size for mobile */
  color: #12112e;
  font-weight: 100;
  border-radius: 6px;
  background-color: transparent;

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 20px; /* Adjust icon size for mobile */
  margin-right: 10px;
  margin-top: 1px;
  vertical-align: middle;
`;

const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 18px; /* Adjust close icon size for mobile */
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  padding-right: 20px;
  &:hover {
    color: #dfdfdf;
  }
`;

const LineSeparator = styled.span`
  display: flex;
  min-width: 70%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  overflow-y: auto;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WarningMessage = styled.span`
  color: #a1a1a1;
  font-size: 10px;
  display: flex;
  align-self: center;
  justify-self: center;
`;

const containerVariants = {
  expanded: {
    height: "30em",
  },
  collapsed: {
    height: "3.8em",
  },
};

const containerTransition = { type: "spring", damping: 22, stiffness: 150 };

export function SearchBar(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [noRecipes, setNoRecipes] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    if (e.target.value.trim() === "") setNoRecipes(false);
    setSearchQuery(e.target.value);
  };

  const expandContainer = () => {
    setExpanded(true);
  };

  const collapseContainer = () => {
    setExpanded(false);
    setSearchQuery("");
    setLoading(false);
    setNoRecipes(false);
    setRecipes([]);
    if (inputRef.current) inputRef.current.value = "";
  };

  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  const prepareSearchQuery = (query) => {
    // ${process.env.REACT_APP_BACKEND_API_URL}
    const url = `${process.env.REACT_APP_BACKEND_API_URL}/api/v1/recipe/search?query=${query}`;
    return url;
  };

  const searchRecipes = async () => {
    if (!searchQuery || searchQuery.trim() === "") return;

    setLoading(true);
    setNoRecipes(false);

    const URL = prepareSearchQuery(searchQuery);

    try {
      const response = await axios.get(URL);
      if (response.data.content && response.data.length === 0)
        setNoRecipes(true);
      setRecipes(response.data.content || []);
      console.log("Response: ", response);
    } catch (error) {
      console.log("Error: ", error);
    }

    setLoading(false);
  };

  useDebounce(searchQuery, 500, searchRecipes);

  return (
    <SearchBarContainer
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={containerVariants}
      transition={containerTransition}
      ref={parentRef}
    >
      <SearchInputContainer>
        <SearchIcon>
          <IoSearch />
        </SearchIcon>
        <SearchInput
          placeholder="Search for Recipe/Blogs"
          onFocus={expandContainer}
          ref={inputRef}
          value={searchQuery}
          onChange={changeHandler}
        />
        <AnimatePresence>
          {isExpanded && (
            <CloseIcon
              key="close-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={collapseContainer}
              transition={{ duration: 0.2 }}
            >
              <IoClose />
            </CloseIcon>
          )}
        </AnimatePresence>
      </SearchInputContainer>
      {isExpanded && <LineSeparator />}
      {isExpanded && (
        <SearchContent>
          {isLoading && (
            <LoadingWrapper>
              <MoonLoader loading color="#000" size={20} />
            </LoadingWrapper>
          )}
          {!isLoading && recipes.length === 0 && !noRecipes && (
            <LoadingWrapper>
              <WarningMessage>Start typing to Search</WarningMessage>
            </LoadingWrapper>
          )}
          {!isLoading && noRecipes && (
            <LoadingWrapper>
              <WarningMessage>No Recipes or Blogs found!</WarningMessage>
            </LoadingWrapper>
          )}
          {!isLoading &&
            recipes.length > 0 &&
            recipes.map((recipe) => (
              <Recipe
                id={recipe.recipeId}
                name={recipe.title} // Access title directly from the recipe object
              />
            ))}
        </SearchContent>
      )}
    </SearchBarContainer>
  );
}
