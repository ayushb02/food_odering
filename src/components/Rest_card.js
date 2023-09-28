import React from "react";

function Rest_card(props) {
    const{ resName , imgSrc , cuisine, rating} = props;
  
    return (
    <div className="rest-card">
      <img
        className="res-logo"
        alt="https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg"
        src={imgSrc}
      />
      <h3>{resName}</h3>
      <div>
        <span className="rating">{rating}</span>
        <img
          className="rate-logo"
          src="https://static.thenounproject.com/png/766721-200.png"
        />
      </div>
      <div className="res-dis">
        <h4 className="cuisine">Cuisine :- {cuisine}</h4>
      </div>
    </div>
  );
}

export default Rest_card;
