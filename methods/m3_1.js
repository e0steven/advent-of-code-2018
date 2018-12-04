var helpers = require('../helpers/helpers.js');

module.exports.run = function(){
  var max_x = 1000;
  var max_y = 1000;
  var output = 0;

  const input = helpers.getInput("3_1");
  var grid = Array(max_x).fill(0).map(()=>Array(max_y).fill(0));
    
  input.forEach(line =>{
    var start = line.substring(
      line.lastIndexOf('@')+2,
      line.lastIndexOf(':')
    )
    start = start.split(',');

    var dims = line.substring(
      line.lastIndexOf(":")+2
    )
    dims = dims.split('x');

    for(x = start[0];x< parseInt(start[0]) + parseInt(dims[0]);x++){

      for(y = start[1]; y < parseInt(start[1]) + parseInt(dims[1]);y++){
        
        grid[x][y] += 1;
      }
    }
  });
  for (x = 0; x< max_x; x++){
    for (y = 0; y< max_y; y++){
      if (grid[x][y] >= 2){
        output += 1;
      }
    }
  }
  console.log('solution 3_1:' + output);
    
}