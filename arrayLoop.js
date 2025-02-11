
//Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// colors.forEach(function(value, index, array) {
//     console.log(value);
// })
// colors.forEach((value, index, array) => {
//     console.log(value);
// })



// for (let i = colors.length -1; i >= 0; i--) {
//     let rev = colors[i];
//     console.log(rev);
// }
// let newRevColr = [];
// for (let i = 0; i < colors.length; i++) {
//     let rev = colors[i];
//     newRevColr.unshift(rev);
//     console.log(rev)
// }

// newRevColr.unshift('white');
// console.log(newRevColr);

//Use a for...of loop to concatenate all the elements of an array into a single string.

// let convStr = ['Tom', 'Tim', 'Tin', 'Tik'];
// let newStr = '';
// for (let i = 0; i < convStr.length; i++) {
    
//     let arElement = convStr[i];
//     newStr = newStr.concat(arElement);
//     // console.log(newStr);    
// }
// console.log(newStr)

//Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// let str = 'I am a hard working person';
// let strAr = str.split(' ')
// let newStr = '';
// console.log(strAr)
// for (let i = strAr.length - 1; i >= 0; i--) {
//     newStr = newStr.concat(strAr[i] + ' ');
// }
// console.log(newStr);