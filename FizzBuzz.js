let number = 7

if (number % 3 === 0 && number % 5 === 0){
    console.log('FuzzBuzz')
} 
else if(number % 3 === 0 ){
    console.log('Fizz')
}
else if (number % 5 == 0){
    console.log('Buzz')
}
else{
    console.log(number)
}