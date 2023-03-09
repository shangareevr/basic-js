const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max =0,
      str = n.toString();
  for (let i = 0; i<str.length; i++) {
  let arr = str.split("");
    arr.splice(i,1);
    let num = arr.join("");
    if (num>max) {
      max = num
    }
  }
  return +max;
}

module.exports = {
  deleteDigit
};
