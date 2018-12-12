var helpers = require('../helpers/helpers.js');

module.exports.run = function(){
    const input = helpers.getInput("7_1");
    
    var entries = []; 
    var stepsCompleted = [];
    var workers = [];
    var timeStamp = 0;
    
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
        // process workers
        workers.forEach((job,index,object) =>{
            job.timeLeft -= 1;
            if (job.timeLeft === 1){
                stepsCompleted.push(job.id);
                object.splice(index,1);
            }
        })

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
                if (workers.length <= 5){
                    
                    entry.done = 1;
                    var newJob = { id : entry.id, timeLeft: entry.id.charCodeAt()-4};
                    workers.push(newJob);
                }
            }    
        }
        timeStamp++;
    }

    console.log('solution 7_2: ' + timeStamp);

    
}