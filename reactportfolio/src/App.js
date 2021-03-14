import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import PortfolioContainer from "./components/PortfolioContainer";
import Contact from "./components/pages/Contact/Contact";
import PortfolioPage from "./components/pages/PortfolioPage/PortfolioPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <PortfolioContainer />
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
