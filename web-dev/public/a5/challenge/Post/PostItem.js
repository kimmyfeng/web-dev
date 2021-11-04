const PostItem = (post) => {
    return (`
                    <div class="row">
                        <div class = "list-group">
                        <div class = "list-group-item">
                            <div class = "row mt-2">   
                                <div class="col-2 col-xl-2 col-lg-2">                    
                                        <img class="wd-rounded"
                                            src = ${post.image} alt="">
                                </div>
                                <div class = "col-10">
                                    <div class = "list-group" style="margin-left: -70px">
                                <div class="col-14 col-xl-14 col-lg-12">
                                    <span>
                                        <b class = "fw-bold" style = "color: white">${post.username}</b>
                                        <i class = "fas fa-check-circle" style="color:white"></i>
                                        <span class="text-secondary">${post.time}</span>
                                        <span style = "text-align: right;float: right;">${post.content1}</span>
                                    </span> 
                                    <div>
                                        <b class = "text-secondary" style="color:white">${post.title1st}</b>
                                        <b style = "color:dodgerblue">${post.title2nd}</b>
                                        <b class = "text-secondary" style="color:white">${post.title3rd}</b>
                                    </div>
                                     <div class = "mt-2">
                                        <div class="card" style="width: 100%;border-color:dimgrey; border-radius: 10px;">
                                            <img src=${post.images} class="card-img-top" alt="images" style = "border-radius: 10px">                                           
                                        <div>
                                        <div>
                                        <div class = "fw-bold" style = "color: white; margin-left: 10px; margin-top: 10px">${post.title4th}</div>
                                        <div class = "text-secondary" style = "margin-left:10px">${post.content2}</div>
                                        <div class = "text-secondary" style = "margin-left:10px; margin-bottom: 10px">${post.link}</div>
                                    </div>   
                                    
                                    </div>                                    
                                </div>
                                <div class="row mt-2">
                                    <span>
                                    <i class = "far fa-comment">&nbsp;&nbsp;&nbsp;</i>
                                    <span class = "text-secondary">${post.message}</span>
                                    <i class = "wd-span"></i>
                                    <i class="fas fa-retweet">&nbsp;&nbsp;&nbsp;</i>
                                    <span class = "text-secondary">${post.trans}</span>
                                    <i class = "wd-span"></i>
                                    <i class="far fa-heart">&nbsp;&nbsp;&nbsp;</i>
                                    <span class = "text-secondary">${post.love}</span>
                                    <i class = "wd-span"></i>
                                    <i class="fas fa-inbox"></i>
                                    </span>
                                </div>
                                       
                            </div>
                        </div>                     
                                </div> 
                                </div> 
                            </div>   
                        </div>               
                        </div>   
                    </div>
                        
                        
    `);
};

export default PostItem;