import React from "react";
import { useState } from "react";

function Food_Items(props) {
  const { menuData } = props;
  const [amount , setAmount] = useState(1);

  function handleClick(){
    alert(`${amount} - ${menuData?.card?.info?.name} added for Rs. ${amount * menuData?.card?.info?.price / 100}`)
  }

  return (
    <div className="food-items-con">
      <div className="food-items">
        <h3>{menuData?.card?.info?.name}</h3>
        <h3>Rs. {menuData?.card?.info?.price / 100}</h3>
      </div>
      <div className="add-cart">
      <button className="item-button" onClick={() => {
          if(amount === 1){
            setAmount(amount);
          }
          else{
            setAmount(amount-1);
          }
         }}>-</button><span className="amount-spam">{amount}</span><button className="item-button" onClick={() => {
          setAmount(amount+1)
         }}>+</button><button onClick={handleClick} className="add-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default Food_Items;
