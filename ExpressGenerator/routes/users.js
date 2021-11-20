var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({name:"charbel"});
});

module.exports = router;
