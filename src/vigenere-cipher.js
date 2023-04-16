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
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
class VigenereCipheringMachine {
  constructor(algorithm = true) {
    this.algorithm = algorithm
    return this.algorithm
  }
  encrypt(message, key) {
    // проверка входных данный
    if (!message || !key) {
      throw new Error ("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let charNum = 0;
    let res = [];
    // перебираем символы из входных данных
    for (let i = 0; i <message.length; i++) {
      // проверяем есть ли в алфавите этот символ
      if (alphabet.includes(message[i])) {
        // если есть надо кодировать
        let index = ((alphabet.indexOf(message[i])+alphabet.indexOf(key[charNum]))%26);
        res.push(alphabet[index]);
        charNum++;
        if (charNum === (key.length)) {
          charNum = 0;
        }
      } else {
        res.push(message[i])
      }
      
    }
    return res.join('');
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error ("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let charNum = 0;
    let res = [];
    if (!this.algorithm) {
      message = message.split('')
    }
    for (let i = 0; i <message.length; i++) {
      // проверяем есть ли в алфавите этот символ
      if (alphabet.includes(message[i])) {
        // если есть надо кодировать
        let index = ((alphabet.indexOf(message[i])-alphabet.indexOf(key[charNum])+26)%26);
        charNum++;
        res.push(alphabet[index]);
        
        if (charNum === (key.length)) {
          charNum = 0;
        }
        
      } else {
        res.push(message[i])
      }
      
    }
    return res.join('');
  }
}
module.exports = {
  VigenereCipheringMachine
};