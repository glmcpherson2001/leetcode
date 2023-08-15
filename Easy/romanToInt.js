/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let count = 0
    let nextCharVal
    for(let i=0; i < s.length; i++){
        let currentCharVal = romanMap[s.charAt(i)];
        i !== s.length ? nextCharVal = romanMap[s.charAt(i+1)]: null
        if(nextCharVal > currentCharVal){
            count += (nextCharVal - currentCharVal)
            i++
        }else{
            count += currentCharVal
        }
    }
    return count
};

console.log(romanToInt('IX'))