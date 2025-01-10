const router = require('express').Router();
const {ensureAuthenticated} = require('../utils/auth.js')

router.get('/', (req, res) => {
    res.render('index')
});

//export router
module.exports = router;