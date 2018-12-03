var helpers = require('../helpers/helpers.js');

module.exports.run = function () {
    const input = helpers.getInput("1_1");
    var total = input.reduce((total,elem) => parseInt(total) + parseInt(elem));
  
    console.log('solution 1_1:' + total);
  }