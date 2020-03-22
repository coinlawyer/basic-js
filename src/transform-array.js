module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error;
    let flags = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
    let resArr = [];
    if (arr.length === 0) return [];
    if (arr.length < 2 && flags.some(el => el === arr[0])) return []; 
        
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === flags[0]) {
            if (i < arr.length-2) i++;
        } 

        else if (arr[i] === flags[2]) {
            if(i < arr.length-2) resArr.push(arr[i+1]);
        }

        else if (arr[i] === flags[1]) {
            if (i > 0) resArr.pop();
        }

        else if (arr[i] === flags[3]) {
            if (i > 0) resArr.push(arr[i-1]);
        } 
        else resArr.push(arr[i]); 
    }
    return resArr;
};




