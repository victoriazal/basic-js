const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  if( typeof(sampleActivity) !='number' && !isNaN(sampleActivity) && Number(sampleActivity) > 0 && Number(sampleActivity)!= 0 && sampleActivity != '' && typeof(sampleActivity) != 'object'){
    let numAnswer = Math.ceil((Math.log(15/Number(sampleActivity)))/ (0.693/5730))
    answer = numAnswer
    if(answer <0 || typeof(answer) != "number" || !answer){
      answer = false
    }
    }
  else {
    answer = false
  }
  return answer
}

module.exports = {
  dateSample
};
