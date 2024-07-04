const router = require('express').Router();
const {ensurePass, ensureAuthenticated} = require('../utils/auth.js')

router.get('/',ensureAuthenticated, ensurePass, (req, res) => {
    res.render('help')
});

module.exports = router;