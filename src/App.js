import React from "react"
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom"
import Home from "./Pages/Home"
import DownloadResults from "./Pages/DownloadResults"

import * as common from './Common/Common'


import Login from "./Pages/Login"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Switch>
          <div className="menu">
            <Route path="/" exact component={Home} />
            <common.PrivateRoute path="/Home"  component={Home} />
            <Route path="/Login"  component={Login} />
            <Route path="/DownloadResults"  component={DownloadResults} />
          </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
