let num = 7

if (num % 3 == 0 && num % 5 != 0) {
    console.log("FIZZ")
} else if (num % 5 == 0 && num % 3 != 0) {
    console.log("BUZZ")
} else if (num % 5 == 0 && num % 3 == 0) {
    console.log("FizzBuzz")
}

else {
    console.log(num)
}