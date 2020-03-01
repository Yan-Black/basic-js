module.exports = function createDreamTeam(arr) {

  if (!Array.isArray(arr)) return false
  
  return arr.filter(el => typeof el === 'string')
            .map(el => el = el.trim().slice(0,1).toUpperCase())
            .sort().join('')
};