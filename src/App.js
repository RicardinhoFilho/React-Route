import React from "react";
import Nav from "./components/Nav";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/shop" component={Shop} exact />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
