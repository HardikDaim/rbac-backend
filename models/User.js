const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
        status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
