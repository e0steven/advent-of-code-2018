var helpers = require('../helpers/helpers.js');

module.exports.run = function(){
    const input = helpers.getInput("4_1");
    var entries = [];  
    var agents = {};
    
    input.forEach(line =>{
            
        var date = line.substring(1,17);
        
        var dateNumeric = new Date(date);

        if (line.lastIndexOf('#') !== -1){
            var agent = line.substring(line.lastIndexOf('#')+1);
            agent = agent.split(' ')[0];
            
            entries.push({date: dateNumeric, 'agent': agent});
        }
        if(line.lastIndexOf('falls')!== -1){
            var startTime = line.substring(line.lastIndexOf(':')+1);
            startTime = startTime.split(']')[0];
            entries.push({date: dateNumeric, 'start': startTime});
        }
        if(line.lastIndexOf('wakes')!==-1){
            var endTime = line.substring(line.lastIndexOf(':')+1);
            endTime = endTime.split(']')[0];
            entries.push({date: dateNumeric, 'end': endTime});
        }
    });

    entries.sort(function(a,b){
        return new Date(a.date) - new Date(b.date) ;
    });

    var currentAgent, start,end;
    var highestAgent = 0;
    var highestAgentValue = 0;
    for (const key of Object.keys(entries)){
        if (entries[key].hasOwnProperty('agent')){
            currentAgent = entries[key].agent;
            if (!agents[currentAgent]){
                agents[currentAgent] = {};
                agents[currentAgent].times = [];
            }
            
        }else if(entries[key].hasOwnProperty('start')){
            start = parseInt(entries[key].start);
        } else {
            end = parseInt(entries[key].end);
            agents[currentAgent].totalTime = (agents[currentAgent].totalTime || 0) + end - start;
            if (agents[currentAgent].totalTime > highestAgentValue){
                
                highestAgent = currentAgent;
                highestAgentValue = agents[currentAgent].totalTime;
            }
            for (x = start;x<end;x++){
                agents[currentAgent].times.push(x);
            }
        }
            

    }
    
    var timeMap = {};
    var maxTime = agents[highestAgent].times[0], maxCount = 1;

    for(var i = 0; i < agents[highestAgent].times.length; i++)
    {
        var el = agents[highestAgent].times[i];
        if(timeMap[el] == null)
            timeMap[el] = 1;
        else
            timeMap[el]++;  
        if(timeMap[el] > maxCount)
        {
            maxTime = el;
            maxCount = timeMap[el];
        }
    }

    console.log('solution 4_1: ' + maxTime * highestAgent); 

    
}