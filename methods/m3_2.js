var helpers = require('../helpers/helpers.js');

module.exports.run = function(){
  var max_x = 1000;
  var max_y = 1000;
  var goodEntry = [];
  var badEntry = [];

  const input = helpers.getInput("3_1");
  var grid = Array(max_x).fill(0).map(()=>Array(max_y).fill(0));
    
  input.forEach(line =>{
    var start = line.substring(
      line.lastIndexOf('@')+2,
      line.lastIndexOf(':')
    )
    start = start.split(',');

    var entry = line.substring(
      1,
      line.lastIndexOf('@')-1
    )

    goodEntry.push(entry);

    var dims = line.substring(
      line.lastIndexOf(":")+2
    )
    dims = dims.split('x');

    for(x = start[0];x< parseInt(start[0]) + parseInt(dims[0]);x++){

      for(y = start[1]; y < parseInt(start[1]) + parseInt(dims[1]);y++){
        if (parseInt(grid[x][y]) !== 0){
          badEntry.push(entry);
          badEntry.push(grid[x][y]);
        }
        grid[x][y] = entry;
      }
    }
  });
  
  var difference = goodEntry.filter(x => !badEntry.includes(x));
  console.log('solution 3_2:' + difference[0]); 
    
}