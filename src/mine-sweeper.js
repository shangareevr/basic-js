const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    let str = [];
    for (let j = 0; j <matrix[0].length; j++) {
      // над текущей строкой
      // слева
      if (i > 0 && j > 0 && matrix[i - 1][j - 1]) count++;
      // над текущим элементом
      if (i > 0 && matrix[i - 1][j]) count++;
      // справа
      if (i > 0 && j+1 < matrix[0].length && matrix[i - 1][j + 1]) count++;
      // текущая строка
      // слева
      if (j > 0 && matrix[i][j - 1]) count++;
      // справа
      if (j+1 < matrix[0].length && matrix[i][j + 1]) count++;
      // строка ниже
      // слева
      if (i+1 < matrix.length && j > 0 && matrix[i + 1][j - 1]) count++;
      // под искомым элеметом
      if (i+1 < matrix.length && matrix[i + 1][j]) count++;
      // справа
      if (i+1 < matrix.length && j < matrix[0].length - 1 && matrix[i + 1][j + 1]) count++;
      
      
      
      str.push(count)
      count = 0;
    }
    
    res.push(str)
  }
  
  return res
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};