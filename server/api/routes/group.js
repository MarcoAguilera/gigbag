const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const config = require('config');
const auth = require('../../middleware/auth');
const Group = require('../../models/Group');

// @route    GET api/groups
// @desc     Get all groups in DB
// @access   Public
router.get('/', async (req, res) => {
    try {
        const groups = await Group.find({});
        res.json(groups);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});

// @route    POST api/groups
// @desc     Create/Update Group
// @access   Private
router.post('/', 
[auth, check('genres', 'Please chosse your genres').not().isEmpty(),
 check('name', 'Please include your group name').not().isEmpty(),
 check('rate', 'Please include your hourly rate').not().isEmpty(),
 check('city', 'Enter city you are from').not().isEmpty(),
 check('state', 'Enter state you are from ').not().isEmpty()
], 
async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){ return res.status(401).json({ errors: errors.array() }) }

    const user = await User.findById(req.user.id).select('-password');

    if(!user) { return res.status(400).json({ errros: { msg: 'No user found.' } }) }
    if(user.accountType === "user") { return res.status(400).json({ errros: { msg: 'Account Type: User, Invalid action' } }) }

    try {
        const { name, phone, genres, rate, city, state, groupImg, socials } = req.body;

        const groupFields = {
            user,
            name,
            phone, 
            genres, 
            rate: parseInt(rate),
            city, 
            state, 
            groupImg, 
            socials
        };

        // Check for Update
        let group = await Group.findOne({ user: user.id });
        if(group) {
            // Update
            group = await Group.findOneAndUpdate({ user: user.id }, 
                { $set: groupFields },
                { new: true }
            );
            return res.json(group);
        }
        
        // Create new group
        group = new Group(groupFields);
        await group.save();
        res.status(200).json(group);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;