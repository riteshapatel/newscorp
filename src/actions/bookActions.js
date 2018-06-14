
import axios from 'axios';
const hostUrl = 'http://0.0.0.0:3003';
/**
 * @function fetchCategories
 * Fetches categories
 * @param {*} dispatch 
 */
export function fetchCategories (dispatch) {
    dispatch({ type: 'FETCH_CATEGORIES' });

    axios.get(hostUrl + '/categories')
        .then (res => {
            console.log('data ', res.data);
            dispatch({ type: 'FETCH_CATEGORIES_FULFILLED', payload: res.data.data })
        })
        .catch (error => {
            dispatch({ type: 'FETCH_CATEGORIES_ERROR', payload: error })
        })
}

/**
 * @function fetchBooks 
 * Fetches books
 * @param {*} dispatch 
 * @param {*} id 
 */
export function fetchBooks (dispatch, id) {
    dispatch({ type: 'FETCH_BOOKS' });

    axios.post(hostUrl + '/books', {
        category_id: id
    })
    .then(res => {
        console.log('data ', res.data);
        dispatch({ type: 'FETCH_BOOKS_FULFILLED', payload: res.data.data })
    })
    .catch (error => {
        dispatch({ type: 'FETCH_BOOKS_ERROR', payload: error })
    })

}

/**
 * @function setAlsoViewed
 * Persists viewed items in the database
 * @param {*} dispatch 
 * @param {*} arr 
 */
export function setAlsoViewed (dispatch, arr) {
    dispatch({ type: 'SAVE_DATA' });

    axios.post(hostUrl + '/items', {
        arr: arr
    })
    .then(res => {
        console.log('data ', res.data);
        dispatch({ type: 'SAVE_SUCCESS', payload: res.data.data })
    })
    .catch (error => {
        dispatch({ type: 'SAVE_ERROR', payload: error })
    })
}