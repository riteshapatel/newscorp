import React, { Component } from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Design from './components/Design';
import Footer from './components/Footer';
import Categories from './components/Categories';

/**
 * App component 
 * @author ritesh.patel 
 */
class App extends Component {
 /**
  * @function render 
  * Renders component
  */  
  render() {
    return (
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/design" component={Design} />
            <Route path="/categories" component={Categories} />
            <Footer />
          </div>
        </Router>
    );
  }
}
 
export default App;
