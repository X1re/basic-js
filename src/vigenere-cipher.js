const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  square = [];
  keyUp = '';
  strUp = '';

  createSquare(str, key) {
    this.keyUp = key.toUpperCase();
    this.strUp = str.toUpperCase();
    this.alphabet.forEach(
      (_, i) =>
        (this.square[i] = this.alphabet
          .slice(i)
          .concat(this.alphabet.slice(0, i)))
    );
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    let cryptKey = [];
    let count = 0;
    let strIndex = 0;

    this.createSquare(str, key);

    while (cryptKey.length !== this.strUp.length) {
      if (count === this.keyUp.length) count = 0;

      if (!this.strUp[strIndex].match(/[A-Z]/)) {
        cryptKey.push(this.strUp[strIndex]);
      } else {
        cryptKey.push(this.keyUp[count]);
        count++;
      }

      strIndex++;
    }

    let resultStr = [];
    let firstIndex;
    let secondIndex;

    cryptKey.forEach((el, index) => {
      firstIndex = this.square[0].indexOf(el);
      this.square.forEach((item, i) => {
        if (item[0] === this.strUp[index]) secondIndex = i;
      });

      resultStr.push(
        !this.strUp[index].match(/[A-Z]/)
          ? el
          : this.square[firstIndex][secondIndex]
      );
    });

    return this.reverse ? resultStr.join('') : resultStr.reverse().join('');
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    let cryptKey = [];
    let count = 0;
    let strIndex = 0;

    this.createSquare(str, key);

    while (cryptKey.length !== this.strUp.length) {
      if (count === this.keyUp.length) count = 0;

      if (!this.strUp[strIndex].match(/[A-Z]/)) {
        cryptKey.push(this.strUp[strIndex]);
      } else {
        cryptKey.push(this.keyUp[count]);
        count++;
      }

      strIndex++;
    }

    let resultStr = [];
    let secondIndex;

    cryptKey.forEach((el, index) => {
      this.square.forEach((item, i) => {
        if (item[0] === el) secondIndex = item.indexOf(this.strUp[index]);
      });

      resultStr.push(
        !this.strUp[index].match(/[A-Z]/) ? el : this.square[0][secondIndex]
      );
    });

    return this.reverse ? resultStr.join('') : resultStr.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
