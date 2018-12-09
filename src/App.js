import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { PlayerPanel } from './containers/PlayerPanel';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          </header>
          <div className="App-sidebar">
          <nav className="App-nav">
              <ul>
                <li> <Link to="/roster">Roster</Link> </li>
                <li> <Link to="/formation">Formation</Link> </li>
                <li> <Link to="/stats">Game Stats</Link> </li>
              </ul>
            </nav>
            <section>
              <Route path="/roster" component={PlayerPanel}/>
              <Route path="/" exact component={() => <div>Closed</div>} />
            </section>
          </div>

          <section className="App-body">
            <div>Game Board</div>
            <div>Dashboard</div>
          </section>
          <footer className="App-footer">
            Footer stuff
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
