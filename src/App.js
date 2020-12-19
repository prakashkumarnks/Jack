import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from "./Pages/Home"
import DownloadResults from "./Pages/DownloadResults"

class App extends React.Component {
  render() {
    return (
      // <div className="Apps">
      // 	<Router> <div className="menu">
      // 		<Route path="/" exact component={Home} />
      //     <Route path="/Home" exact component={Home} />
      //     <Route path="/View" exact component={Home} />
      // 		<ul>
      // 			<li> <Link to="/Home">Home</Link> </li>
      // 			<li> <Link to="/View">view</Link> </li>
      // 		</ul>
      // 	</div>
      // 	</Router>
      // </div>
      <DownloadResults />
    );
  }
}

export default App;
