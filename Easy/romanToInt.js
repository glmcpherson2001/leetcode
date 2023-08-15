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
    for(let i=0; i < s.length; i++){
        let currentCharVal = romanMap[s.charAt(i)];
        let nextCharVal = romanMap[s.charAt(i+1)]
        if(nextCharVal > currentCharVal){
            count += (nextCharVal - currentCharVal)
            i++
        }else{
            count += currentCharVal
        }
    }
    return count
};
