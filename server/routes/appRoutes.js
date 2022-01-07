const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

module.exports = router;