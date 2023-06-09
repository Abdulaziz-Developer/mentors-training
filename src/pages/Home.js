import React, { useState } from "react";
import Cards from "./Profile/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="wrapper">
      <div className="container">
        <div role="search" className="search-form form">
          <label>
            <span className="screen-reader-text">Search for...</span>
            <input
              type="search"
              className="search-field"
              placeholder="Type something..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <div className="glass">
            <input type="button" className="search-submit button" />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
      <Cards search={search} />
    </div>
  );
};

export default Home;
