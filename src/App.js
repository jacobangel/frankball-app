import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './imgs/field.svg';

import { Provider } from "react-redux";
import store from "./state/store";

import { HashRouter as Router, Route, Link } from "react-router-dom";
import { PlayerPanel } from './containers/PlayerPanel';
import { FormationPanel } from './containers/FormationPanel';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
            </header>
            <div className="App-sidebar">
            <nav className="App-nav">
                <ul>
                  <li><Link to="/roster">Roster</Link> </li>
                  <li><Link to="/formation">Formation</Link> </li>
                  <li><Link to="/stats">Game Stats</Link> </li>
                </ul>
              </nav>
              <section>
                <Route path="/roster" component={PlayerPanel}/>
                <Route path="/formation" component={FormationPanel}/>
                <Route path="/" exact component={() => <div>Closed</div>} />
              </section>
            </div>

            <section className="App-body">
              <div>
                <h1>Game!</h1>
                <img src={Field} />
              </div>
              <div>Dashboard</div>
            </section>
            <footer className="App-footer">
              Footer stuff
            </footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
