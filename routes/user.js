const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db")

router.post("/signup", (req, res) => {
  // Implement the user signup logic
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    username,
    password
  })
  res.json({
    msg: "user created successfully"
  })
});

router.get("courses", (req, res) => {
  // Implement listing all the courses logic
  const allCourses = Course.find({})
  res.json({
    courses: allCourses
  })
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;


});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching all teh purchased courses
});

module.exports = router;
