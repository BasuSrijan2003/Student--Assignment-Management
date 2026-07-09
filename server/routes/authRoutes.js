const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const { CLASSES, SECTIONS } = require("../config/constants");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Signup and login
 */

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Register a new student account
 *     description: Public signup for students only. The admin account is created separately via a seed script.
 *     tags: [Auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, password, class, section]
 *             properties:
 *               name:
 *                 type: string
 *                 example: Priya Sharma
 *               email:
 *                 type: string
 *                 example: priya@example.com
 *               password:
 *                 type: string
 *                 example: mypassword123
 *               class:
 *                 type: string
 *                 enum: [6, 7, 8, 9, 10, 11, 12]
 *                 example: "10"
 *               section:
 *                 type: string
 *                 enum: [A, B, C, D]
 *                 example: A
 *     responses:
 *       201:
 *         description: Student registered successfully, returns JWT token
 *       400:
 *         description: Missing fields or email already registered
 */
router.post("/signup", signup);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login for both students and the admin
 *     tags: [Auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 example: priya@example.com
 *               password:
 *                 type: string
 *                 example: mypassword123
 *     responses:
 *       200:
 *         description: Login successful, returns JWT token
 *       401:
 *         description: Invalid email or password
 */
router.post("/login", login);

module.exports = router;
