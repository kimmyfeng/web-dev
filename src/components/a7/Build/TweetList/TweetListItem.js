import React from "react";
import { useDispatch } from "react-redux";

const TweetListItem = ({ tweet }) => {
  const dispatch = useDispatch();

  const deleteTweetClickHandler = () => {
    dispatch({ type: "delete-tweet", tweet });
  };

  const likeClickHandler = () => {
    dispatch({ type: "like-tweet", tweet });
  };
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
                src={tweet.image}
                alt=""
              />
            </div>
            <div className="col-10">
              <div className="list-group" style={{ marginLeft: "-40px" }}>
                <div className="col-14 col-xl-14 col-lg-12">
                  <span>
                    <b className="fw-bold" style={{ color: "white" }}>
                      {tweet.username}
                    </b>
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "white" }}
                    ></i>
                    <span className="text-secondary">{tweet.time}</span>
                    <span
                      onClick={deleteTweetClickHandler}
                      style={{ float: "right", cursor: "pointer" }}
                    >
                      {tweet.content1}
                    </span>
                  </span>
                  <div>
                    <b className="text-secondary" style={{ color: "white" }}>
                      {tweet.title1st}
                    </b>
                    <b style={{ color: "dodgerblue" }}>{tweet.title2nd}</b>
                    <b className="text-secondary" style={{ color: "white" }}>
                      {tweet.title3rd}
                    </b>
                  </div>
                  <div className="mt-2">
                    <div
                      className="card"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        borderColor: "dimgrey",
                      }}
                    >
                      {tweet.images && (
                        <img
                          src={tweet.images}
                          className="card-img-top"
                          alt="images"
                          style={{ borderRadius: "10px" }}
                        />
                      )}
                      <div>
                        <div>
                          <div
                            className="fw-bold"
                            style={{ margin: "0 0 10px 10px", color: "white" }}
                          >
                            {tweet.title4th}
                          </div>
                          <div
                            className="text-secondary"
                            style={{ marginLeft: "10px" }}
                          >
                            {tweet.content2}
                          </div>
                          <div
                            className="text-secondary"
                            style={{ margin: "0 0 10px 10px" }}
                          >
                            {tweet.link}
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
                          {tweet.message}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <i className="wd-span"></i>
                        <i className="fas fa-retweet">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </i>
                        <span className="text-secondary">
                          {tweet.trans}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <i className="wd-span"></i>
                        <i
                          style={{
                            cursor: "pointer",
                            color: tweet.loved ? "red" : "",
                          }}
                          className="far fa-heart"
                          onClick={likeClickHandler}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </i>
                        <span className="text-secondary">
                          &nbsp;{tweet.love}
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
export default TweetListItem;
