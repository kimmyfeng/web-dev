const WhoToFollowListItem1 = (who1) => {
    return (`
            <div class = "row">
                <ul class = "list-group">
                    <li class = "list-group-item">
                        <div class = "row">
                            <div class = "col-10">
                                <div class = "text-secondary">
                                    ${who1.topic}
                                </div>
                                <div>
                                    <span class = "fw-bold">
                                        ${who1.username}
                                    </span>
                                    <i class = "fas fa-check-circle"></i>
                                    <span class = "text-secondary">${who1.time}</span>
                                </div>
                                <div class = "fw-bold">
                                    ${who1.title}
                                </div>
                            </div>
                            <div class = "col-2">
                                <img class = "rounded mw-100"
                                     src = ${who1.image} alt="">
                            </div>
                        </div>        
                    </li>
                </ul> 
           </div>
    `);
};

export default WhoToFollowListItem1;