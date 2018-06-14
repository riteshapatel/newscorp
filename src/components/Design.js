import React, { Component } from 'react';
import '../App.css';

/**
 * Design component
 * @author ritesh.patel
 */
class Design extends Component {
    render () {
        const cardstyles = {
            width: '16rem'
        }

        return (
            <div className={['container-fluid', 'contentsection', 'text-center', 'lighttext'].join(' ')}>
            \\ Design Documents \\
            <br /><br /><br />
                <div className="row text-center">
                    <div className="col-sm-1"></div>
                    <div className={['col', 'card', 'text-center'].join(' ')} style={cardstyles}>
                        <div className="card-body">
                            <h5 className="card-title text-center text-secondary"><i className="fas fa-lightbulb"></i> Thought Process</h5>
                            <hr />
                            
                            <p className="card-text">
                                <img src="viewed_products_flow.png" width="80%" height="80%" alt="Thought process"/>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
        </div>
        )
    }
}

export default Design;