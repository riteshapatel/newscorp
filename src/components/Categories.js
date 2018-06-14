import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { fetchCategories, fetchBooks, setAlsoViewed } from '../actions/bookActions';

/**
 * props mapping
 * @param {Object} state 
 */
const mapStateToProps = state => {
    return { categories: state.books.categories,
             books: state.books.booklist }
};

/**
 * dispatcher mapping
 * @param {Object} dispatch 
 */
const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: fetchCategories(dispatch),
        getBooks: id => fetchBooks(dispatch, id),
        setAlsoViewed: arr => setAlsoViewed(dispatch, arr)
    }
}

/**
 * Categories component
 * @author ritesh.patel
 */
class ConnectedCategories extends Component {
    /**
     * @constructor
     * @param {*} props 
     */
    constructor (props) {
        super(props);

        this.state = {
            categories: [],
            books: [],
            details: '',
            title: '',
            viewed: []
        }
    }

    /**
     * @function getDetails
     * Returns book details
     * @param {*} el 
     */
    getDetails (el) {
        let arr = [];
        if (el.title && el.details) {
            let category_id = el.category_id;

            // check if localstorage exists 
            if (localStorage.getItem('category_' + category_id) === null) {
                localStorage.setItem('category_' + category_id, JSON.stringify({category: category_id, book: el.title, viewed: [el.title]}))
            } else {
                let obj = JSON.parse(localStorage.getItem('category_' + category_id));
                if (obj.viewed.indexOf(el.title) === -1) {
                    obj.viewed.push(el.title);
                    this.persistViewed(el);
                }
                obj.viewed.forEach(item => {
                    if (item !== el.title)
                        arr.push(item);
                })
                this.setState({viewed: arr})
                localStorage.setItem('category_' + category_id, JSON.stringify(obj));
            }      
            this.setState({details: el.details, title: el.title});
        }
    }

    /**
     * @function persistViewed
     * persists viewed items
     * @param {*} el 
     */
    persistViewed (el) {
        let category_id = el.category_id;
        let viewed = [];
        if (localStorage.getItem('category_' + category_id) !== null) {
            let obj = JSON.parse(localStorage.getItem('category_' + category_id));
            viewed = obj.viewed;
            viewed.push(el.title);
            // persist this list on backend
            this.props.setAlsoViewed(viewed);
        } else {
            alert('No additional books viewed yet...')
        }
    }

    /**
     * @function getList 
     * Returns book list
     */
    getList () {
        if (this.props.books.length > 0) {
            return (
                <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>View Book</th>
                    </tr>   
                </thead>
                <tbody>
                    {this.props.books.map(el => (
                        <tr key={el.title}>
                        <td>{el.title}</td>
                        <td><a href="#" onClick={() => this.getDetails(el)}><i className="fa fa-binoculars"></i></a></td>
                        </tr> 
                    ))}
                </tbody>
                </table>
            )
        } else {
            return (
                <div className="text-center text-danger"><i className="fas fa-asterisk"></i> Select a category to view books <i className="fas fa-asterisk"></i> </div>
            )
        }        
    }

    /**
     * @function changeCategory 
     * Changes category
     * @param {*} id 
     */
    changeCategory (id) {
        this.setState({title: '', details: '', viewed: []});
        this.props.getBooks(id);
    }

    /**
     * @function render 
     * Renders component
     */
    render () {
        const hasTitle = this.state.title.length > 0;
        const hasSimilar = this.state.viewed.length > 0;
        return (
            <div>
                <div className="row text-center" hidden={this.props.categories.length}>
                    <div className="col">
                        <i className="fa fa-spinner fa-1x fa-pulse loader"> </i> Loading...
                    </div>
                </div>
                <ul className="nav">
                    {this.props.categories.map(el => (
                        <li className="nav-item" key={el.id}><a href="#" className="btn btn-sm" onClick={() => this.changeCategory(el.id)}>{el.name}</a></li>
                    ))}
                </ul>
                <hr />
                {this.getList()}
                {hasTitle &&
                    <div className="row text-center">
                        <div className="col-sm"></div>
                        <div className={['col', 'card', 'text-center'].join(' ')}>
                            <div className="card-body">
                                <h5 className="card-title text-center text-secondary">{this.state.title}</h5>
                                <hr />
                                
                                <p className="card-text text-center">
                                    {this.state.details}
                                </p>
                                {hasSimilar && 
                                    <div>
                                    {this.state.viewed.map((item) => (
                                        <span className="badge badge-pill badge-info container-spacing" key={item}>{item}</span>
                                    ))}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-sm"></div>           
                    </div>
                }        
            </div>
        )
    }
}

// connect dumb component with state
const Categories = connect (mapStateToProps, mapDispatchToProps) (ConnectedCategories);

// export component
export default Categories;