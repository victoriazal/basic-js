const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  console.log(typeof(arr[0]))
  let index 
  arr.map(item => {
    if(typeof(item) == 'string'){
      console.log(item)
      index = arr.indexOf(item)
    }
  })
  
  let newArr = arr.sort().splice(1)
  let rule = arr.sort().slice(0,1).toString()
  console.log(rule)
  if(rule == '--double-next'){
    newArr.splice(index,0,newArr[index])
  }
  else if(rule == '--double-prev'){
    newArr.splice(index-1,0,newArr[index-1])
  }
  else if(rule == '--discard-prev'){
    newArr.splice(index-1,1)
  }
  else if(rule == '--discard-next'){
    newArr.splice(index,1)
  }
  return newArr
  }

module.exports = {
  transform
};
