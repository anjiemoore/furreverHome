import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/Nav';
import Home from './pages/HomePage/HomePage';
import Surrender from './pages/Surrender/SurrenderPage';
import Adopt from './pages/Adopt/AdoptPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/surrender' component={Surrender} />
              <Route exact path='/adopt' component={Adopt} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
