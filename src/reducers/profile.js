import data from "./data/profile.json";

const profile = (state = data, action) => {
  switch (action.type) {
    case "edit-profile":
      state = action.profile;
      return state;
    default:
      return state;
  }
};

export default profile;
