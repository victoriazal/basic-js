const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if(date == undefined){
    return ('Unable to determine the time of year!')
  }
  if(!(typeof(date.getUTCMonth) === 'function')){
    return ("Invalid date!")
  }
  let season =(date.getUTCMonth())
  let day = date.getDate()
  
  console.log(season)
  console.log(day)
  if (date == 'Invalid Date'){
    return ('Unable to determine the time of year!')
  }
  
  let answer = (season==1|| season ==12 || season ==0 || season == 11 && day>=3 ) ?  "winter" : (season >=2 && season<=4) ? "spring" : (season >=5 && season <=7 || season == 8 && day<=12) ? "summer" : (season>=9 && season<=10 || season ==11 && day<=15 || season == 8 && day>=13) ? "fall" : false;
  return answer
}

module.exports = {
  getSeason
}; 
