import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Generator from './pages/Generator';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends React.Component{
  /** contructor to be able to put active path */
  constructor() {
    super()
    this.state = {
      activeKey: window.location.pathname
    }
  }

  render(){
    return(
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Workout</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" activeKey={this.state.activeKey}>
                <Nav.Link href="/about" eventKey="/about">About</Nav.Link>
                <Nav.Link href="/generator" eventKey="/generator">Generator</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {/**the Switch its the way to change the page. */}
        <Switch>
          <Route exact path="/" render={() => (<Home />)} />
          <Route exact path="/about" render={() => (<About />)} />
          <Route exact path="/generator" render={() => (<Generator />)} />
        </Switch>
      </Router>
    )
  }
}

export default App;
