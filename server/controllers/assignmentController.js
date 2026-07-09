const Assignment = require("../models/Assignment");

// @desc  Create an assignment for a specific class + section
// @route POST /api/assignments  (admin only)
exports.createAssignment = async (req, res) => {
  try {
    const { title, subject, description, class: cls, section, dueDate } = req.body;

    if (!title || !subject || !cls || !section || !dueDate) {
      return res.status(400).json({
        success: false,
        message: "title, subject, class, section and dueDate are required",
      });
    }

    const assignment = await Assignment.create({
      title,
      subject,
      description,
      class: cls,
      section,
      dueDate,
      createdBy: req.user.id,
    });

    res.status(201).json({ success: true, assignment });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc  List assignments.
//        - Student: automatically scoped to their own class & section.
//        - Admin: sees all, optionally filtered with ?class=&section=
// @route GET /api/assignments
exports.getAssignments = async (req, res) => {
  try {
    let filter = {};

    if (req.user.role === "student") {
      const User = require("../models/User");
      const student = await User.findById(req.user.id);
      filter = { class: student.class, section: student.section };
    } else {
      // admin — optional filters
      if (req.query.class) filter.class = req.query.class;
      if (req.query.section) filter.section = req.query.section;
    }

    const assignments = await Assignment.find(filter).sort({ dueDate: 1 });
    res.status(200).json({ success: true, count: assignments.length, assignments });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc  Get a single assignment
// @route GET /api/assignments/:id
exports.getAssignmentById = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json({ success: false, message: "Assignment not found" });
    }
    res.status(200).json({ success: true, assignment });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc  Update an assignment
// @route PUT /api/assignments/:id  (admin only)
exports.updateAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!assignment) {
      return res.status(404).json({ success: false, message: "Assignment not found" });
    }
    res.status(200).json({ success: true, assignment });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc  Delete an assignment
// @route DELETE /api/assignments/:id  (admin only)
exports.deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndDelete(req.params.id);
    if (!assignment) {
      return res.status(404).json({ success: false, message: "Assignment not found" });
    }
    res.status(200).json({ success: true, message: "Assignment deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
