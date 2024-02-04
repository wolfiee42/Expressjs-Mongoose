const asynchandler = require('express-async-handler')
const Goal = require('../models/goalModel');


// @desc    get Goals
// @route   GET /api/goals
// @access  PRIVATE
const getGoals = asynchandler(async (req, res) => {
    const goals = await Goal.find();
    res.json(goals)
});


// @desc    set Goals
// @route   POST /api/goal/:id
// @access  PRIVATE
const setGoal = asynchandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    };

    const goal = await Goal.create({
        text: req.body.text
    })

    res.json({ goal })
});


// @desc    update Goals
// @route   PUT /api/goal/:id
// @access  PRIVATE
const updateGoal = asynchandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400)
        throw new Error('Goal Not Found')
    };

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.json(updatedGoal);
});


// @desc    delete Goals
// @route   DELETE /api/goals
// @access  PRIVATE
const deleteGoal = asynchandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);
    const result = await Goal.deleteOne(goal);
    res.json(result);
});


module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}