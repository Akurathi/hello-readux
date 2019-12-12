import React, { Component } from 'react';
import Home from './Home'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayBios from './DisplayBios';
import AddDeveloper from './AddDeveloper';
import Developer from './Developer';
import NavBar from './NavBar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      developers: [
        new Developer(1, "Sri harsha", "Akurathi", "Java", 2011),
        new Developer(2, "Sravani", "Goli", "Python", 2019)
      ]

    }
  }

  addDeveloper = (dev) => {
    dev.id = this.state.developers.length + 1;
    let newDevs = [...this.state.developers, dev];
    this.setState({ developers: newDevs });
  }

  render() {
    return (
      <Router >
        <div className="App" >
          <NavBar />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/bios"><DisplayBios developers={this.state.developers} /></Route>
            <Route path="/create-bio"><AddDeveloper addDeveloper={this.addDeveloper} /></Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
