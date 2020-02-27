const chainMaker = {

  chainLink: '',
   chainArr: [],
  
  getLength() {
    let chain = this.finishChain()

    return chain.length
  },

  addLink(value) {
    value === undefined ? this.chainLink = `(  )~~` : this.chainLink = `( ${value} )~~`

      this.chainArr.push(this.chainLink)

    return this
  },

  removeLink(position) {
    if(!position || Number(position) !== position)   {this.chainArr.splice(0); throw new Error}
    if(position <= 0 || !this.chainArr[position -1]) {this.chainArr.splice(0); throw new Error}

      this.chainArr.splice(position - 1,1)

    return this
  },

  reverseChain() {
    this.chainArr.reverse()

    return this
  },

  finishChain() {
    let chain = ''
        chain = this.chainArr.join('').slice(0, chain.length - 2)

      this.chainArr.splice(0)
      
    return chain
  }
};

module.exports = chainMaker;
