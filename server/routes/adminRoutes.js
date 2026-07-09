const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const requireRole = require("../middleware/role");
const { getStudents, getClassSummary } = require("../controllers/adminController");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: School admin — student roster views
 */

/**
 * @swagger
 * /api/admin/students:
 *   get:
 *     summary: List all students, optionally filtered by class/section
 *     tags: [Admin]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: query
 *         name: class
 *         schema:
 *           type: string
 *       - in: query
 *         name: section
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of students
 *       403:
 *         description: Admin access only
 */
router.get("/students", protect, requireRole("admin"), getStudents);

/**
 * @swagger
 * /api/admin/classes:
 *   get:
 *     summary: List all class/section combinations with student counts
 *     tags: [Admin]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200:
 *         description: Class/section summary
 *       403:
 *         description: Admin access only
 */
router.get("/classes", protect, requireRole("admin"), getClassSummary);

module.exports = router;
