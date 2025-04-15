import express from "express"
const tasks = express.Router()
import { AllTasks } from "../controllers/tasks.js";


tasks.route('/').get(AllTasks.getAllTasks).post(AllTasks.createTask)
tasks.route('/:id').get(AllTasks.getTask).patch(AllTasks.updateTask).delete(AllTasks.deleteTask)

export default tasks
