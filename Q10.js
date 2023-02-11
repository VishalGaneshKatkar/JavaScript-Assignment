//     - 4 > 3    // true
//     - 4 >= 3   // true
//     - 4 < 3    // false
//     - 4 <= 3   // false
//     - 4 == 4   // true
//     - 4 === 4  // true
//     - 4 != 4   // false
//     - 4 !== 4  // false
//     - 4 != '4' // false
//     - 4 == '4' // true
//     - 4 === '4' // false

const python = "python";
const jargon = "jargon";

console.log(python.length);  // Output: 6
console.log(jargon.length);  // Output: 6

if( python.length != jargon.length){
    console.log("The lengths of the words are not equal");
}
else{
    console.log("it is a falsy comparison statement.")
}