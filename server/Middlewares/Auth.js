const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
    const token = req.headers['x-access-token']

    
}