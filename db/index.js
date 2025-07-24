const mongoose = require("mongoose");

const Schema = mongoose.Schema;
mongoose.connect(
  "mongodb+srv://santy:WtpAJDNJvlulBTc5@cluster0.9wfcv2a.mongodb.net/course_app"
);

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
      ref: 'Course'
    },
  ],
});

const CourseSchema = new Schema({
  title: String,
  description: String,
  imageLink: String,
  price: Number
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
