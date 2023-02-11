 let sumOfEven = 0;
let sumOfOdd = 0;

for( let i = 1; i <= 100; i++){
    if(i % 2 == 0 ){
       sumOfEven += i
    }else{
        sumOfOdd += i
    }
}

console.log(sumOfEven);
console.log(sumOfOdd);