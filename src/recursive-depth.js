module.exports = class DepthCalculator {
    calculateDepth(arr, depth=0) {
        if (!Array.isArray(arr)) return 0;
        else {
            if (!arr.length) return 1;
            else {
                for (let i = 0; i < arr.length; i++ ) {
                    if (Array.isArray(arr[i])) return 1 + this.calculateDepth(arr[i], ++depth);
                };

            }
        }
                    // return this.calculateDepth(arr[i], depth++).reduce(c);
    } 
};