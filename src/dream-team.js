const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [],
      str = [];
  for (let key in members) {
    arr.push (members[key]);
  }
  for (let i = 0; i<arr.length; i++) {
    if (typeof arr[i] === "string") {
    let ar = arr[i].split(" "). join("");
    str.push(ar[0].toUpperCase());
    }
  }
  str.sort();
if (str.length<2) {
  return false;
} else
  return str.join("")
}

// createDreamTeam('   William Alston ',
// ' Paul Benacerraf',
// '  Ross Cameron',
// '       Gilles Deleuze',
// '  Arda Denkel ',
// '  Michael Devitt',
// '  Kit Fine',
// ' Nelson Goodman',
// 'David Kolb',
// '   Saul Kripke',
// '  Trenton Merricks',
// '  Jay Rosenberg',
// );

module.exports = {
  createDreamTeam
};
