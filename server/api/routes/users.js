const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// @route    POST api/users
// @desc     Register User
// @access   Public 
router.post('/', [check('email', 'Enter a valid email').notEmpty().isEmail(),
    check('password', 'Password enter at least 6 characters long').notEmpty().isLength({min: 6}),
    check('accountType', 'Choose account type').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty() > 0) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { password, email, accountType, username } = req.body;
    const hash = bcrypt.hashSync(password, 10);

    try {
        let user = await User.findOne({ email });

        if(user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        user = new User({
            email,
            password: hash,
            accountType,
            username
        });

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload, 
            config.get('jw_token'),
            { expiresIn: 36000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
            );
        
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;