import React from "react";
import Rest_card from "./Rest_card";

function Body() {
  return (
    <div className="body">
      <div className="toprated-btn-container">
      <input type="checkbox" id="switch" /><label for="switch">Toggle</label><span id="top-label">Top Rated Restaurant</span>
      </div>
      <Rest_card
        resName="Meghna Foods"
        imgSrc="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        cuisine="Indian, Chinese"
        rating="3.5"
      />
      <Rest_card
        resName="La Pino'z Pizza"
        imgSrc="https://b.zmtcdn.com/data/pictures/chains/8/20284898/eac5d48527700f6ea1bcfbb2094456d0.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        cuisine="Italian, Fast Food"
        rating="4.5"
      />
      <Rest_card
        resName="Shere Punjab"
        imgSrc="https://b.zmtcdn.com/data/pictures/0/20127450/d6b0bb908e07fa829dd79e31a0ec9588.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        cuisine="North Indian"
        rating="3.5"
      />
      <Rest_card
        resName="Chicagi Pizza"
        imgSrc="https://b.zmtcdn.com/data/pictures/3/20390213/c23c404948060cfcebd45c330ef3866b_o2_featured_v2.jpg"
        cuisine="Pizza, Fast Food"
        rating="3.5"
      />
      <Rest_card
        resName="Momo Adda"
        imgSrc="https://b.zmtcdn.com/data/pictures/3/20203643/be8b90f87bf9c59ed2e5bdc433a7ea92_o2_featured_v2.jpg"
        cuisine="Fast Food, Momos"
        rating="5"
      />
      <Rest_card
        resName="Belgian Waffle"
        imgSrc="https://b.zmtcdn.com/data/pictures/chains/6/19873946/bd6d35499c5fb33bea73c32bbf4b0237_o2_featured_v2.jpg"
        cuisine="Waffle, Pancake"
        rating="4"
      />
      <Rest_card
        resName="The Delight"
        imgSrc="https://b.zmtcdn.com/data/pictures/1/20492391/3d6d15fb0172ef1f5dfa3ad9de55098e_o2_featured_v2.jpg"
        cuisine="Indian, Burger"
        rating="3.5"
      />
      <Rest_card
        resName="Biryani By Kilo"
        imgSrc="https://b.zmtcdn.com/data/pictures/chains/7/20293527/1e4be0b5e0f970aef41328752d9c4bc1_o2_featured_v2.jpg"
        cuisine="Biryani, Mughal"
        rating="3.5"
      />
    </div>
  );
}

export default Body;
