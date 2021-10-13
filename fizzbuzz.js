let number=3
if (!(number%3 || number%5)) {
    console.log("FizzBuzz")
}

else if (!(number%5)) {
    console.log("Buzz")
}
else if (!(number%3)) {
    console.log("Fizz")
}

else {
    console.log(number)
}
