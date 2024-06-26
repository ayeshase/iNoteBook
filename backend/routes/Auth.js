const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const fetchuser = require('../middleware/fetchuser')
var jwt = require('jsonwebtoken');
const JWT_SECRET = "Roomiisgeniusb$oy";

// USER AUTHENTICATION ENDPOINTS
//ROUTE 1: Create a User using: POST "/api/auth/createuser". No Login Required 
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'password must be 5 characters').isLength({ min: 5 })
], async (req, res) => {
    //if there are errors, return bad request and the errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // Check wether the user with this email exists already
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Sorry a User with this email is already exists" })

        }
        const salt = await bcrypt.genSalt(10)
        secPass = await bcrypt.hash(req.body.password, salt)

        //Create a new user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        })
        const data = {
            user: {
                id: user.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET)


        // res.json(user)
        res.json(authtoken)


    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }

});



//ROUTE 2: authenticate a User using: POST "/api/auth/login". No Login Required 
router.post('/login', [
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password cannot be blank').exists(),

], async (req, res) => {
    //if there are errors, return bad request and the errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Please try to login with right credentials" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with right credentials" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        res.json(authtoken)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }

});



//ROUTE 3: Get loggedin User Details Using: POST "/api/auth/getUser" Login required 
router.post('/getUser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})
module.exports = router;
