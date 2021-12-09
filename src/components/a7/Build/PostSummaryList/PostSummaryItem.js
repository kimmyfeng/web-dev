import React from "react";

const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image: "../../../images/react-blue.png",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <div className="text-secondary">{post.topic}</div>
          <div>
            <span className="fw-bold">{post.username}</span>
            <i className="fas fa-check-circle"></i>
            <span className="text-secondary">{post.time}</span>
          </div>
          <div className="fw-bold">{post.title}</div>
        </div>
        <div className="col-2">
          <img className="rounded mw-100" src={post.image} alt="" />
        </div>
      </div>
    </li>
  );
};

export default PostSummaryItem;
