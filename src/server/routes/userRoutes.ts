import express from 'express';
import { signIn, createUser, getUserByEmail, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/signin', signIn);
router.post('/', createUser);
router.get('/email', getUserByEmail);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
