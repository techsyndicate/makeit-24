const router = require('express').Router();
const {ensurePass} = require('../utils/auth.js')

router.get('/', (req, res) => {
    res.render('city')
});

module.exports = router;