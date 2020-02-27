module.exports = function calculateHanoi(num, speed) {
         let turns = 2 ** num - 1,
    turnsPerSecond = speed / 3600,
           seconds = turns / turnsPerSecond
           
     return {
       turns   : turns,
       seconds : seconds
     }
}