import posts from "./data/tweets.json";

const tweets = (state = posts, action) => {
  switch (action.type) {
    case "like-tweet":
      return state.map((tweet) => {
        if (tweet.id === action.tweet.id) {
          if (tweet.loved) {
            tweet.loved = false;
            tweet.love--;
          } else {
            tweet.loved = true;
            tweet.love++;
          }
          return tweet;
        } else {
          return tweet;
        }
      });
    case "delete-tweet":
      return state.filter((tweet) => tweet.id !== action.tweet.id);
    case "create-tweet":
      const tweet = {
        ...action,
        content1: "X",
        id: new Date().getTime() + "",
        image: "../../../images/react-blue.png",
        username: "ReactJS",
        time: "in a minute",
        message: 0,
        trans: 0,
        love: 0,
      };
      return [tweet, ...state];
    default:
      return state;
  }
};

export default tweets;
