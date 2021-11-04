import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

(function ($) {
    $('#wd-explore').append(`
        <div class = "container">
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                ${NavigationSidebar('explore')}
            </div>
            <div class="col-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
                ${ExploreComponent()}
            </div>
            <div class="col-xl-4 col-lg-4 d-none d-lg-block mt-3">
                ${WhoToFollowList()}
            </div>        
        </div>
        </div>
    `);
})($);

