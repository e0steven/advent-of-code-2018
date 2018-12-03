var helpers = require('../helpers/helpers.js');

module.exports.run = function(){
    const input = helpers.getInput("2_1");
    var twos = 0;
    var threes = 0;

    input.forEach(line =>{
      var counts = {};
      var lineArray = line.split("");
      
      lineArray.forEach(char =>{
        counts[char] = (counts[char] || 0)+1;
      });
      valueArray = Object.keys(counts).map((k) => counts[k]);

      if (valueArray.indexOf(2) !== -1) twos+=1;
      if (valueArray.indexOf(3) !== -1) threes+=1;
      
    })
    var checksum = twos * threes;
    console.log('solution 2_1:' + checksum);
    
}