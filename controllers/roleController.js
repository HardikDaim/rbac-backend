const Role = require("../models/Role");

// Get All Roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add Role
exports.addRole = async (req, res) => {
  const { name, permissions } = req.body;
  try {
    const newRole = new Role({ name, permissions });
    await newRole.save();
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Role
exports.deleteRole = async (req, res) => {
  try {
    await Role.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Role deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRolePermissions = async (req, res) => {
    console.log(req.params)
    console.log(req.body)
  try {
    const role = await Role.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    role.permissions = req.body.permissions.permissions;
    const updatedRole = await role.save();
    res.json(updatedRole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
