import express from 'express'
import userController from '../controllers/user.controller.js'
import login from '../controllers/login.controller.js'


const router = express.Router();

router.post('/signin', userController);
router.post('/login', login);

export default router
