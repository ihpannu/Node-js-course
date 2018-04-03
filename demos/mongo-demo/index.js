const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/playground')
	.then(() => {
		console.log('Connected to MongoDB....');
	})
	.catch(err => console.error('Could not connect to MongoDB...', err));
// THIS CREATES THE SCHEMA
const courseSchema = new mongoose.Schema({
	name: String,
	author: String,
	tags: [String],
	date: {
		type: Date,
		default: Date.now
	},
	isPublished: Boolean
});
// THIS PUSHES THE SCHEMA TO DATABASE
const Course = mongoose.model('Course', courseSchema);

// THIS CREATES THE COURSES
async function createCourse() {
	const course = new Course({
		name: 'Angular Course',
		author: 'Har',
		tags: ['Angular', 'frontend'],
		isPublished: true
	});
	const result = await course.save();
	console.log(result);
}
// createCourse();

// THIS GETS THE COURSES
async function getCourses() {
	const courses = await Course.find({ author: 'Har', isPublished: true })

		.limit(10)
		.sort({ name: 1 })
		.select({ name: 1, tags: 1 });
	// .count()  To get number of total documents
	console.log(courses);
}

getCourses();

/*

COMPARISON OPERATORS IN MONGOOSE
eq (equal)
ne (not equal)
gt (greater than)
gte (greater than or equal to)
lt (less than)
lte (less than or equal to)
in
nin (not in)

EXAMPLES
.find({ price: { $gt: 10, $lte: 20 } })
.find({price: {$in: [10, 15, 20]}})

LOGICAL OPERATORS IN MONGOOSE
or
and

EXAMPLES
.find()
.or([{ author: 'Har' }, { isPublished: true }])
.and([{ author: 'Har' }, { isPublished: true }])

REGULAR EXPRESSION IN MONGOOSE

Starts with particular string
.find({ author: /^string/ })

Ends with particular string
.find({ author: /string$/ })


Contains a particular string
.find({ author: /.*string.star/ })

To make is incase sensitive add 'i' in the end
.find({ author: /string$/i })

PAGINATION

  .skip(pageNumber - 1 * pageSize)
  .limit(pageSize)
  .skip(pageNumber - 1 * pageSize)
  .limit(pageSize)

	// /api/courses?pageNumber=2&pageSize=10

*/
