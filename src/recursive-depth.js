module.exports = class DepthCalculator {
    constructor(){
       this.counter = 1;
    }
    calculateDepth(arr) {        
        if(arr.some(val => val instanceof Array)){
            this.calculateDepth(arr.flat());
            this.counter++
        } 
        else this.counter = 1
        return this.counter 
    }
};
