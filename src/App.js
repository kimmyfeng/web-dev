import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build/Build";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// function App() {
//   return (
//       <BrowserRouter>
//       <div className="container">
//           <Route path="/a6/hello" exact={true}>
//           <HelloWorld/>
//           </Route>
//           <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
//           <practice/>
//           </Route>
//           <Route path="/a6/build" exact={true}>
//           <build/>
//           </Route>
//       </div>
//       </BrowserRouter>
//   );
// }

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/a6/hello" exact={true} element={<HelloWorld />} />
                    <Route path="/" exact={true} element={<Practice />} />
                    <Route path = "/a6" exact={true} element={<Practice />} />
                    <Route path = "/a6/practice" exact={true} element={<Practice />} />
                    <Route path="/a6/build" exact={true} element ={<Build />} />
                    <Route path="/a6/twitter/home" exact={true} element={<HomeScreen />}/>
                    <Route path="/a6/twitter/explore" exact={true} element={<ExploreScreen />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;