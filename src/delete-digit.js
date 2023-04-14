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
  let biggest = 0;
  const arr = n.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    const tempArr = [...arr];
    tempArr.splice(i, 1);
    const checkNum = Number(tempArr.join(''));
    if (checkNum > biggest) {
      biggest = checkNum;
    }
  }
  return biggest;
}

module.exports = {
  deleteDigit,
};
