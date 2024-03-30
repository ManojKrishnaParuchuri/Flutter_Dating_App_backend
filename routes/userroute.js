// userroute.js

const express = require('express');
const router = express.Router();
const User = require('../models/usermodel');

router.post('/register', async (req, res) => {
    try {
        const { email, password, name, age, phoneNo, city, country, partner ,height,weight,bodyColor,drink,smoke,haveChildren,noOfChild,education,profession} = req.body;
        
        // Check if user with this email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }
        
        // Create a new user
        const newUser = new User({ email, password, name, age, phoneNo, city, country, partner, height,weight,bodyColor,drink,smoke,haveChildren,noOfChild,education,profession});
        await newUser.save();
        
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to register user' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user by emai
        const user = await User.findOne({ email });
        
        // Check if user exists and password is correct
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        // If user is found and password is correct, return success response
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to login' });
    }
});

router.get('/profiles/:partner', async (req, res) => {
    try {
        const { partner } = req.params;
        // Fetch user profiles based on the partner status
        const profiles = await User.find({ partner });

        res.status(200).json(profiles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch profiles' });
    }
});

router.get('/profiles/details/:name', async (req, res) => {
    try {
        const { name } = req.params;
        // Find user by name
        const user = await User.findOne({ name });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch user details' });
    }
});

module.exports = router;
