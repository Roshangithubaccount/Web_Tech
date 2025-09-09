function Arithmetic() {
    let a = 2;
    let b = 5;

    return {
        addition: a + b,
        subtraction: a - b,
        multiplication: a * b,
        division: a / b,
        modulus: a % b,
        exponentiation: a ** b
    };
}

console.log(Arithmetic());
