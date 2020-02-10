var numStages = 5;
var numPoints = Math.round(Math.random()*15) + 5;

var line = document.getElementById('line');
var start = genPoints(numPoints)
var values = start

for(var i = 0; i <= numStages; i++){
  values += genPoints(numPoints);
}

values += start;

line.setAttribute('values', values)

function genPoints(numPoints){

  var points = "1920,0 0,0 "
  var x,y;

  for(var i = 0; i <= numPoints; i++){

    y = Math.round(Math.random()*300) + 250;
    x = i * 1920 / numPoints;

    points += `${x},${y} `

  }

  points += "; "

  return points;
}
