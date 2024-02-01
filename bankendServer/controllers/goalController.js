// @desc    get Goals
// @route   GET /api/goals
// @access  PRIVATE
const getGoals = (req, res) => {
    res.json({ message: "get goal" })
};


// @desc    set Goals
// @route   POST /api/goal/:id
// @access  PRIVATE
const setGoal = (req, res) => {
    res.json({ message: "set goal" })
};


// @desc    update Goals
// @route   PUT /api/goal/:id
// @access  PRIVATE
const updateGoal = (req, res) => {
    res.json({ message: `Update goal ${req.params.id}` });
};


// @desc    delete Goals
// @route   DELETE /api/goals
// @access  PRIVATE
const deleteGoal = (req, res) => {
    res.json({ message: `Delete goal ${req.params.id}` });
};


module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}