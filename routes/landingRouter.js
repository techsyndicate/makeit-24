const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index')
});

//export router
module.exports = router;