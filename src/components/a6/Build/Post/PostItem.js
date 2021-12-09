import React from "react";

const PostItem = ({ post1 }) => {
  return (
    <div className="row">
      <div className="list-group">
        <li className="list-group-item">
          <div className="row mt-2">
            <div className="col-2 col-xl-2 col-lg-2">
              <img
                className="wd-rounded"
                width="50"
                height="50"
                src={post1.image}
                alt=""
              />
            </div>
            <div className="col-10">
              <div className="list-group" style={{ "margin-left": "-40px" }}>
                <div className="col-14 col-xl-14 col-lg-12">
                  <span>
                    <b className="fw-bold" style={{ color: "white" }}>
                      {post1.username}
                    </b>
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "white" }}
                    ></i>
                    <span className="text-secondary">{post1.time}</span>
                    <span
                      style={{ "text-align": "right" }}
                      style={{ float: "right" }}
                    >
                      {post1.content1}
                    </span>
                  </span>
                  <div>
                    <b className="text-secondary" style={{ color: "white" }}>
                      {post1.title1st}
                    </b>
                    <b style={{ color: "dodgerblue" }}>{post1.title2nd}</b>
                    <b className="text-secondary" style={{ color: "white" }}>
                      {post1.title3rd}
                    </b>
                  </div>
                  <div className="mt-2">
                    <div
                      className="card"
                      style={{ width: "100%" }}
                      style={{ "border-color": "dimgrey" }}
                      style={{ "border-radius": "10px" }}
                    >
                      <img
                        src={post1.images}
                        className="card-img-top"
                        alt="images"
                        style={{ "border-radius": "10px" }}
                      />
                      <div>
                        <div>
                          <div
                            className="fw-bold"
                            style={{ color: "white" }}
                            style={{ "margin-left": "10px" }}
                            style={{ "margin-top": "10px" }}
                          >
                            {post1.title4th}
                          </div>
                          <div
                            className="text-secondary"
                            style={{ "margin-left": "10px" }}
                          >
                            {post1.content2}
                          </div>
                          <div
                            className="text-secondary"
                            style={{ "margin-left": "10px" }}
                            style={{ "margin-bottom": "10px" }}
                          >
                            {post1.link}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <span>
                        <i className="far fa-comment">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </i>
                        <span className="text-secondary">
                          {post1.message}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <i className="wd-span"></i>
                        <i className="fas fa-retweet">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </i>
                        <span className="text-secondary">
                          {post1.trans}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <i className="wd-span"></i>
                        <i className="far fa-heart">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </i>
                        <span className="text-secondary">
                          &nbsp;{post1.love}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <i className="wd-span"></i>
                        <i className="fas fa-inbox"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
};
export default PostItem;
