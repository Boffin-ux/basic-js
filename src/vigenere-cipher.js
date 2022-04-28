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
  directMachine = true;
  constructor(isDirect) {
    if (arguments.length === 0) {
      this.directMachine = true;
    } else {
      this.directMachine = isDirect;
    }
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.squareVigenere = [];
    this.key = '';
    this.string = '';
  }
  tableVigenere() {
    for (var i = 0; i < this.alphabet.length; i++) {
      this.squareVigenere[i] = [...this.alphabet.slice(i), ...this.alphabet.slice(0, i)];
    }
  }
  encrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    } else {
      this.tableVigenere();
      this.key = key.toUpperCase();
      this.string = string.toUpperCase();
      let result = "";
      let countKey = 0;
      for (let i = 0; i < this.string.length; i++) {
        if (this.alphabet.indexOf(this.string[i]) !== -1 && this.key[countKey]) {
          result += this.squareVigenere[this.alphabet.indexOf(this.string[i])][this.alphabet.indexOf(this.key[countKey])];
          countKey += 1;
        } else {
          result += this.string[i];
        }
        if (countKey >= this.key.length) {
          countKey = 0;
        }
      }
      if (!this.directMachine) {
        return result.split('').reverse().join('');
      } else {
        return result;
      }
    }
  }
  decrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    } else {
      this.tableVigenere();
      this.key = key.toUpperCase();
      this.string = string.toUpperCase();
      let result = "";
      let countKey = 0;
      for (let i = 0; i < this.string.length; i++) {
        let interim = this.squareVigenere[this.alphabet.indexOf(this.key[countKey])].indexOf(this.string[i]);
        if (interim !== -1 && this.key[countKey]) {
          let row = this.alphabet.indexOf(this.key[countKey]);
          let column = this.squareVigenere[row].indexOf(this.string[i]);
          result += this.alphabet[column];
          countKey += 1;
        } else {
          result += this.string[i];
        }
        if (countKey >= this.key.length) {
          countKey = 0;
        }
      }
      if (!this.directMachine) {
        return result.split('').reverse().join('');
      } else {
        return result;
      }
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
