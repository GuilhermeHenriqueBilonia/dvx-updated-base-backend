const faunadb = require('faunadb');

module.exports = {
    fauna: new faunadb.Client({
        secret: 'fnAEQRUJfoACROvAjSxdaG3ADmDZ9c3ifLY7ER4a'
    }),
    q: faunadb.query
}