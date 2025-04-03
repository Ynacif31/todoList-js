import { Router } from 'express';
const router = Router();
import { handlerCreateUser } from '../controllers/UserController.js';
import { handlerGetUserById } from '../controllers/UserController.js';

router.post('/users', handlerCreateUser);
router.get('/users/:id', handlerGetUserById);

export default router;
