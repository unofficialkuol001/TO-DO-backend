import express from 'express'
import addT from '../controllers/todo.controller.js'

const router = express.Router();

router.post('/add', addT);

export default router;