module.exports = class DepthCalculator {
    calculateDepth(arr, n=0, tempArr=[]) {
      n += 1;
      tempArr.push(n);
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          this.calculateDepth(arr[i], n, tempArr);
        }
      }
      return Math.max(...tempArr);
    }
};


// function calculateDepth(arr, n=0, tempArr=[]) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       n += 1;
//       console.log(n);
//       tempArr.push(n);
//       calculateDepth(arr[i], n, tempArr);
//     }
//   }
//   return Math.max(...tempArr);
// }