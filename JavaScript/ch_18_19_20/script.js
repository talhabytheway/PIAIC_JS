var courses = []

for (let i = 0; i < 5; i++) {
courses[i] = prompt(`Enter ${++i} course`);
i--
}

alert(courses);

var course = [];

for (let i = 0; i < 5; i++) {
 course[i] = prompt( `${++i} course`, courses[--i])
 
}

courses.splice(0, 5, course[0], course[1], course[2], course[3], course[4])
alert(courses);