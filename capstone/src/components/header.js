import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="index.html">Maternity Muse</a>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="shop.html">Shop</a></li>
            <li><a href="order.html">Order</a></li>
            <li><a href="login.html">Login</a></li>
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
