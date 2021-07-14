const express = require('express')
const User = require('../db/models/user')

const router = new express.Router()
//imc CRUD OPS

// User Creation
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send({user})
    } catch (e) {
        res.status(400).send('Error')
        console.log(e)
    }
})

// Read all users
router.get('/users', async (req, res) => {
    try {
        const data = await User.find({})
        res.status(200).send(data)
    } catch (e) {
        res.status(404).send('Error')
    }
})

//Get a user by ID
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).send('Not Found')
        }
        res.status(200).send(user)
    } catch (e) {
        console.log(e)
    }

})

// Update a user by ID
router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)

    try {
        const user = await User.findOne({_id: req.params.id})
        if (!user) {
            return res.status(404).send('Not found')
        }
        updates.forEach((update) => user[update] = req.body[update])
        await user.save()
        res.status(200).send(user)
    } catch (e) {
        console.log(e)
    }
})
// Delete a user by UD
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.deleteOne({_id: req.params.id})
        if (!user) {
            return res.status(404).send('Not Found')
        }
        res.status(205).send('Done')
    } catch (e) {
        console.log(e)
    }
})

//imc Dynamic Data


// Add Dynamically generated data
router.patch('/users/dynamic/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['subjects', 'society', 'name', 'contact', 'class', 'year']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (isValidOperation) {
        return res.status(400).send('invalid route')
    }
    try {
        const user = await User.findOne({_id: req.params.id})
        if (!user) {
            return res.status(404).send('Not found')
        }
        const oldData = user['Dynamic']
        updates.forEach((update) => user['Dynamic'] = {[update] : req.body[update]})
        Object.assign(user['Dynamic'], oldData)
        await user.save()
        res.status(200).send(user)
    } catch (e) {
        console.log(e)
    }
})
// Update Society By ID
router.patch('/users/society/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    try {
        const user = await User.findOne({_id: req.params.id})
        if (!user) {
            return res.status(404).send('Not found')
        }
        updates.forEach((update) => {
            user.society.push( {[update] : req.body[update]} )
        })
        await user.save()
        res.status(200).send(user)

    } catch (e) {
        console.log(e)
    }
})


module.exports = router
