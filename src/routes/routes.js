var express = require('express');
var router = express.Router();

module.exports = (function() {
    router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now());
        next();
    });

    const user = require('./user')

    router.use('/', user)

    return router;
})();