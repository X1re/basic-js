const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const map = new Map();
  const concatArr = [];
  for (let domain of domains) {
    const reversedDomain = domain.split('.').reverse();
    reversedDomain.map((el, i) => {
      let entry = `.${el}`;
      if (i === 0) {
        if (map.has(entry)) {
          map.set(entry, map.get(entry) + 1);
        } else {
          map.set(entry, 1);
          if (!concatArr.includes(entry)) {
            concatArr.push(entry);
          }
        }
      } else {
        if (!concatArr.includes(entry)) {
          concatArr.push(entry);
        }
        const joined = concatArr.join('');
        if (map.has(joined)) {
          map.set(joined, map.get(joined) + 1);
        } else {
          map.set(joined, 1);
        }
      }
    });
  }
  return Object.fromEntries(map);
}

module.exports = {
  getDNSStats,
};
