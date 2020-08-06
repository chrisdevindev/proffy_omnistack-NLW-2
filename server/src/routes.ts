import express from 'express'
import ClassesControler from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';
const routes = express.Router();
const classesController = new ClassesControler();
const connectionsController = new ConnectionController();


routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)

routes.post('/connections', connectionsController.create)

export default routes;