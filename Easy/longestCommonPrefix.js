/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    for(let letterInd = 0; letterInd < strs[0].length; letterInd++){
        for(let wordInd = 0; wordInd < strs.length; wordInd++){
            if(wordInd === strs.length-1) continue
            if(strs[wordInd][letterInd] !== strs[wordInd+1][letterInd]) return strs[0].substring(0, letterInd)
        }
    }
    return strs[0]
};
// console.log(longestCommonPrefix([""]))
// console.log(longestCommonPrefix(['a', 'a']))
console.log(longestCommonPrefix(["flower","flow","flight"]))