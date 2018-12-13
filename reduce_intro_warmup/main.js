
//add all elements together
function sum(arr){
  return arr.reduce(((acc, cur) => acc+cur),0)
}

//multiply all elements together
function multiply(arr){
  return arr.reduce(((acc,cur) => acc*cur),1)
}

//double each element using reduce
function double(arr){
  arr.reduce((acc,cur) => {
    arr[acc] = cur*2
    return acc+1
  }, 0)
  return arr
}

//count the letters
function countLetters(str){
  return [...str].reduce((acc,cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }, {})
}

module.exports = {
  sum: sum,
  multiply: multiply,
  double: double,
  countLetters: countLetters
}