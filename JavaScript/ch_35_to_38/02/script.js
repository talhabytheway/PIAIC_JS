function fact() {
    let num = parseInt(prompt('Enter a Number'))
    let factt = 1
    for (let i = 1; i <= num ; i++) {
        factt*=i
    }
    alert(`Factorial of ${num} is ${factt}`);
}

fact()