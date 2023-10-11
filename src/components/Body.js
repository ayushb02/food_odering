import React, { useEffect, useState } from "react";
import Rest_card from "./Rest_card";

function Body() {
  const [isChecked, setIschecked] = useState(false);

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

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
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <img className="loading" src="https://i.gifer.com/PYh.gif" />;
  };
  

  return (
    <div className="body">
      <div className="toprated-btn-container">
        <input
          type="checkbox"
          id="switch"
          onChange={() => {
            setIschecked(!isChecked);

            if (!isChecked) {
              const newlist = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(newlist);
            } else {
              fetchData();
            }
          }}
        />
        <label for="switch">Toggle</label>
        <span id="top-label">Top Rated Restaurant</span>
      </div>
      {listOfRestaurants.map((restaurants) => (
        <Rest_card key={restaurants.info.id} resData={restaurants} />
      ))}
    </div>
  );
}

export default Body;
