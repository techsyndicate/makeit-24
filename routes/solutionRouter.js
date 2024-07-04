const router = require('express').Router();
const {ensurePass} = require('../utils/auth.js')

router.get('/', ensurePass, (req, res) => {
    res.render('solution')
});

// router.get('/', (req, res) => {
//     res.render('solution')
// });

module.exports = router;