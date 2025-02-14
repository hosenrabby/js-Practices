// Take four parameters. Multiply the four numbers and then return the result
// function multiplication(num1, num2, num3, num4) {
//     return totalMultiple = num1*num2*num3*num4;
// }
// console.log(multiplication(10,10,10,10));

// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function oddEven(number) {
//     let oddMultiply = null;
//     let evenDivide = null;
//     if (number % 2 == 1) {
//         return oddMultiply = number * 2; 
//     } else 
//         return evenDivide = number/  2;
// }

// console.log('The result is : ',oddEven(4));

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function makAvg(numbers) {
//     let avgSum = null;
//     for (let i = 0; i < numbers.length; i++) {
//         avgSum +=numbers[i]; 
//     } return parseInt(avgSum / numbers.length);
// }

// const avgItems = [50, 10, 45, 40.44, 52.54, 44, 100];
// console.log('Avarage Intigers is : ' , makAvg(avgItems));

// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function count_zero(binStr) {
//     let countZero = null;
//     for (let i = 0; i < binStr.length; i++) {
//         if (binStr[i] == 0) {
//             countZero++;
//         };
        
//     } return countZero;
// }

// binStr = '110010010';
// console.log(count_zero(binStr));

// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

// function oddEven(numbers) {
//     let multiply = 0;
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             console.log(number);
//             multiply += number;
//         }
//         else {
//             multiply *= number;
//         }
//     }
//     return multiply;
// }

// const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddEvenNum = oddEven(numbs);
// console.log("Odd Number is:", oddEvenNum);