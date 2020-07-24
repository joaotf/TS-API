import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get("/", UserController.index);
routes.get("/user_id/:id", UserController.getIndex);
routes.post("/create_user", UserController.store);
routes.put('/update_user/:id', UserController.update);
routes.delete('/destroy_user/:id', UserController.destroy);

export default routes;