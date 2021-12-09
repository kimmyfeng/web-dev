import React from "react";
import WhoToFollowListItem1 from "./WhoToFollowListItem1"
import who1 from "./who1.json"

const WhoToFollowList1 = () => {
    return (
             <ul className = "list-group">
                {
                who1.map(who1 => {
                    return (<WhoToFollowListItem1 who1 = {who1}/>);
                })

    }
             </ul>

    );
}

export default WhoToFollowList1;


