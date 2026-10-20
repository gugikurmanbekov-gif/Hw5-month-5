let password = 'Geroi_6767';

let bigWords = password.match(/[A-Z]/g);
let smallWords = password.match(/[a-z]/g);
let numbers = password.match(/[0-9]/g);
let specialChars = password.match(/[^A-Za-z0-9\s]/g); 
let noSpaces = password.match(/\s/g) === null; 

console.log(password.length > 8);
console.log(bigWords);
console.log(smallWords);
console.log(numbers);
console.log(specialChars);
console.log(noSpaces);
