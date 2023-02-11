
//1
let string = '';

for(let i=1;i<=3;i++){
    for(let j=0; j<i; j++){
        string+="*";
    }
    
    string+='\n';

}

console.log(string);

//2


let string1 = '';

for(let i=1;i<=3;i++){
    for(let j=0; j<3; j++){
        string1 +="*";
    }
    
    string1 +='\n';

}

console.log(string1);

//3

let n = 5;
let string3 = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string3 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string3 += "*";
  }
  string3 += "\n";
}
console.log(string3);