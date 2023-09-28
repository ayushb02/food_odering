import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/82/be/d4/82bed479344270067e3d2171379949b3.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li> <input type='text' className="button" placeholder='What are you looking for?'></input></li>
          <li>
            <img className="kart-logo" src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
