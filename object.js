

// const student1 = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student1.physics.author);



const student = {
    name: 'Hosen Rabby',
    age: 21,
    city: 'Dhaka',
    departmet: 'CSE',
    isStudent: true
};
// let count = null;
// for (let stData in student) {
//     // console.log(student[stData]);
//     if (stData) {
//         count++
//     }
// } console.log(count);

for (let sData in student) {
   if (sData) {
        // console.log(sData + ' : ' + student[sData] + ' | ' + typeof(student[sData]));
        console.log(`${sData}  :  ${student[sData]}  |  ${typeof(student[sData])}`);
   }
}

