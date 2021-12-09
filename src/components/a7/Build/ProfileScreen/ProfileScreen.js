import React from "react";
import { useLocation } from "react-router-dom";
import NavigationSidebar from "../NavigationSidebar";
import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";

const ProfileScreen = () => {
  const location = useLocation();

  return (
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="profile" />
      </div>
      <div
        className="col-10 col-md-10 col-lg-11 col-xl-10"
        style={{ position: "relative" }}
      >
        {location.pathname === "/a7/twitter/profile" ? (
          <Profile />
        ) : (
          <ProfileEdit />
        )}
      </div>
    </div>
  );
};
export default ProfileScreen;
