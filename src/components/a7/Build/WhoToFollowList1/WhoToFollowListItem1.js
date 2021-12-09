import React from "react";

const WhoToFollowListItem1 = ({who1}) => {
    return (
        <div className="row">
            <ul className="list-group">
                <li className = "list-group-item">
                    <div className = "row">
                        <div className = "col-10">
                            <div className = "text-secondary">
                                {who1.topic}
                            </div>
                            <div>
                                <span className = "fw-bold">
                                    {who1.username}
                                </span>
                                <i className = "fas fa-check-circle"></i>
                                <span className = "text-secondary">{who1.time}</span>
                            </div>
                            <div className = "fw-bold">
                                {who1.title}
                            </div>
                        </div>
                        <div className = "col-2">
                            <img className = "rounded mw-100"
                                 src = {who1.image} alt="" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default WhoToFollowListItem1;