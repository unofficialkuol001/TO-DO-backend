import express from 'express'
import addTodo from '../controllers/addTod.controller.js'
import getTodo from '../controllers/getTodo.controller.js'

const router = express.Router();

router.post('/addTask', addTodo);
router.get('/display/task', getTodo);

export default router