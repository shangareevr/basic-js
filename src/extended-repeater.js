const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(options.repeatTimes) {
    options.repeatTimes = options.repeatTimes;
  } else {
    options.repeatTimes = 1;
  }
  if(options.separator) {
    options.separator = String(options.separator);
  } else {
    options.separator = "+";
  }
  if(options.addition !==undefined) {
    options.addition = String(options.addition);
  } else {
    options.addition = "";
  }
  if(options.additionRepeatTimes) {
    options.additionRepeatTimes = options.additionRepeatTimes;
  } else {
    options.additionRepeatTimes = 1;
  }
  if(options.additionSeparator) {
    options.additionSeparator = String(options.additionSeparator);
  } else {
    options.additionSeparator = "|";
  }
  let addStr = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
      addStr = addStr.slice(0, addStr.length - options.additionSeparator.length);
  let res = (str+addStr+options.separator).repeat(options.repeatTimes);
  return res.slice(0, res.length - options.separator.length)
  

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
