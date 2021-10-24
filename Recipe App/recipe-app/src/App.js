import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/Recipe";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <main>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/recipes" exact component={Recipes}></Route>
          <Route path="/recipes/:id" component={SingleRecipe}></Route>
          <Route component={Error}></Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
