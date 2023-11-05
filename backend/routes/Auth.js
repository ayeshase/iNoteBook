const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');



//Create a User using: POST "/api/auth/createuser". No Login Required 
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email' ).isEmail(),
    body('password', 'password must be 5 characters').isLength({ min: 5 })
], async (req, res) => {
    //if there are errors, return bad request and the errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

// Check wether the user with this email exists already
try{
let user = await User.findOne({email: req.body.email})
if(user){
    return res.status(400).json({error: "Sorry a User with this email is already exists"})

}
     user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    })
    //.then(user=> res.json(user))
   // .catch(err => {console.log(err)})
   // res.json("Please Enter a Unique value for email")
   res.json(user)
}   catch( error  ){
    console.error(error.message)
    res.status(500).send("some Error occured")
}

})
module.exports = router;
