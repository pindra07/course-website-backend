const mongoose = require("mongoose");

const Schema = mongoose.Schema;

mongoose.connect("mongodb url") // mongodb url 
.then(() => console.log('MongoDB connected successfully! 👍'))
.catch(err => console.error('MongoDB connection error: ', err))

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

// Data models
const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
