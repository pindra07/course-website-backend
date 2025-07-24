const express = require("express");
const adminRouter = require("./routes/admin.js");
const userRouter = require("./routes/user.js");
const app = express();
app.use(express.json());

// Middleware for parsing request bodies
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Your application is running on port 3000");
});
