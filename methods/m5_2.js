var helpers = require('../helpers/helpers.js');

module.exports.run = function(){
    const input = helpers.getInput("5_1");
    
    var stringInput = input[0];
    var minLength = 999999;
    for (x=65;x<=90;x++){
        var workingInput = stringInput.split(String.fromCharCode(x)).join('');
        workingInput = workingInput.split(String.fromCharCode(x+32)).join('');
        
        do {
            var clean = true;
            var cleanString = '';
            for (var i = 0; i < workingInput.length; i++) {
                var char = workingInput.charAt(i);
                var next = workingInput.charAt(i+1);
                if(char.toUpperCase() === next.toUpperCase() && Math.abs(char.charCodeAt(0)-next.charCodeAt(0)) === 32 ){
                    
                    i = i+1;
                    clean = false;
                }else{
                    cleanString += char;
                }
            }
            workingInput = cleanString;
        } while (!clean);
        
        if (workingInput.length < minLength){
            minLength = workingInput.length;
        }
    }
    console.log('solution 5_2: ' + minLength); 
    
}