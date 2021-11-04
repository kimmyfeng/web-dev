import WhoToFollowListItem from "./WhoToFollowListItem.js"
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            <div class = "container"> 
             <div class = "list-group">
                <li class = "list-group-item">
                     <p class = "fw-bold">Who to follow</p>
                </li>  
        ${
        who.map((item) => {
            return (WhoToFollowListItem(item));
        }).join('')

    }
             </div> 
             </div>      

    `);
}

export default WhoToFollowList;


