const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const requireRole = require("../middleware/role");
const upload = require("../middleware/upload"); // <-- ADDED: Import the multer middleware
const {
  createAssignment,
  getAssignments,
  getAssignmentById,
  updateAssignment,
  deleteAssignment,
} = require("../controllers/assignmentController");
const { submitAssignment, getSubmissionsForAssignment } = require("../controllers/submissionController");

/**
 * @swagger
 * tags:
 *   name: Assignments
 *   description: Assignment creation, listing, submission
 */

/**
 * @swagger
 * /api/assignments:
 *   post:
 *     summary: Create a new assignment for a class + section
 *     tags: [Assignments]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, subject, class, section, dueDate]
 *             properties:
 *               title:
 *                 type: string
 *                 example: Algebra Worksheet 3
 *               subject:
 *                 type: string
 *                 example: Mathematics
 *               description:
 *                 type: string
 *                 example: Complete Q1 to Q10 from Chapter 4
 *               class:
 *                 type: string
 *                 example: "10"
 *               section:
 *                 type: string
 *                 example: A
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2026-07-15T23:59:00.000Z"
 *     responses:
 *       201:
 *         description: Assignment created
 *       403:
 *         description: Admin access only
 *   get:
 *     summary: List assignments (students see only their own class/section)
 *     tags: [Assignments]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: query
 *         name: class
 *         schema:
 *           type: string
 *         description: Admin only — filter by class
 *       - in: query
 *         name: section
 *         schema:
 *           type: string
 *         description: Admin only — filter by section
 *     responses:
 *       200:
 *         description: List of assignments
 */
router.post("/", protect, requireRole("admin"), createAssignment);
router.get("/", protect, getAssignments);

/**
 * @swagger
 * /api/assignments/{id}:
 *   get:
 *     summary: Get a single assignment by ID
 *     tags: [Assignments]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Assignment details
 *       404:
 *         description: Not found
 *   put:
 *     summary: Update an assignment
 *     tags: [Assignments]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Assignment updated
 *       403:
 *         description: Admin access only
 *   delete:
 *     summary: Delete an assignment
 *     tags: [Assignments]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Assignment deleted
 *       403:
 *         description: Admin access only
 */
router.get("/:id", protect, getAssignmentById);
router.put("/:id", protect, requireRole("admin"), updateAssignment);
router.delete("/:id", protect, requireRole("admin"), deleteAssignment);

/**
 * @swagger
 * /api/assignments/{id}/submit:
 *   post:
 *     summary: Student submits an assignment via file upload
 *     tags: [Assignments]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [file]
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Select a file to upload (PDF, PPT, Word, etc.)
 *     responses:
 *       201:
 *         description: Submission recorded
 *       400:
 *         description: Already submitted or missing file
 *       403:
 *         description: Assignment not assigned to this student's class/section
 */
// <-- ADDED: upload.single("file") injected into the route
router.post("/:id/submit", protect, requireRole("student"), upload.single("file"), submitAssignment);

/**
 * @swagger
 * /api/assignments/{id}/submissions:
 *   get:
 *     summary: Admin view — roster for this assignment's class/section showing submitted/not-submitted
 *     tags: [Assignments]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Roster with submission status per student
 *       403:
 *         description: Admin access only
 */
router.get("/:id/submissions", protect, requireRole("admin"), getSubmissionsForAssignment);

module.exports = router;