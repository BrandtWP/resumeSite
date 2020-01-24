var numPoints = Math.round(Math.random()*10) + 5;


var svg = document.getElementById('backgroundSVG');

var polyline = document.getElementById('line');

var x = 0;
var y;

var points = ""

for(var i = 0; i <= numPoints; i++){

  var point = svg.createSVGPoint();

  point.y = Math.round(Math.random()*500) + 250;
  point.x = i * 1920 / numPoints;

  polyline.points.appendItem(point);

}
