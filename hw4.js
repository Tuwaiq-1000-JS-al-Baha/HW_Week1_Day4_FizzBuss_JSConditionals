let number = 7
if (number % 3 == 0) { console.log("Fuzz") }
if (number % 5 == 0) { console.log("Buzz") }
if (number % 3 == 0 && number % 5 == 0) { console.log("FizzBuzz") }
else if ((number % 3 !== 0 && number % 5 !== 0)) { console.log(number) }