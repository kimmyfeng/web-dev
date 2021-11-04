const NavigationSidebar = (active) => {
    return (`
        <div class = "container">
        
            <div class="list-group">
                <a class="list-group-item" href="#">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="list-group-item" href="../HomeScreen/home.html"> 
                    <i class="fa fa-home"></i>
                    <span class = "d-none d-xl-inline">Home</span>
                </a>
                <a class="list-group-item active ${active === 'explore' ? 'active' : ''}" href="../ExploreScreen/explore.html">
                    <i class="fa fa-hashtag"></i>
                    <span class = "d-none d-xl-inline">Explore</span>
                </a>
                <a class="list-group-item" href="#">
                    <i class="fa fa-bell"></i>
                    <span class = "d-none d-xl-inline" style ="float: right; margin-right: -10px">Notifications</span>
                </a>
                <a class="list-group-item" href="#">
                    <i class="fa fa-envelope"></i>
                    <span class = "d-none d-xl-inline">Messages</span>
                </a>
                <a class="list-group-item " href="#">
                    <i class="fa fa-bookmark"></i>
                    <span class = "d-none d-xl-inline">Bookmarks</span>
                </a>
                <a class="list-group-item" href="#">
                    <i class="fa fa-list"></i>
                    <span class = "d-none d-xl-inline">Lists</span>
                </a>
                <a class="list-group-item" href="#">
                    <i class="fa fa-user"></i>
                    <span class = "d-none d-xl-inline">Profile</span>
                </a>
                <a class="list-group-item" href="#">
                    <i class="fa fa-circle"></i>
                    <span class = "d-none d-xl-inline">More</span>
                </a>
            </div>
           
            <button class="btn btn-primary override-bs">
                Tweet
            </button>
        </div>
    `);
}
export default NavigationSidebar;

