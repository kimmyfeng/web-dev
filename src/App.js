// import './App.css';
// import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';
// import Practice from "./components/a7/Practice";
// import Build from "./components/a7/Build";
// import ExploreScreen from "./components/a7/Build/ExploreScreen/ExploreScreen";
// import HomeScreen from "./components/a7/Build/HomeScreen/HomeScreen";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import who from "./reducers/who";
// import {createStore} from "redux";
// import {Provider} from "react-redux";
// const store = createStore(who);
//
// function App() {
//     return (
//         <BrowserRouter>
//             <div className="container">
//                 <Routes>
//                     <Route path = "/" exact={true} element={<Practice />} />
//                     <Route path = "/a7" exact={true} element={<Practice />} />
//                     <Route path = "/a7/practice" exact={true} element={<Practice />} />
//                     <Route path="/a7/build" exact={true} element ={<Build />} />
//                     <Route path="/a7/twitter" exact={true} element ={<Build />} />
//                 </Routes>
//                 <Provider store={store}>
//                     <div>
//                         <Routes>
//                         <Route path="/a7/twitter/home" exact={true} element={<HomeScreen />}/>
//                         <Route path="/a7/twitter/explore" exact={true} element={<ExploreScreen />}/>
//                         </Routes>
//                     </div>
//                 </Provider>
//             </div>
//         </BrowserRouter>
//     );
// }
//
// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Practice from "./components/a7/Practice/index";
import Build from "./components/a7/Build/index";
import HomeScreen from "./components/a7/Build/HomeScreen/HomeScreen";
import ProfileScreen from "./components/a7/Build/ProfileScreen/ProfileScreen";
import ExploreScreen from "./components/a7/Build/ExploreScreen/ExploreScreen";
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const reducer = combineReducers({ tweets, who, profile });
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" exact={true} element={<Practice />} />
            <Route path="/a7" exact={true} element={<Practice />} />
            <Route path="/a7/practice" exact={true} element={<Practice />} />
            <Route path="/a7/twitter" exact={true} element={<Build />} />
            <Route
              path="/a7/twitter/home"
              exact={true}
              element={<HomeScreen />}
            />
            <Route
              path="/a7/twitter/profile"
              exact={true}
              element={<ProfileScreen />}
            />
            <Route
              path="/a7/twitter/profileEdit"
              exact={true}
              element={<ProfileScreen />}
            />
            <Route
              path="/a7/twitter/explore"
              exact={true}
              element={<ExploreScreen />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
