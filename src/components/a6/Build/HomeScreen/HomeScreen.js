import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList1 from "../WhoToFollowList1/WhoToFollowList1"
import PostList from "../Post/PostList";

const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <PostList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList1/>
            </div>
        </div>
    );
};
export default HomeScreen;