import React, { Component } from 'react';
import '../App.css';

/**
 * About component 
 * @author ritesh.patel
 */
class About extends Component {
    /**
    * @function render 
    * Renders component
    */    
    render () {
        const cardstyles = {
            width: '16rem'
        }

        return (
            <div className={['container-fluid', 'contentsection', 'text-center', 'lighttext'].join(' ')}>
            \\ About \\
            <br /><br /><br />
                <div className="row text-center">
                    <div className="col-sm"></div>
                    <div className={['col', 'card', 'text-left'].join(' ')} style={cardstyles}>
                        <div className="card-body">
                            <h5 className="card-title text-center text-secondary"><i className="fas fa-comment"></i> Few Words...</h5>
                            <hr />
                            
                            <p className="card-text">
                                And yes...this is a cute little store. Now we may not be as huge as Amazon...but then who is? <i className="fa fa-smile text-success"></i>
                                <br />
                                <br />
                                Find a book and enjoy!
                            </p>
                        </div>
                    </div>
                    <div className="col-sm"></div>           
                </div>
        </div>
        )
    }
}

export default About;