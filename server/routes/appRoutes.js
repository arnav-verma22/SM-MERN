const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var User = require('../models/User');

router.use(bodyParser.json({ extended: true }));
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/', (req, res) => {
   
    return res.status(200).json(
        {
            "status": true,
            "message": "Hi Arnav"
        });

})

router.post('/', (req, res) => {
    console.log(req.body)
    return res.status(200).json(
        {
            "status": true,
            "message": req.body
        });
    
})

router.post('/signup', (req,res) => {
    
    return res.status(200).json(
        {
            "status": true,
            "message": "Account created succesfully"
        });
})

module.exports = router;