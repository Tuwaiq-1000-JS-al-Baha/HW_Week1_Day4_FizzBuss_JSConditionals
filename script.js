let number = 5

if (number % 3 == 0 && number % 5 == 0) {
    console.log("fizzBuzz(" + number + ") FizzBuzz")
} else if (number % 3 == 0) {
    console.log("fizzBuzz(" + number + ")Fizz")
} else if (number % 5 == 0) {
    console.log("fizzBuzz(" + number + ")Buzz")
} else {
    console.log(number)
}