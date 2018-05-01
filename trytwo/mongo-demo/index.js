const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to Mongodb...'))
  .catch(err => console.error('Could not connect to Mongodb..', err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [
    String, String
  ],
  date: {
    type: Date,
    default: Date.now
  },
  isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema); // Class

async function getCourses() {
  const courses = await Course.find();
  console.log(courses);
}

getCourses()
// async function createCourse() {   const course = new Course({     name:
// 'Angular Js Course',     author: 'Mosh',     tags: [       'Javascript',
// 'Framework'     ],     isPublished: true   });   const result = await
// course.save()   console.log(result); } createCourse()