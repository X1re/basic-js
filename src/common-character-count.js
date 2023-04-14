const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const length = arr1.length > arr2.length ? arr1.length : arr2.length;
  let common = 0;
  for (i = 0; i < length; i++) {
    if (arr1.includes(arr2[i])) {
      common++;
      delete arr1[arr1.indexOf(arr2[i])];
    }
  }
  return common;
}

module.exports = {
  getCommonCharacterCount,
};
