import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * NavBar component
 * @author ritesh.patel
 */
class NavBar extends Component {
 /**
  * @function render 
  * Renders component
  */    
  render() {
    const style = {
      verticalAlign: 'middle'
    }
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <h5 className="my-0 mr-md-auto font-weight-normal"><a href="/"><i className="fas fa-2x fa-book text-warning" style={style}></i></a> NewsCorp Book Store</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link className="p-2 text-dark" to="/">Home</Link>
            <Link className="p-2 text-dark" to="/design">Design</Link>
            <Link className="p-2 text-dark" to="/about">About</Link>
          </nav>
      </div>
    );
  }
}

export default NavBar;