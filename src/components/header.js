import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import MyImage from './logo.png'
import { signOut } from "firebase/auth"
import { auth } from "./firebase";



function Header(props) {
  let location = useLocation();
  const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/" onClick={() => {
            window.scrollTo(0, 0);
            if (location.pathname === '/') window.location.reload();

           
          }}><img
          className="logo"
          src={MyImage}
        />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/" onClick={() => {
            window.scrollTo(0, 0);
          }}>Home</Link></li>
          <li><Link to="/about" onClick={() => {
            window.scrollTo(0, 0);
          }}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => {
            window.scrollTo(0, 0);
          }}>Contact Us</Link></li>
          <li>
            <img className="kart-logo" src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg" />
          </li>
          <li>
          {(props.name != "") ? <span className="logout" onClick={handleLogout}>{props.name}</span> : <><Link to="/login" onClick={() => {
            window.scrollTo(0, 0);
          }}>Log in/</Link><Link to="/signup" onClick={() => {
            window.scrollTo(0, 0);
          }}>Sign up</Link></>}
          
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
