const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db")
const mongoose = require("mongoose")

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

router.get("/courses", async (req, res) => {
  // Implement listing all the courses logic
  const allCourses = await Course.find({})
  res.json({
    courses: allCourses
  })
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  User.updateOne({
    username: username
  }, {
    purchasedCourses: {
      "$push": new mongoose.Types.ObjectId(courseId) 
    }
  });
  res.json({
    msg: "Purchased Complete"
  }) 
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching all teh purchased courses
  const user = await User.findOne({
    username: req.headers.username
  });
  const courses = await Course.find({
    _id: {
      "$in": user.purchasedCourses
    }
  })
  res.json({
    courses: courses
  })
});

module.exports = router;
