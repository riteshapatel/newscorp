import React, { Component } from 'react';
import '../App.css';

/**
 * Home component
 * @author ritesh.patel
 */
class Home extends Component {
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
            \\ Why read <i className="fa fa-smile text-danger"></i> \\
            <br /><br /><br />
                <div className="row text-center">
                    <div className="col-sm"></div>
                    <div className={['col', 'card', 'text-left'].join(' ')} style={cardstyles}>
                        <div className="card-body">
                            <h5 className="card-title text-center text-secondary"><i className="fas fa-binoculars"></i> Find A Book</h5>
                            <hr />
                            
                            <p className="card-text text-center">
                                We have plenty of books. Find me one, young gun! <br /><br />
                                <a href="/categories" className="btn btn-sm btn-success"><i className="fa fa-search"></i> Find</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm"></div>           
                </div>
        </div>
        )
    }
}

export default Home;