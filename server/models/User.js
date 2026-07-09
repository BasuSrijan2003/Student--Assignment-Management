const mongoose = require("mongoose");
const { CLASSES, SECTIONS } = require("../config/constants");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true, // stored as a bcrypt hash, never plain text
    },
    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
    },
    // Only applicable when role === "student"
    class: {
      type: String,
      enum: CLASSES,
      required: function () {
        return this.role === "student";
      },
    },
    section: {
      type: String,
      enum: SECTIONS,
      required: function () {
        return this.role === "student";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
