const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token) { return res.status(401).json({ msg: 'No token found - access denied' }) }
    try {
        var decoded = jwt.verify(token, config.get('jw_token'));        
        
        req.user = decoded.user;
        next();
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Invalid Token');
    }
}