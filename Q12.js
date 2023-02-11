var date = new Date();
console.log("dd-mm-yyyy => " + date.toLocaleDateString());

let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDay()

console.log(`${year}-${month}-${day}`);
console.log(`${day}-${month}-${year}`);
console.log(`${day}/${month}/${year}`);