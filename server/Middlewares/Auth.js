const jwt = require('jsonwebtoken');
const User = require('../models/User');

const VerifyAuth = async (req, res, next) => {
    try 
    {
        const token = req.headers['x-access-token'];
        if(!token)
            res.redirect('http://localhost:3000/login');

        jwt.verify(token, 'arnav', async (err, uservalid) => {
            if(err)
            {
                console.log(err);
                res.redirect('http://localhost:3000/login');
            }
            else
            {
                const validuser = await User.findOne({_id: uservalid.id});
                console.log(uservalid);
                req.validuser = validuser;
                next();
            }
        }) ;
        
        // const validuser = await User.findOne({_id: uservalid._id});
        
        // req.validuser = validuser;
        // next();
    } catch (error) {
        console.log(error);
        res.redirect('http://localhost:3000/login');
    }
}
module.exports = VerifyAuth;