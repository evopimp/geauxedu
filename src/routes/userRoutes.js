import express from 'express';
import { getAllUsers, getUserByEmail, createUser, updateUser, updateUserStreak, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/email', getUserByEmail);
router.post('/', createUser);
router.put('/:id', updateUser);
router.put('/streak', updateUserStreak);
router.delete('/:id', deleteUser);

export default router;
