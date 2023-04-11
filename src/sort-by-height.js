const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortArr = [];
  for (let i = 0; i <arr.length; i++) {
    if (arr[i] !=-1){
      sortArr.push(arr[i])
      arr[i] = 0;
    }
  }
  function compareNumbers(a, b) {
    return a-b
  }
  sortArr.sort(compareNumbers);
  for (let j = 0; j<sortArr.length; j++) {
    for (let a = 0; a<arr.length; a++) {
      if (arr[a]==0) {
        arr[a] = sortArr[j];
        break;
      }
    }
  }
  return arr
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
