const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  
  if(!str || str >= MODERN_ACTIVITY || str <= 0 || typeof str != 'string' || !parseInt(str)) return false

  let k = Math.log(2).toFixed(3) / HALF_LIFE_PERIOD
      n = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(str)) / k)

      return n
};
