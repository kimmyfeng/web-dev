// import React from "react";
// import {Link, Route, Routes} from "react-router-dom";
// import HomeScreen from "./HomeScreen/HomeScreen";
// import ExploreScreen from "./ExploreScreen/ExploreScreen";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
//
// const Build = () => {
//     return(
//         <>
//             <HomeScreen/>
//             <Link to="/a7/practice">Practice</Link>
//         </>
//             <Routes>
//                 <Route path="/a7/twitter/home" exact={true} element={<HomeScreen />}/>
//                 <Route path="/a7/twitter/explore" exact={true} element={<ExploreScreen />}/>
//             </Routes>
//         </div>
//
//     )
// };
//
// export default Build;
import "../../../vendors/bootstrap/css/bootstrap.min.css";
import "../../../vendors/bootstrap/bootstrap.min.css";
import "../../../vendors/fontawesome/css/all.min.css";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import who from "../../../reducers/who";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(who);

const Build = () => {
  return (
    <Provider store={store}>
      <div>
        <Routes>
          <Route
            path="/a7/twitter/home"
            exact={true}
            element={<HomeScreen />}
          />
          <Route
            path="/a7/twitter/explore"
            exact={true}
            element={<ExploreScreen />}
          />
          <Route path="/" exact={true} element={<HomeScreen />} />
        </Routes>
        <Link to="/a7/practice">a7 Practice</Link>
      </div>
    </Provider>
  );
};
export default Build;
