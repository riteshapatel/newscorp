/**
 * Express routes 
 * @author ritesh.patel 
 */
const _ = require('lodash'),
    categories = require('./data/categories.json'),
    books = require('./data/books.json');

/**
 * API handshake
 * @param {*} req 
 * @param {*} res 
 */
const handShake = (req, res) => {
    res.send({ status: 'success', data: 'Welcome to NewsCorp API' });
}

/**
 * @function listCategories
 * @GET
 * Lists categories
 * @param {*} req 
 * @param {*} res 
 */
const listCategories = (req, res) => {
    res.send({ status: 'success', data: categories })
}

/**
 * @function listBooks
 * @POST
 * Lists books for a given category
 * @param {*} req 
 * @param {*} res 
 */
const getBooks = (req, res) => {
    if (req.body.category_id) {
        let category = req.body.category_id;

        if (category) {
            let filteredBooks = _.filter(books, (book) => {
                return book.category_id === category
            });

            res.send({ status: 'success', data: filteredBooks })
        } else {
            res.send({ status: 'success', data: 'Error retrieving books' });
        }
    } else {
        res.send({ status: 'success', data: 'Error retrieving books' });
    }
}

/**
 * @function setViewedItems
 * @POST
 * Sets viewed items for a given book
 * @param {*} req 
 * @param {*} res 
 */
const setViewedItems = (req, res) => {
    let arr = [],
        i = 0, j = 0,
        arrLen, viewedLen,
        found, book;

    if (req.body.arr) {
        arr = req.body.arr;
        arrLen = arr.length;

        for (i = 0; i < arrLen; i++) {
            let title = arr[i],
                viewed = _.filter(arr, (t) => {
                    return t !== title;
                }),
                found = _.findIndex(books, {title: title}),
                book;

            if (found !== -1) {
                book = books[found];
                viewedLen = viewed.length;

                for (j = 0; j < viewedLen; j++) {
                    let viewedBook = viewed[j];
                    console.log('viewed book ', viewedBook)
                    if (_.indexOf(book.viewed_items, viewedBook) === -1) {
                        book.viewed_items.push(viewedBook); 
                    }
                }
                books.splice(found, 1, book);
            }
        }

        res.send({ status: 'success', data: books });
    }
}

// export module
module.exports = {
    handShake: handShake,
    listCategories: listCategories,
    getBooks: getBooks,
    setViewedItems: setViewedItems
}