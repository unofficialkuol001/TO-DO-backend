import Todo from "../model/todo";

const addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const taskExist = Todo.findOne({ title });

    if (taskExist) {
      return res.status(409).json({
        message: "task exist"
      })
    }

    const newTask = new Todo({
      title: title
    })

    await newTask.save();

    res.status(201).json({
      message: "task saved successfully"
    })

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
};

export default addTodo;
