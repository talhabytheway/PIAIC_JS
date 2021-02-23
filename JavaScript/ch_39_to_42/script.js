let c1, c2, c3, c4, c5, obtained, total, percentage, grade;

c1 = parseFloat(prompt('Enter First Marks'))
c2 = parseFloat(prompt('Enter Second Marks'))
c3 = parseFloat(prompt('Enter Third Marks'))
c4 = parseFloat(prompt('Enter Fourth Marks'))
c5 = parseFloat(prompt('Enter Fifth Marks'))
total = parseFloat(prompt('Enter Total Marks'))

obtained = c1+c2+c3+c4+c5;

percentage = obtained / total * 100;

switch (true) {
    case (percentage>=90):
        grade = 'A+'
        break;
    case (percentage<90 && percentage>=75):
        grade = 'A'
        break;
    case (percentage<75 && percentage>=60):
        grade = 'B'
        break;
    case (percentage<60 && percentage>=45):
        grade = 'C'
        break;
    case (percentage<45 && percentage>=30):
        grade = 'D'
        break;
    case (percentage<30):
        grade = 'F'
        break;
    default:
        grade = 'error'
        break;
}

if (grade != 'error') {
    alert(`Grade is ${grade}`)    
} else {
    alert('There was an error please try again')
}