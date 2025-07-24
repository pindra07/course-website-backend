const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

router.post("/signup", (req, res) => {
  // Implement admin signup logic
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get("/courses", (req, res) => {
  // Implement fetching all the courses logic
});

module.exports = router;
