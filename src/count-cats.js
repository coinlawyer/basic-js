// module.exports = function countCats(backyard) {
//   let number = 0;
//   for (let i = 0; i < backyard.length; i++) {
//     for (let j = 0; j < backyard[i].length; j++) {
//       if (typeof(backyard[i][j]) !== 'string') continue;
//       if (backyard[i][j] === "^^") {
//         number++;
//       }
//     }
//   }
//   return number;
// }; // ~70-96ms - not gooed enought

// module.exports = function countCats(backyard) {
//   let number = 0;
//   let convertedArray = backyard.join().split(',');
//   let length=convertedArray.length;
//   for (let i = 0; i < length; i++) {
//       if (convertedArray[i] === "^^") {
//         number++;
//     }
//   }
//   return number;
// }; // ~85ms - not good enought

// module.exports = function countCats(backyard) {
//   return backyard.join().split(',').filter(el => el === '^^').length;
// }  // ~125ms - bad

module.exports = function countCats(backyard) {
  return backyard.join().split(' ^^').join().split('^^ ').join().split('^^').length-1;
}  // ~ 83-101ms - I like it, but still loop is faster)

// module.exports = function countCats(backyard) {
//   return backyard.join().split(/^\^\^,/).length-1;
// }  // try to make regExp!

// module.exports = function countCats(backyard) {
//   let sum = 0;
//   backyard.join().split(',').forEach(el => {
//     if (typeof(el) === 'string') {
//       if (el === '^^') {sum++;}
//     };
//   });
//   return sum;
// }  // ~120-90ms - bad