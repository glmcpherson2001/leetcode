/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const text = x.toString()
  const middleIndex = Math.floor(text.length/2)
  let firstHalf
  const lastHalf = text.substring(middleIndex)
  console.log(`middleIndex: ${middleIndex}`)
  if(text.length % 2 === 0){
    firstHalf = text.substring(0, middleIndex)

  }
  else{
    firstHalf = text.substring(0, middleIndex+1)

  }
  console.log(firstHalf, lastHalf)
  let reversedLastHalf = ''
  for(let i=lastHalf.length; i > 0; i--){
    //console.log(lastHalf.charAt(i))
    console.log(lastHalf.charAt(i-1))
    reversedLastHalf = reversedLastHalf + lastHalf.charAt(i-1)
  }
  if(firstHalf === reversedLastHalf){ 
    return true
  }
  else{
    return false
  }
};

console.log(isPalindrome(1211))