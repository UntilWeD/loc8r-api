var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

/* 
script(src='https://code.jquery.com/jquery-3.3.1.slim.min.js')
script(src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
      crossorigin='anonymous') 
+script(src='/javascripts/bootstrap.min.js')   
*/