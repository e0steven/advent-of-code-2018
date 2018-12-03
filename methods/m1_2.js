var helpers = require('../helpers/helpers.js');

module.exports.run = function(){
    const input = helpers.getInput("1_1");
    var current_freq = 0;
    var results = new Set();
    var notFound = true;
  
    results.add(parseInt(current_freq));
    
    function iterate(){
        input.some(input_freq =>{
          current_freq = parseInt(current_freq) + parseInt(input_freq);
          
          check_result = results.has(current_freq);
          if (check_result){
            console.log('solution 1_2:' + current_freq);
            notFound = false;
            return true;
          }
        
        results.add(parseInt(current_freq));
      })
    }
  
    while(notFound){
      iterate();
    }
  
}