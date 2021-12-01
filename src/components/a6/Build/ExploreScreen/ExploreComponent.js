import React from "react";
import PostSummaryList from "../PostSummaryList/PostSummaryList";

const ExploreComponent = () => {
    return (
                    <div className="row">
                        <div className = "col-11">
                            <div className = "position-relative">
                                <div className="input-group col">
                                    <input type="text" type="search" className="form-control rounded-pill" style={{"padding-left": "48px"}} placeholder="Search Twitter"/>
                                    <i className="fas fa-search" style={{"position":"absolute"}} style = {{"bottom":"10px"}} style = {{"left": "15px"}}/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-1">
                            <i className = "fas fa-cog fa-2x col-8" style = {{"color": "#1DA1F2"}} />
                        </div>
                        <div className = "mt-2">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">For You</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Trending</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Entertainment</a>
                                </li>
                            </ul>
                        </div>
                        <div className = "mt-2">
                            <div className="card" style={{"width": "100%"}}>
                                <img src="../../../images/SpaceX.jpg" className="card-img-top" alt="SpaceX" />
                                <div style={{"color": "white"}} style={{"position": "absolute"}} style={{"left":"5px"}} style ={{"top":"420px"}} style={{"font-weight": "bold"}} style={{"font-size":"xxx-large"}}>SpaceX's starship</div>
                                    <div>
                                       {PostSummaryList()}
                                    </div>
                                </div>
                            </div>
                        </div>
    );
};

export default ExploreComponent;