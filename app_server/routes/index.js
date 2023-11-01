const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router
    .route('/location/:locationid/review/new')
    .get(ctrlLocations.addReview)
    .post(ctrlLocations.doAddReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;


//이전 코드
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
