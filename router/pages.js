const router = require('express').Router()

router.get('/', (req, res) => res.render("Students"));

module.exports = router