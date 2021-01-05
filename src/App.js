import React, { Component } from 'react';
import './App.css';
import { View } from './components/view';
import { Add } from './components/add';
import { editSong } from './components/editSong';
import { ReadSong } from './components/readSong';
import { AboutMe } from './components/aboutMe';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Make Playlist</Nav.Link>
            <Nav.Link href="/readSong">View Your Playlist</Nav.Link>
            <Nav.Link href="/aboutMe">About me</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path='/' component={Content} exact/>
          <Route path='/add' component={Add} exact/>
          <Route path='/readSong' component={ReadSong} exact/>
          <Route path='/editSong/:id' component={editSong} exact/>
          <Route path='/aboutMe' component={AboutMe} exact/>
        </Switch>

      </div>
      </Router>
    );
  }
}
export default App;