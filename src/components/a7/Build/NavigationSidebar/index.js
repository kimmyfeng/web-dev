import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = ({ active = "explore" }) => {
  const isActive = (active, path) =>
    `list-group-item ${active === path ? "active" : ""}`;
  return (
    <>
      <div className="list-group">
        <Link to="/a7" className="list-group-item">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="/a7/twitter/home" className={isActive(active, "home")}>
          <i className="fa fa-home"></i>
          <span className="d-none d-xl-inline">Home</span>
        </Link>
        <Link to="/a7/twitter/explore" className={isActive(active, "explore")}>
          <i className="fa fa-hashtag"></i>
          <span className="d-none d-xl-inline">Explore</span>
        </Link>

        <a className="list-group-item" href="#">
          <i className="fa fa-bell"></i>
          <span
            className="d-none d-xl-inline"
            style={{ float: "right" }}
            style={{ "margin-right": "-10px" }}
          >
            Notifications
          </span>
        </a>
        <a className="list-group-item" href="#">
          <i className="fa fa-envelope"></i>
          <span className="d-none d-xl-inline">Messages</span>
        </a>
        <a className="list-group-item " href="#">
          <i className="fa fa-bookmark"></i>
          <span className="d-none d-xl-inline">Bookmarks</span>
        </a>
        <a className="list-group-item" href="#">
          <i className="fa fa-list"></i>
          <span className="d-none d-xl-inline">Lists</span>
        </a>
        <Link to="/a7/twitter/profile" className={isActive(active, "profile")}>
          <i className="fa fa-user"></i>
          <span className="d-none d-xl-inline">Profile</span>
        </Link>
        <a className="list-group-item" href="#">
          <i className="fa fa-circle"></i>
          <span className="d-none d-xl-inline">More</span>
        </a>
      </div>

      <div className="btn btn-primary override-bs">Tweet</div>
    </>
  );
};
export default NavigationSidebar;
