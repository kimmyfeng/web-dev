import WhoToFollowListItem1 from "./WhoToFollowListItem1.js"
import who1 from "./who1.js"

const WhoToFollowList1 = () => {
    return (`
             <div class = "list-group">  
        ${
        who1.map((item) => {
            return (WhoToFollowListItem1(item));
        }).join('')

    }
             </div> 

    `);
}

export default WhoToFollowList1;


