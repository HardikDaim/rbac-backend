const express = require('express');
const router = express.Router();
const { getUsers, addUser, deleteUser, updateUserRole, updateUserstatus } = require('../controllers/userController');

router.get('/', getUsers);
router.post('/', addUser);
router.delete('/:id', deleteUser);
router.patch('/:userId/role', updateUserRole);
router.patch('/:userId/status', updateUserstatus);

module.exports = router;
