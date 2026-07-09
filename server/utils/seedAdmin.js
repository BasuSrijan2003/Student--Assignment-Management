// Run this once to create the single school admin account:
//   npm run seed:admin
// It reads ADMIN_NAME / ADMIN_EMAIL / ADMIN_PASSWORD from .env

require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existing = await User.findOne({ email: process.env.ADMIN_EMAIL.toLowerCase() });
    if (existing) {
      console.log("An admin with this email already exists — nothing to do.");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    await User.create({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin account created successfully:");
    console.log("  email:", process.env.ADMIN_EMAIL);
    console.log("  password: (whatever you set in .env — log in with this)");
    process.exit(0);
  } catch (err) {
    console.error("Failed to seed admin:", err.message);
    process.exit(1);
  }
};

seedAdmin();
