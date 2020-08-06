import express from 'express'
import ClassesControler from './controllers/ClassesController';
const routes = express.Router();
const classesController = new ClassesControler();


routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)

export default routes;