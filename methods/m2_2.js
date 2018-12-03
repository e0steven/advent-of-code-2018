var helpers = require('../helpers/helpers.js');

module.exports.run = function(){
    const input = helpers.getInput("2_1");
    var similar = [];
    var output = '';

    stringArray = input.map(line =>{
      return line.split("");
    });
   

    for (row = 0; row< stringArray.length;row++){
      
      for (offset = 0; offset < stringArray.length;offset++){
        var differences = 0;
    
        for (character = 0; character < stringArray[row].length; character++){
          if (stringArray[row+offset] && stringArray[row+offset][character]!==stringArray[row][character]){
            differences += 1;
          }
        }
        if (differences === 1){
          similar.push(input[row]);
          similar.push(input[row+offset]);
        }
      }
    }
    
    for (character = 0; character < similar[0].length; character++){
      if (similar[0][character] === similar[1][character]){
        output += similar[0][character];
      }
    }

    console.log('solution 2_2:' + output);
    
}