import React, { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";
import Shimmer2 from "./Shimmer2";

function Menu_Card() {
  const [menuList, setMenuList] = useState(null);
  const {resID} = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() =>{
    window.scrollTo(0, 0);
  },[])

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resID);

    const json = await data.json();

    setMenuList(json.data);

    console.log("jasonM");
  };
  if (menuList === null) return <Shimmer2 />;

  const {
    name,
    costForTwoMessage,
    avgRating,
    cuisines,
    cloudinaryImageId,
    totalRatingsString,
    locality,
  } = menuList?.cards[0]?.card?.card?.info;

  const n = menuList?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.length
  

  return (
    <div className="menu-card">
      <div className="res-data-menu">
        <div className="res-data">
          <h1>{name}</h1>
          <div className="avg-class">
            <span className="rating">{avgRating}</span>
            <img
              className="rate-logo"
              src="https://static.thenounproject.com/png/766721-200.png"
            />
            <span> - {totalRatingsString}</span>
          </div>

          <h3 className="gray">Avg. Price - {costForTwoMessage}</h3>
          <h3 className="gray">{cuisines.join(" ,")}</h3>
          <h3 className="gray">Location - {locality}</h3>
        </div>
        <img className="menu-res-logo" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div>
        { menuList?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1,n-2).map((accord) => (<Accordion  className="accordian" title={accord?.card?.card?.title} content={accord?.card?.card?.itemCards} />))}
      </div>
    </div>
  );
}

export default Menu_Card;
