const Submission = require("../models/Submission");
const Assignment = require("../models/Assignment");
const User = require("../models/User");

// @desc  Student submits an assignment
// @route POST /api/assignments/:id/submit  (student only)
exports.submitAssignment = async (req, res) => {
  try {
    const { content } = req.body;
    const assignmentId = req.params.id;

    if (!content) {
      return res.status(400).json({ success: false, message: "content is required" });
    }

    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) {
      return res.status(404).json({ success: false, message: "Assignment not found" });
    }

    // Make sure this assignment actually belongs to the student's class/section
    const student = await User.findById(req.user.id);
    if (assignment.class !== student.class || assignment.section !== student.section) {
      return res.status(403).json({
        success: false,
        message: "This assignment is not assigned to your class/section",
      });
    }

    const alreadySubmitted = await Submission.findOne({
      assignment: assignmentId,
      student: req.user.id,
    });
    if (alreadySubmitted) {
      return res.status(400).json({ success: false, message: "You have already submitted this assignment" });
    }

    const submission = await Submission.create({
      assignment: assignmentId,
      student: req.user.id,
      content,
    });

    res.status(201).json({ success: true, submission });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc  Admin view: every student in the assignment's class/section,
//        showing whether they've submitted or not.
// @route GET /api/assignments/:id/submissions  (admin only)
exports.getSubmissionsForAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json({ success: false, message: "Assignment not found" });
    }

    const students = await User.find({
      role: "student",
      class: assignment.class,
      section: assignment.section,
    }).select("name email class section");

    const submissions = await Submission.find({ assignment: assignment._id });

    const submissionMap = {};
    submissions.forEach((s) => {
      submissionMap[s.student.toString()] = s;
    });

    const roster = students.map((student) => {
      const submission = submissionMap[student._id.toString()];
      return {
        studentId: student._id,
        name: student.name,
        email: student.email,
        class: student.class,
        section: student.section,
        submitted: Boolean(submission),
        submittedAt: submission ? submission.submittedAt : null,
      };
    });

    res.status(200).json({
      success: true,
      assignment: { id: assignment._id, title: assignment.title, dueDate: assignment.dueDate },
      count: roster.length,
      roster,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc  Student views their own submission history
// @route GET /api/submissions/my  (student only)
exports.getMySubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ student: req.user.id })
      .populate("assignment", "title subject dueDate class section")
      .sort({ submittedAt: -1 });

    res.status(200).json({ success: true, count: submissions.length, submissions });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
