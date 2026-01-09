import User from '../model/user.js'
import bcrypt from 'bcrypt'

const userController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: 'User already exists'
      });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // create user
    const newUser = new User({
      name,
      email,
      password: hashPassword
    });

    await newUser.save();

    return res.status(201).json({
      message: 'User added successfully'
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Server error'
    });
  }
};

export default userController;
