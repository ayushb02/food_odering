import React from "react";
import { Link } from "react-router-dom";
function Fotter() {
  return (
    <div className="fotter">
       <div className="links-bot">
        <span>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Home
          </Link>
        </span>
        <span>
          <Link
            to="/about"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            About Us
          </Link>
        </span>
        <span>
          <Link
            to="/contact"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Contact Us
          </Link>
        </span>
      </div>
      <div className="social-img">
        <img
          className="s-img"
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
        />
        <img
          className="s-img"
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
        />
        <img
          className="s-img"
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"
        />
        <img
          className="s-img"
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png"
        />
      </div>
     
    </div>
  );
}

export default Fotter;
