var express = require('express');
var router = express.Router();

/* GET about us page. */
router.get('/', function(req, res) {
    res.render('about-us', { title: 'About us page' });
});

module.exports = router;
