const initialState = {
    categories: [],
    booklist: [],
    fetching: false,
    fetched: false,
    error: null,
    saved: false, 
    saving: false
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_CATEGORIES': {
            return { ...state, fetching: true }
        }
        case 'FETCH_CATEGORIES_FULFILLED': {
            return { ...state, fetched: true, fetching: false, categories: action.payload }
        }
        case 'FETCH_CATEGORIES_ERROR': {
            return { ...state, fetched: false, fetching: false, error: action.payload }
        }
        case 'FETCH_BOOKS': {
            return { ...state, fetching: true }
        }
        case 'FETCH_BOOKS_FULFILLED': {
            return { ...state, fetched: false, fetching: false, booklist: action.payload }
        }
        case 'FETCH_BOOKS_ERROR': {
            return { ...state, fetched: false, fetching: false, error: action.payload }
        }
        case 'SAVE_DATA': {
            return { ...state, saving: true }
        }
        case 'SAVE_SUCCESS': {
            return { ...state, saved: true }
        }
        case 'SAVE_ERROR': {
            return { ...state, saved: false, error: action.payload }
        }
        default:
            return state;
    }
}