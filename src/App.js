import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import NoMatch from "./components/pages/NoMatch";
import Contact from "./components/pages/Contact/Contact";
import PortfolioPage from "./components/pages/PortfolioPage/PortfolioPage";


function App() {
    const home = {
        something: "abc"
    }
    
    return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home home={home}/>
          </Route>
          <Route exact path={["/reactportfolio", "/reactportfolio"]}>
            <Home home={home}/>
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
