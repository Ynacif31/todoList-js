import { Router } from 'express';
const router = Router();
import {handleGetAllUsers, handlerCreateUser} from '../controllers/UserController.js';
import { handlerGetUserById } from '../controllers/UserController.js';

router.post('/users', handlerCreateUser);
router.get('/users/:id', handlerGetUserById);
router.get('/users', handleGetAllUsers);

export default router;
