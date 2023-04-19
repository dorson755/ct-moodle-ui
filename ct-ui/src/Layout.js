import React from 'react';
import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://cybertech242-online.com">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma logo" />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href="/#"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/courses">Courses</Link>
          <Link className="navbar-item" to="/students">Students</Link>
          <Link className="navbar-item" to="/docs">Documentation</Link>
          <Link className="navbar-item" to="/todo">To-Do</Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" href="/#">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light" href="/#">
                Log in
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Outlet/>
      </>
  );
};

export default Layout;
