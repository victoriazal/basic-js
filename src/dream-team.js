const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if(!Array.isArray(members) || members == null){
    return false
  }
  let check = []
  members.map(function(item){
    if (typeof(item) == 'string'){
      check += item
    }
  })
  if (check.length == 0) {
    return false
  }
  let newName = ''
  members.sort().map(function(item){ 
    if (typeof(item) == 'string'){
    newName += item.trim()[0]}
  })
  return newName.toUpperCase().split('').sort().join('')
}

module.exports = {
  createDreamTeam
};
