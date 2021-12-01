import React from "react";
import PostItem from "./PostItem"
import post1 from "./post1.json"

const PostList = () => {
    return (
             <ul className = "list-group">
                {
                post1.map(post1 => {
                    return (
                        <PostItem post1 = {post1}/>
                    );
                })

    }
             </ul>

    );
}

export default PostList;