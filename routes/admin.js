const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // check if user with this username already exists
  await Admin.create({
    username: username,
    password: password,
  });
  res.json({
    msg: "Admin created successfully",
  });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.find({
    username,
    password
  })
  if(user) {
    jwt.sign({
      username
    }, JWT_SECRET)
  } else {
    res.json({
      msg: "Wrong email and password"
    })
  }
})

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.image;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });
  console.log(newCourse._id);
  res.json({
    msg: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses",adminMiddleware, async (req, res) => {
  // Implement fetching all the courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

module.exports = router;
