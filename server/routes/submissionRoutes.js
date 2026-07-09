const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const requireRole = require("../middleware/role");
const { getMySubmissions } = require("../controllers/submissionController");

/**
 * @swagger
 * tags:
 *   name: Submissions
 *   description: Student's own submission history
 */

/**
 * @swagger
 * /api/submissions/my:
 *   get:
 *     summary: Student views their own submission history
 *     tags: [Submissions]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200:
 *         description: List of the logged-in student's submissions
 *       403:
 *         description: Student access only
 */
router.get("/my", protect, requireRole("student"), getMySubmissions);

module.exports = router;
