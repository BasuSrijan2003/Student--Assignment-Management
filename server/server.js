require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");
const submissionRoutes = require("./routes/submissionRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Core middleware
app.use(cors());
app.use(express.json());

// Swagger UI — visit /api-docs once the server is running
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health check
app.get("/", (req, res) => {
  res.json({ success: true, message: "Assignment Management API is running. Visit /api-docs for documentation." });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/admin", adminRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Centralized error handler (catches anything thrown/passed via next(err))
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong on the server" });
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  });
});
