var courses = []
courses[0] = prompt('Enter First course')
courses[1] = prompt('Enter Second course')
courses[2] = prompt('Enter Third course')
courses[3] = prompt('Enter Fourth course')
courses[4] = prompt('Enter Fifth course')

alert(courses);

course1 = prompt('First course', courses[0])
course2 = prompt('Second course', courses[1])
course3 = prompt('Third course', courses[2])
course4 = prompt('Fourth course', courses[3])
course5 = prompt('Fifth course', courses[4])

courses.splice(0, 5, course1, course2, course3, course4, course5)

alert(courses);