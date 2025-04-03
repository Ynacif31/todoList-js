import { Router } from 'express';
const router = Router();
import { handlerCreateUser } from '../controllers/UserController.js';

router.post('/users', handlerCreateUser);

export default router;
