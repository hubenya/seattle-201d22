// declare literal course object
var course = {
  title: 'Code 201',
  instructor: 'Brian',
  students: ['bob', 'sam', 'sally'],
  alertHello: function() { // this is a method
    alert('hello');
  }
}

// log the course object
console.log('course:', course);

// log the title
console.log('title:', course.title);

// log the instructor
console.log('instructor:', course.instructor);
