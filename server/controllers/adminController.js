const User = require("../models/User");
const { CLASSES, SECTIONS } = require("../config/constants");

// @desc  List students, optionally filtered by class/section
// @route GET /api/admin/students?class=&section=  (admin only)
exports.getStudents = async (req, res) => {
  try {
    const filter = { role: "student" };
    if (req.query.class) filter.class = req.query.class;
    if (req.query.section) filter.section = req.query.section;

    const students = await User.find(filter).select("-password").sort({ class: 1, section: 1, name: 1 });

    res.status(200).json({ success: true, count: students.length, students });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc  List every class/section combination with a student count
// @route GET /api/admin/classes  (admin only)
exports.getClassSummary = async (req, res) => {
  try {
    const summary = await User.aggregate([
      { $match: { role: "student" } },
      { $group: { _id: { class: "$class", section: "$section" }, studentCount: { $sum: 1 } } },
      { $sort: { "_id.class": 1, "_id.section": 1 } },
    ]);

    const formatted = summary.map((s) => ({
      class: s._id.class,
      section: s._id.section,
      studentCount: s.studentCount,
    }));

    res.status(200).json({
      success: true,
      availableClasses: CLASSES,
      availableSections: SECTIONS,
      summary: formatted,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
