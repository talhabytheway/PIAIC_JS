var num1, num2, sign, result;
num1 = parseFloat(prompt("Enter a Number"));
sign = prompt("Enter an Operation");
num2 = parseFloat(prompt("Enter a Number"));

// conditions
switch(sign) {
    case "+" : add(num1, num2);
    break;
    case "-" : sub(num1, num2);
    break;
    case "*" : mul(num1, num2);
    break;
    case "/" : div(num1, num2);
    break;
    case "%" : mod(num1, num2);
    break;
}

//functions
function add(num1, num2) {
    result = num1 + num2;
}

function sub(num1, num2) {
    result = num1 - num2;
}

function mul(num1, num2) {
    result = num1 * num2;
}

function div(num1, num2) {
    result = num1 * num2;
}

function mod(num1, num2) {
    result = num1 % num2;
}

// output
if (result == undefined ) {
    window.alert("Please try again!!")
} else {
    window.alert(`${num1+sign+num2+` = `+result}`)
}
