const User = require("../models/User");
const Role = require("../models/Role");

// Get All Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("role");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add User
exports.addUser = async (req, res) => {
  const { name, email, role, status } = req.body;
  try {
    const userRole = await Role.findById(role);
    if (!userRole) return res.status(404).json({ error: "Role not found" });

    const newUser = new User({ name, email, role, status });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUserRole = async (req, res) => {
  const { userId } = req.params;
  const { roleId } = req.body;
  try {
    // Find the user and update their role
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const role = await Role.findById(roleId);
    if (!role) {
      return res.status(404).send({ message: "Role not found" });
    }

    user.role = role._id; // Set the new role for the user
    await user.save();

    res.status(200).send({ message: "User role updated", user });
  } catch (error) {
    console.error("Error updating role:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

exports.updateUserstatus = async (req, res) => {
  const { userId } = req.params;
  const { status } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.status = status;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating role:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};
