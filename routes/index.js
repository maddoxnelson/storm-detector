var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/active', async (req, res) => {
  const alerts = await axios('https://api.weather.gov/alerts/active');

  const data = alerts.data.features.map(alert => {
  const { event, headline, description, affectedZones } = alert.properties;

  return {
    affectedZones,      
    event,      
    headline,      
    description
    }
  });
  
  res.json(data);
});

module.exports = router;
