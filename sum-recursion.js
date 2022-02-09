
// Sum of numbers using Recursion.


// let sum = 0;
// for(let i = 5; i >= 1; i--){
//     console.log(i);
//     sum = sum + i;
// }
// console.log(sum);

function sum(i){
    console.log(i);
    if(i == 1){
        return 1;
    }
    return i * sum(i - 1);
}
console.log(sum(7));
