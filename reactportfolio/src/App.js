import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import NoMatch from "./components/pages/NoMatch";
import Contact from "./components/pages/Contact/Contact";
import PortfolioPage from "./components/pages/PortfolioPage/PortfolioPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/About", "/About"]}>
            <About />
          </Route>
          <Route exact path={["/Contact", "/Contact"]}>
            <Contact />
          </Route>
          <Route exact path={["/PortfolioPage", "/PortfolioPage"]}>
            <PortfolioPage />
          </Route>
          <Route>
              <NoMatch/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
