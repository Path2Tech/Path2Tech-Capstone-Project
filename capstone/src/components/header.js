import React from 'react';
import './Header.css';
import { NavLink, Link} from 'react-router-dom';
// Step 6 imported above for nav bar


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
            <NavLink to='/'>Maternity Muse</NavLink>
          {/* Step 7a converted html link to nav link for logo, this is the reference <a href="index.html">Maternity Muse</a> */}
        </div>
        <nav>
          <ul className="nav-links">
            {/* Step 7b {links would be here, syntax: 
            <Link to ='insert link name here'>Page Name</Link> */}
            {/* <li><a href="login.html">Login</a></li> */}
            <Link to ='/login'>Login</Link>
            <li><a href="shop.html">Shop-All</a></li> 
            {/* <li><a href="order.html">Account</a></li> */}
          </ul>
        </nav>
        <div className="search-login">
          <form className="search-bar" action="/search" method="get">
            <input type="text" name="q" placeholder="Search..." />
           <button>Search</button>
          </form>
          <a className="login-button" href="login.html">Log In</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
