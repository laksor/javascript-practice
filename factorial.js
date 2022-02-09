
// factorial of a number using for loop.
// var factorial = 1;
// for(var i = 1; i <= 7; i++){
//     factorial = factorial * i;
    
// }
// console.log(factorial);


//  using function

function getFactorial(number){
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
var firstFactorial = getFactorial(7);
console.log(firstFactorial);

