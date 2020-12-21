import React from "react"
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom"
import Home from "./Pages/Home"
import DownloadResults from "./Pages/DownloadResults"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Switch>
          <div className="menu">
            <Route path="/" exact component={Home} />
            <Route path="/Home"  component={Home} />
            <Route path="/DownloadResults"  component={DownloadResults} />
          </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
