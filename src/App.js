import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SideNav from './components/SideNav'
import Container from './components/Container'

import Home from './pages/Home.screen'
import Pokemon from './pages/Pokemon.screen'

function App() {
  return (
    <Router>
      <div>
        <SideNav />
      </div>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:pokemonName" component={Pokemon} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
