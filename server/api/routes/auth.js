const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const config = require('config');
const auth = require('../../middleware/auth');

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (e) {
        console.log(e.message);
        return res.status(500).send('Server Error');
    }

})

// @route    POST api/auth
// @desc     Login user
// @access   Public
router.post('/', [check('email', 'Enter valid email').isEmail(), check('password', 'Enter password').not().isEmpty()], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) { return res.status(401).json({ errors: errors.array() }) }

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(401).json({errors: [{ msg: 'Invalid Credentials' }]});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) { return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }]})}

        const paylod = {
            user: {
                id: user.id
            }
        }

        jwt.sign(paylod, config.get('jw_token'), {expiresIn: 36000}, (err, token) => {
            if(err) throw err;
            return res.json({token});
        })

    } catch (e) {
        
    }
});

module.exports = router;