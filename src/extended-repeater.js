module.exports = function repeater(str, {repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|'}) {

    let modString = str,
          sepLeng = additionSeparator.length

    if(!repeatTimes && addition) return str + addition

    for(let i = 1; i <= additionRepeatTimes; i++) {
      modString += addition + additionSeparator
    }

    if(additionRepeatTimes) modString = modString.slice(0, (modString.length - sepLeng))

    let finString = modString

    for(let i = 1; i < repeatTimes; i++) {
      modString += separator + finString
    }

    return modString

    
};
  