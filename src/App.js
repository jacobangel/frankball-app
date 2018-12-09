import React, { Component } from 'react';
import './App.css';

import { Provider } from "react-redux";
import store from "./state/store";

import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PlayerPanel } from './containers/PlayerPanel';
import { FormationPanel } from './containers/FormationPanel';
import { GameOverview } from './containers/GameOverview';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <Header />
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
              <GameOverview />
            </section>
            <footer className="App-footer">
              <Footer />
            </footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
