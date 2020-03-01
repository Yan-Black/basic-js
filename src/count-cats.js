module.exports = function countCats(arr) {

   let count = 0;

      arr.forEach(el => el.forEach(c => c == '^^' ? count++ : count))

   return count 
};
