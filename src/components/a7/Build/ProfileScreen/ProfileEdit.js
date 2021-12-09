import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ProfileEdit.css";

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [val, setVal] = useState({
    ...profile,
    name: profile.firstName + " " + profile.lastName,
  });

  const ProfileClickHandler = () => {
    dispatch({ type: "edit-profile", profile: val });
    navigate("/a7/twitter/profile");
  };

  return (
    <div className="profileEdit">
      <img className="logo" src="../../../images/elonmusk.jpeg" alt="" />
      <div className="title">
        <span className="back" onClick={() => navigate("/a7/twitter/profile")}>
          X
        </span>
        Edit Profile
        <div className="btn" onClick={ProfileClickHandler}>
          Save
        </div>
      </div>
      <img className="img" src="../../../images/bg.jpeg" alt="" />
      <div className="contairner">
        <div className="name">Name</div>
        <input
          value={val.name}
          onChange={(event) => setVal({ ...val, name: event.target.value })}
        />
      </div>
      <div className="contairner">
        <div className="name">Bio</div>
        <textarea
          cols="30"
          rows="4"
          value={val.bio}
          onChange={(event) => setVal({ ...val, bio: event.target.value })}
        />
      </div>
      <div className="contairner">
        <div className="name">Location</div>
        <input
          value={val.location}
          onChange={(event) => setVal({ ...val, location: event.target.value })}
        />
      </div>
      <div className="contairner">
        <div className="name">Website</div>
        <textarea
          value={val.website}
          onChange={(event) => setVal({ ...val, website: event.target.value })}
          cols="30"
          rows="2"
        />
      </div>
      <div className="contairner">
        <div className="name">Birth Date</div>
        <input
          value={val.dateOfBirth}
          onChange={(event) =>
            setVal({ ...val, dateOfBirth: event.target.value })
          }
        />
      </div>
    </div>
  );
};
export default Profile;
