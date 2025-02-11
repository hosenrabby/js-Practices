//Random Number===========================================================
//function randomNumb(max, min){
//return Math.floor(Math.random() * (max - min +1)) + min}

//console.log(randomNumb(6, 1))


//Find Vowels==============================================================

// const vowels = ["a","e","i","o","u","A","E","I","O","U",];

// function countVowels(text){
//     let count = 0;
//     const alphabets = Array.from(text)

//     alphabets.forEach(function(value, index, array){
//         if (vowels.includes(value)){
//             count++;
//         }
//     });
//     return count;
// }

// console.log(countVowels("I love Java Script"));

// Duplicate Numbers =======================================================
// const numbers = [1,3,6,9,6,4,7,8,4,7,2,7,3,9];

// const dupNumb = numbers.filter(function(value,index,array){
//     return array.indexOf(value) !== index //same as like next line
//     return numbers.indexOf(value) !== index 
// });
// console.log(dupNumb);

// const cars = {
//         Toyota: "1300cc",
//         Volvo: "1600cc",
//         Mercides: "2300cc",
//         Lexus: "3300cc",
// }

// const Cars = ["Volvo","Toyota","Mercides","Porsce","Boogatti","Lexus"];

// Cars.forEach(function( val , ind){
//     console.log(ind + "---" + val);
// })


// for(let x of Cars){
//     console.log(x);
// }

//Regular exprassion =======================================================

//Match Bd Mobile number like     +88-01712345678
let regexBdNumb =/(\+88-)?01[1-9]\d{8}/gi;
let expr = 'I love bangladesh +88-01712345678';

//Match url like https://www.tahmidtuhin.com
let regexDomain = /^(https?:\/\/)www\.\w+\.\w{2,4}/g;
let expr1 = 'https://www.tahmidtuhin.com';

//Match url like https://www.w3schools.com/js/js_regexp.asp
let regexUrl =/^(https?:\/\/)www\.([\w-_\$#*!]+)\.\w{2,4}\/([\w=&@-_/.?]+)?\/?$/gi;
let expr2 = 'https://www.w3schools.com/js/js_regexp.asp';
let expr3 = 'https://www.youtube.com/watch?v=csvbImrFx2E';

//Match email like tahmid.tuhin.3@gmail.com
let regexEmail = /^([\w\_*&$#.]+)@\w{3,6}\.\w{2,4}/g;
let expr4 = 'tahmid.tuhin.3@gmail.com';


let res = expr.match(regexBdNumb);
let res1 = expr1.match(regexDomain);
let res2 = expr2.match(regexUrl);
let res3 = expr2.match(regexUrl);
let res4 = expr4.match(regexEmail);

console.log(res, res1, res2,res3,res4);