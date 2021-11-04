const WhoToFollowListItem = (who) => {
    return (`
            <div class = "row ms-0">
                <div class="list-group">
                    <li class = "list-group-item">
                        <div class = "row">
                            <div class="col-2 col-xl-2 col-lg-3 m-xl-0 p-xl-0">                    
                                <img class="wd-rounded"
                                     src = ${who.avatarIcon} alt="">
                            </div>
                            <div class="col-7 col-xl-7 col-lg-5">
                                <span class = "pl-lg-0 ml-lg-0" style="white-space: nowrap;">
                                     <b class = "fw-bold">${who.userName}</b>
                                     <i class = "fas fa-check-circle"></i>
                                </span>
                            <div class="fw-bold">
                                <span class="text-secondary">${who.handle}</span>
                            </div>
                            </div>              
                            <div class="col-3 col-xl-3 col-lg-4">
                                <button class="btn btn-primary override">follow</button>
                            </div>
                        </div>              
                    </li>
                </div> 
           </div>
    `);
};

export default WhoToFollowListItem;