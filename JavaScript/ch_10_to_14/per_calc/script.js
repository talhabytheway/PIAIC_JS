var num1, num2, num3, num4, num5, obMarks, totalMarks, percent;

num1 = parseFloat(prompt("Enter 1st Marks"));
num2 = parseFloat(prompt("Enter 2nd Marks"));
num3 = parseFloat(prompt("Enter 3rd Marks"));
num4 = parseFloat(prompt("Enter 4th Marks"));
num5 = parseFloat(prompt("Enter 5th Marks"));
totalMarks = parseFloat(prompt("Enter Total Marks"));

obMarks = num1 + num2 + num3 + num4 + num5;

percent = (obMarks*100 / totalMarks).toFixed(2)

alert(`Percentage is ${percent}%`)