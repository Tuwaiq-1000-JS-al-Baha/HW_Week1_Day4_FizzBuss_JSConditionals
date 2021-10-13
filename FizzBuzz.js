let Num = Number(prompt('Enter a number'));

if (Num % 3 == 0 && Num % 5 == 0) {
    console.log('FizzBuzz');
}
else if (Num % 5 == 0) {
    console.log('Buzz');
}
else if (Num % 3 == 0) {
    console.log('Fizz')
}
else {
    console.log('The number ' + Num)
}

// number: 3  => Output : Fizz
// number: 5  => Output : Buzz
// number: 15 => Output : FizzBuzz
// number: 7  => Output : 7