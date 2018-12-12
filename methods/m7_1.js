var helpers = require('../helpers/helpers.js');

module.exports.run = function(){
    const input = helpers.getInput("7_1");
    
    var entries = []; 
    var stepsCompleted = [];
    
    input.forEach(line =>{
            
        var stepNeeded = line.substring(5,6);
        var stepId = line.substring(36,37);
        if (!entries[stepId.charCodeAt()]){
            
            entries[stepId.charCodeAt()] = {
                id: stepId,
                stepsReq: [stepNeeded]
            }
        }else{
            entries[stepId.charCodeAt(0)].stepsReq.push(stepNeeded);
        };
       
        if (!entries[stepNeeded.charCodeAt()]){
            entries[stepNeeded.charCodeAt()] = {
                id: stepNeeded,
                stepsReq : []
            }
        };
        
    });
    entries.sort(function(a,b){
        return a.id.localeCompare(b.id);
    })
    entries = entries.filter(function (el) {
        return el != null;
    });

    while(entries.length !== stepsCompleted.length){
        var clean;
        for (x=0;x<entries.length;x++){
            var entry = entries[x];
            clean = true;
            if (!entry.done){
               
                entry.stepsReq.forEach(step =>{
                   
                    if (!stepsCompleted.includes(step)){
                         
                            clean = false;
                    }   
                })
            } else {
               
                clean = false;
            }
            if (clean){
               
                stepsCompleted.push(entry.id);
                entry.done = 1;
                x = entries.length;
            }    
        }
    }

    console.log('solution 4_1: ' + stepsCompleted.join(''));

    
}