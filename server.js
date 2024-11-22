const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

// Routes
const userRoutes = require("./routes/userRoutes");
const roleRoutes = require("./routes/roleRoutes");

dotenv.config();
const app = express();

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [process.env.PRODUCTION_URL] // Production URL
    : [process.env.LOCAL_URL];

const corsOptions = {
  oorigin: function (origin, callback) {
    // If no origin (for Postman or mobile apps), allow the request
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow request
    } else {
      console.log(`Blocked by CORS: ${origin}`); // Log the blocked origin
      callback(new Error("Not allowed by CORS")); // Reject request
    }
  },
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to Hardik's Server");
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
