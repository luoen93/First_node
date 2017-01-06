/**
 * Created by Eloit on 2017/1/6.
 */
var express = require('express');
var router = express.Router();

/* GET welcome listen. */
router.get('/logout', function (req, res, next) {
    res.send('OOOOKKKKKK');
});

module.exports = router;
