import React, { Component } from 'react';

/**
 * Footer component
 * @author ritesh.patel
 */
class Footer extends Component {
 /**
  * @function render 
  * Renders component
  */    
  render() {
    const styles = {
        fontSize: '12px',
        color: '#777'
    }
    return (
       <div className="text-center" style={styles}>
           <hr />
           <i className="fab fa-docker text-primary"></i> Whoa! I am running in a container | <i className="fab fa-react text-primary"></i> Powered by React
       </div>
    );
  }
}

export default Footer;