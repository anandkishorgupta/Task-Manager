const Task = require("../model/taskModel");
// create task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
// get all task
exports.getTasks = async (req, res) => {
  try {
    const task = await Task.find();
    if (!task) {
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get a task
exports.getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).send("task not found");
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// DELete a task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete({ _id: id });
    if (!task) {
      return res.status(404).send("task not found");
    }
    res.status(200).send("Task deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
// UPDATE A TASK
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send("task not found");
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
