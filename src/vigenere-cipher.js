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
  constructor(algorithm = true) {
    this.algorithm = algorithm
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error ("Incorrect arguments!");
    }

    const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let res = [];
    let charNum = 0;
    for (let i = 0; i < message.length; i++) {
      const keyChar = key[charNum % key.length];
      const shift = alphabet.indexOf(keyChar);
      if (alphabet.includes(message[i])) {
        let index = (alphabet.indexOf(message[i]) + shift) % alphabet.length;
        res.push(alphabet[index]);
        charNum++;
      } else {
        res.push(message[i]);
      }
    }
    return this.algorithm ? res.join('') : res.reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error ("Incorrect arguments!");
    }

    const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    key = key.toUpperCase();
    key = Array.from(key)
      .map((char) => {
        let shift = alphabet.indexOf(char);
        return alphabet[(alphabet.length - shift) % alphabet.length];
      })
      .join('');

    return this.encrypt(message, key);
  }
}

module.exports = {
  VigenereCipheringMachine,
};