const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine,
};

// remove line with error and write your code here
// const arr = [...str];
// const answ = '';
// for (let i = 0; i < arr.length; i++) {
//   let num = 0;
//   const element = array[i];
//   if (arr[i] !== arr[i + 1]) {
//     answ += arr[i];
//   } else {
//   }
// }
// return answ;
