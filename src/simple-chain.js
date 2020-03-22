const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(typeof(value) !== 'undefined' ? `~~( ${value} )` + '' : '~~( )'); 
    return this;
  },
  removeLink(position) {
    if ( isNaN(position) || typeof(position) !== 'number' ||  
        (typeof(position) === 'number' && 
          ((position > this.chain.length || position <= 0) ||
              position % 1 !== 0))) {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.res = this.chain.join('').slice(2);
    this.chain = [];
    return this.res;
  }
};

module.exports = chainMaker;
