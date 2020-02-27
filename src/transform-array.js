module.exports = function transform(arr) {

    let dsNext = '--discard-next',
        dsPrev = '--discard-prev',
        dbNext = '--double-next',
        dbPrev = '--double-prev'

if(!Array.isArray(arr)) throw new Error

for(let i = 0; i < arr.length; i++){
    if (arr[i] == dsNext) {
             if(arr[i+2] == dbPrev)      {arr.splice(i,3,arr[i+1]); i=i-2}
        else if(arr.length-1 < i + 1)    {arr.splice(i,2);  i=i-1}
        else if(arr[i+1])                {arr.splice(i,2);  i=i-1}
        else if(Number(arr[i+1] == 0))   {arr.splice(i,2);  i=i-1}
        else if(isNaN(arr[i+1]))         {arr.splice(i,2);  i=i-1}
    }
    if (arr[i] == dsPrev) {
             if(Number(arr[i-1] == 0))   {arr.splice(i-1,2);i=i-2}
        else if(arr[0] == dsPrev)        {arr.splice(i,1);  i=i-1}
        else if(arr[i-1])                {arr.splice(i-1,2);i=i-2}
        else if(isNaN(arr[i-1]))         {arr.splice(i-1,2);i=i-2}
    }
    if (arr[i] == dbNext) {
             if(Number(arr[i+1] == 0))    arr.splice(i,1,arr[i+1])
        else if(arr.length-1 < i + 1)     arr.splice(i,1)
        else if(isNaN(arr[i+1]))          arr.splice(i,1,arr[i+1])
        else if(arr[i+1])                 arr.splice(i,1,arr[i+1])
    }
    if (arr[i] == dbPrev) {
             if(Number(arr[i-1] == 0))    arr.splice(i,1,arr[i-1])
        else if(arr[0] == dbPrev)        {arr.splice(i,1); i=i-1}
        else if(isNaN(arr[i-1]))          arr.splice(i,1,arr[i-1])
        else if(arr[i-1])                 arr.splice(i,1,arr[i-1])
      }
  }

  return arr     
};
