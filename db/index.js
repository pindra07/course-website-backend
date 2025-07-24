require('dotenv').config(); // this loads the variables from .env file
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mongo_url = process.env.MONGO_URL;
mongoose.connect(mongo_url)

const AdminSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  purchasedCourses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new Schema({
  title: String,
  description: String,
  imageLink: String,
  price: Number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
