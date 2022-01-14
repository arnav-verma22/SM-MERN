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

router.post('/register', async (req, res) => {
    console.log(req.body)

    const { username, email, password } = req.body;

    if(!username || !email || !password)
    {
        return res.status(422).json({"message": "Pls fill all details"});
    }
    try {
        const UserExist = await User.findOne({email: req.body.email});

        if(UserExist)
        {
            return res.status(422).json({"message": "User already exist"});
        }

        const salt = bcrypt.genSaltSync(10)
        const hashedPasssword = bcrypt.hashSync(req.body.password, salt);

        const user = new User({username, email, password: hashedPasssword});
        await user.save();
        return res.status(200).json({message: "User successfully registered"});

    } catch (error) {
        console.log(error)
    }

    
})

router.post('/login', async (req,res) => {

    if(!req.body.email || !req.body.password)
    {
        return res.status(422).json({"message": "Pls fill all details"});
    }
    
    const UserExist = await User.findOne({email: req.body.email});

    if(!UserExist)
    {
        return res.status(422).json({"message": "User doesn't exist"});
    }

    const isvalid = await bcrypt.compare(req.body.password, UserExist.password)
    if(isvalid)
    {
        return res.status(200).json({"message": "Sign in sucessfull"});
    }
    else
    {
        return res.status(422).json({"message": "Incorrect Password"});
    }

})

module.exports = router;