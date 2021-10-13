let num = 868
if (num % 3 == 0 && num % 5 == 0) {
    console.log("FissBuzz")

}
else if (num % 5 == 0) {
    console.log("Buzz ")

} else if (num % 3 == 0) {
    console.log("Fizz")

} else {
    console.log(num)
}