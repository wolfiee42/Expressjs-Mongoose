const asynchandler = require('express-async-handler')

// @desc    get Goals
// @route   GET /api/goals
// @access  PRIVATE
const getGoals = asynchandler(async (req, res) => {
    res.json({ message: "get goal" })
});


// @desc    set Goals
// @route   POST /api/goal/:id
// @access  PRIVATE
const setGoal = asynchandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    };
    res.json({ message: "set goal" })
});


// @desc    update Goals
// @route   PUT /api/goal/:id
// @access  PRIVATE
const updateGoal = asynchandler(async (req, res) => {
    res.json({ message: `Update goal ${req.params.id}` });
});


// @desc    delete Goals
// @route   DELETE /api/goals
// @access  PRIVATE
const deleteGoal = asynchandler(async (req, res) => {
    res.json({ message: `Delete goal ${req.params.id}` });
});


module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}