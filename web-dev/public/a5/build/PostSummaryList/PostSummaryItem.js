const PostSummaryItem = (post) => {
    return (`
            <div class = "row ms-0">
                <ul class = "list-group">
                    <li class = "list-group-item">
                        <div class = "row">
                            <div class = "col-10">
                                <div class = "text-secondary">
                                    ${post.topic}
                                </div>
                                <div>
                                    <span class = "fw-bold">
                                        ${post.username}
                                    </span>
                                    <i class = "fas fa-check-circle"></i>
                                    <span class = "text-secondary">${post.time}</span>
                                </div>
                                <div class = "fw-bold">
                                    ${post.title}
                                </div>
                            </div>
                            <div class = "col-2">
                                <img class = "rounded mw-100"
                                     src = ${post.image} alt="">
                            </div>
                        </div>        
                    </li>
                </ul> 
           </div>
    `);
};

export default PostSummaryItem;