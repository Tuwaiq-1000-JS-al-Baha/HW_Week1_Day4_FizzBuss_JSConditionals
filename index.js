let FBuFunction = (prompt("Enter a number that is multiples of 5 and 3"));
let FB =FBuFunction%3==0 &&FBuFunction%5==0;
let F = FBuFunction%3==0;
let B =FBuFunction%5==0;

     if(FB ){
       console.log("FizzBuzz")
    }
     else if(F){
        console.log("Buzz")
    
    }
    else if (B){
        console.log("Buzz")
    }
    
    else{
        console.log(FBuFunction)
    }

/*if(FBuFunction%3==0 &&FBuFunction%5==0 ){
console.log("FizzBuzz")
}
else if(FBuFunction%3==0){
    console.log("Fizz")

}
else if (FBuFunction%5==0){
    console.log("Buzz")
}
else{
    console.log(FBuFunction)
}*/
