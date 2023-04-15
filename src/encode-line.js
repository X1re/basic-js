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
function encodeLine(str) {
  let substring = '';
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    if (!substring || substring.includes(str[i])) {
      substring += str[i];
    } else {
      if (substring.length > 1) {
        answer += `${substring.length}${substring.charAt(0)}`;
      } else {
        answer += substring;
      }
      substring = str[i];
    }
  }
  if (substring.length > 1) {
    answer += `${substring.length}${substring.charAt(0)}`;
  } else {
    answer += substring;
  }
  return answer;
}
encodeLine('abbcca');
module.exports = {
  encodeLine,
};
