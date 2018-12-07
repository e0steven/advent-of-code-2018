var helpers = require('../helpers/helpers.js');

module.exports.run = function(){
    const input = helpers.getInput("5_1");
    
    var stringInput = input[0];
    
    
    do {
        var clean = true;
        var cleanString = '';
        for (var i = 0; i < stringInput.length; i++) {
            var char = stringInput.charAt(i);
            var next = stringInput.charAt(i+1);
            if(char.toUpperCase() === next.toUpperCase() && Math.abs(char.charCodeAt(0)-next.charCodeAt(0)) === 32 ){
                
                i = i+1;
                clean = false;
            }else{
                cleanString += char;
            }
        }
        stringInput = cleanString;
    } while (!clean);

    console.log('solution 5_1: ' + stringInput.length); 
    
}