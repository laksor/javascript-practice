
// factorial using for loop recursion.
// let factorial = 1;
// for(let i = 7; i >= 1; i--){
//     factorial = factorial * i;
    
// }
// console.log(factorial);

// function

function fact(i){
    if(i == 1){
        return 1;
    }
    return i * fact(--i);
}
console.log('7 factorial is: ',fact(7));