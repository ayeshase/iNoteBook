
const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator');

//ROute 1: Get All the notes using: Get "/api/auth" Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }


});

//ROute 2: Add a New Note using: POST "/api/auth/addnote" Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {

        try {
            const { title, description, tag } = req.body;
            //if tehere are errors, return bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote)
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Internal server error")
        }
    });
module.exports = router;