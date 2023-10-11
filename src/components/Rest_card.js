import React from "react";

function Rest_card(props) {
  
  const { resData } = props;

  const { name, cloudinaryImageId, avgRating, cuisines } = resData?.info;

  return (
    <div className="rest-card">
      <img
        className="res-logo"
        alt="https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="res-name">{name}</h3>
      <div>
        <span className="rating">{avgRating}</span>
        <img
          className="rate-logo"
          src="https://static.thenounproject.com/png/766721-200.png"
        />
      </div>
      <div className="res-dis">
        <h4 className="cuisine">Cuisine :- {cuisines.join(", ")}</h4>
      </div>
    </div>
  );
}

export default Rest_card;
