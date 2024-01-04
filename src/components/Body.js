import React, { useEffect, useState } from "react";
import Rest_card from "./Rest_card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [isChecked, setIschecked] = useState(false);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2124007&lng=78.1772053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log("json");

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="toprated-btn-container">
        <div className="btn-con-div">
          <input
            type="checkbox"
            id="switch"
            onChange={() => {
              setIschecked(!isChecked);

              if (!isChecked) {
                const newlist = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurants(newlist);
              } else {
                const newlist1 = listOfRestaurants;
                setFilteredRestaurants(newlist1);
              }
            }}
          />
          <label className="label" for="switch">
            Toggle
          </label>
          <span id="top-label">Top Rated Restaurant</span>
        </div>
        <div>
          <input
            type="text"
            className="search"
            value={searchText}
            placeholder="What are you looking for?"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const FilterList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(FilterList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {filteredRestaurants.map((restaurants) => (
        <Link
          key={restaurants?.info?.id}
          to={"/restaurants/" + restaurants?.info?.id}
        >
          <Rest_card resData={restaurants} />
        </Link>
      ))}
    </div>
  );
}

export default Body;
