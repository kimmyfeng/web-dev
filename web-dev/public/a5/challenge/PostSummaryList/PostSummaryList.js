import PostSummaryItem from "./PostSummaryItem.js"
import post from "./post.js"

const PostSummaryList = () => {
    return (`
             <div class = "list-group">  
        ${
        post.map((item) => {
            return (PostSummaryItem(item));
        }).join('')

    }
             </div> 

    `);
}

export default PostSummaryList;