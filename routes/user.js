const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

router.post("/signup", (req, res) => {
  // Implement the user signup logic
});

router.get("courses", (req, res) => {
  // Implement listing all the courses logic
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching all teh purchased courses
});

module.exports = router;
