const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const verifyauth = require('../Middlewares/Auth');

var User = require('../models/User');

router.use(bodyParser.json({ extended: true }));
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser());

const jwt_validTill = 60*60
const generate_jwt = (id, age) => {
    return jwt.sign(
        {id}, 
        'arnav',
        {expiresIn: jwt_validTill}
    );
}


router.get('/', (req, res) => {
    res.cookie('token', 'dfdsdsfd');
    res.redirect('http://localhost:3000/login')
    // return res.status(200).json(
    //     {
    //         "status": true,
    //         "message": "Hi Arnav"
    //     });

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
        const token = generate_jwt(UserExist._id)
        //res.cookie('token', token, {httpOnly:true});
        //res.setHeader('Set-Cookie', 'jwt=token');
        return res.status(200).json({
            "message": "Sign in sucessfull",
            "jwt": token,
            "user": UserExist.username
        });
    }
    else
    {
        return res.status(422).json({"message": "Incorrect Password"});
    }

})
router.get('/profile', verifyauth, (req, res) => {

    res.status(200).json(req.validuser)
})

router.post('/editprofile', verifyauth, async (req, res) => {
    console.log(req.body)

    const topicsarray = req.body.topics.split(", ");
    const skillsarray = req.body.skills.split(", ");
    
    try {
        
        await User.updateOne({username: req.validuser.username}, {$set: { topics: topicsarray, skills: skillsarray}});
        res.status(200).json(
            {
                message: "User profile updated",
                topics: topicsarray, 
                skills: skillsarray
            }
        )

    } catch (error) {
        console.log(error);
    }
    
})

module.exports = router;