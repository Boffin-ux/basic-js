const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 0;
  }
  calculateDepth(arr) {
    this.depth = 0;

    if (typeof arr !== 'object') {
      return this.depth;
    } else if (arr.length === 0) {
      return ++this.depth;
    } else {
      const check = arr.some(obj => typeof obj === 'object');
      if (check) {
        this.calculateDepth(arr.flat());
        ++this.depth;
      } else {
        ++this.depth;
      }
    }
    return this.depth;
  }
}

module.exports = {
  DepthCalculator
};
