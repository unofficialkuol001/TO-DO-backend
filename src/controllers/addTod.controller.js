const addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;

    // check duplicate title PER USER
    const existTitle = await Todo.findOne({
      title,
      user: userId
    });

    if (existTitle) {
      return res.status(409).json({
        message: 'Task already exists'
      });
    }

    const newTask = new Todo({
      title,
      description,
      user: userId
    });

    await newTask.save();

    res.status(201).json({
      message: 'Task saved successfully',
      todo: newTask
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
};

export default addTodo;
