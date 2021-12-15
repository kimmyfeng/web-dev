import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
// import HomeScreen from "./HomeScreen/HomeScreen";

const Build = () => {
    return(
        <>
            <h1>Build</h1>
            <ExploreScreen/>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
        </>

    )
};

export default Build;


