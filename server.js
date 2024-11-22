const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Routes
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
connectDB();

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
