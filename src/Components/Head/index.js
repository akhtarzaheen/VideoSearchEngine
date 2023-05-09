import React, { useEffect, useState } from "react";
import hamburgerLogo from "../../assets/img/hamburger.png";
import youtubeLogo from "../../assets/img/youtube.png";
import profileLogo from "../../assets/img/profileLogo.png";
import searchLogo from "../../assets/img/searchIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { changeToggle } from "../../Slices/App-slice";
import { YOUTUBE_SEARCH_SUGGESTIONS } from "../../constants";
import { addListener } from "@reduxjs/toolkit";
import { addCache } from "../../Slices/Cache-Slice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector((store) => store.cache);
  console.log("cache=>", cache);
  const changeToggleHandler = () => {
    dispatch(changeToggle());
  };
  const handleChangeQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    let timer = "";
    if (cache[searchQuery]) {
    } else {
      timer = setTimeout(() => {
        getSearchSuggestions();
      }, 200);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS + searchQuery);
    const suggestionsList = await data.json();
    console.log("inside api calls");
    setSuggestionsList(suggestionsList[1]);
    dispatch(
      addCache({
        [searchQuery]: suggestionsList[1],
      })
    );
  };

  const onSearchFocus = () => {
    if (searchQuery.length > 0) {
      setShowSuggestions(true);
    }
  };

  const onSearchBlur = () => {
    setShowSuggestions(false);
  };
  return (
    <div className="grid grid-flow-col p-2 m-2">
      <div className="flex col-span-1 items-center">
        <img
          className="h-7 w-6 cursor-pointer"
          onClick={changeToggleHandler}
          src={hamburgerLogo}
          alt={"Menu Icon"}
        />
        <a href="/youtube">
          <img className="h-10 px-2" src={youtubeLogo} alt="Youtube logo" />
        </a>
      </div>
      <div className="flex col-span-10 justify-center">
        <input
          type="search"
          className="border rounded-l-full h-10 w-96 p-4"
          placeholder="Search"
          value={searchQuery}
          onChange={handleChangeQuery}
          onFocus={onSearchFocus}
          onBlur={onSearchBlur}
        />{" "}
        {(showSuggestions || searchQuery.length !== 0) && (
          <div className="absolute mt-9 bg-white w-[28%] p-4 rounded-lg shadow shadow-gray-100">
            <ul>
              {suggestionsList.map((suggestion) => (
                <li className="py-1 hover:bg-gray-100 flex items-center">
                  <img
                    src={searchLogo}
                    alt={"search logo"}
                    className="h-6 p-1 px-4"
                  />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button className="px-4 rounded-r-full bg-gray-300">
          <img className="h-6" src={searchLogo} alt="searchIcon" />
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-7" src={profileLogo} alt="profile logo" />
      </div>
    </div>
  );
};

export default Head;
