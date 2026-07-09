const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
};

// @desc  Register a new student (public signup is students-only;
//        the admin account is created once via utils/seedAdmin.js)
// @route POST /api/auth/signup
exports.signup = async (req, res) => {
  try {
    const { name, email, password, class: studentClass, section } = req.body;

    if (!name || !email || !password || !studentClass || !section) {
      return res.status(400).json({
        success: false,
        message: "name, email, password, class and section are all required",
      });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "student",
      class: studentClass,
      section,
    });

    const token = generateToken(student);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: student._id,
        name: student.name,
        email: student.email,
        role: student.role,
        class: student.class,
        section: student.section,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc  Login for both students and admin
// @route POST /api/auth/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "email and password are required" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const token = generateToken(user);

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        class: user.class,
        section: user.section,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
