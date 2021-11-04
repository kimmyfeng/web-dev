import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return (`
                    <div class="row">
                        <div class = "col-11">
                            <div class = "position-relative">
                                <div class="input-group col">
                                    <input type="text" type="search" class="form-control rounded-pill" style="padding-left: 48px;" placeholder="Search Twitter">
                                    <i class="fas fa-search" style="position:absolute; bottom:10px; left: 15px"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-1">
                            <i class = "fas fa-cog fa-2x col-8" style = "color: #1DA1F2"></i>
                        </div>
                        <div class = "mt-2">
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">For You</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Trending</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">News</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Sports</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Entertainment</a>
                                </li>
                            </ul>
                        </div>
                        <div class = "mt-2">
                            <div class="card" style="width: 100%;">
                                <img src="SpaceX.jpg" class="card-img-top" alt="SpaceX">
                                <div style="color: white; position: absolute; left:5px; top:420px; font-weight: bold; font-size:xxx-large">SpaceX's starship</div>
                                    <div>
                                       ${PostSummaryList()}
                                    </div>
                                </div>
                            </div>
                        </div>
    `);
};

export default ExploreComponent;