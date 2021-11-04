import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList1 from "../WhoToFollowList1/WhoToFollowList1.js";
import PostList from "../Post/PostList.js";


(function ($) {
    $('#wd-home').append(`
    <div class = "container">
        <div class="row mt-2">
            <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                ${NavigationSidebar('home')}
            </div>
            <div class="col-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
                ${PostList()}
            </div>
            <div class="col-xl-4 col-lg-4 d-none d-lg-block">
                ${WhoToFollowList1()}
            </div>
        </div>
    </div>
    `);
})($);