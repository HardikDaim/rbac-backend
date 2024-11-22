const express = require('express');
const router = express.Router();
const { getRoles, addRole, deleteRole, updateRolePermissions } = require('../controllers/roleController');

router.get('/', getRoles);
router.post('/', addRole);
router.delete('/:id', deleteRole);
router.patch('/:id', updateRolePermissions);

module.exports = router;
