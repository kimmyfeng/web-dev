import PostItem from "./PostItem.js"
import post from "./post.js"


const PostList = () => {
    return (`
             <div class = "list-group">  
        ${
        post.map((item) => {
            return (PostItem(item));
        }).join('')

    }
             </div> 

    `);
}

export default PostList;