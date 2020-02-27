module.exports = function getSeason(date) {
       if (!date) return 'Unable to determine the time of year!'
  else if (!date.getTime()) throw new Error

  let season = new Date(date).toString().split(' ')

     if (season[1] == 'Dec' || season[1] == 'Jan' || season[1] == 'Feb') return 'winter'
else if (season[1] == 'Mar' || season[1] == 'Apr' || season[1] == 'May') return 'spring'
else if (season[1] == 'Jun' || season[1] == 'Jul' || season[1] == 'Aug') return 'summer'
else if (season[1] == 'Sep' || season[1] == 'Oct' || season[1] == 'Nov') return 'autumn'
};
