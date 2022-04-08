/*jshint esversion: 6 */

var a = 2;
var scalar = 300;
var n = 0;
var limite = 1000;
var step; 


function setup() {
  createCanvas(720, 720);
  frameRate(60);
  
}

function draw() {
  background(0);

  step = limite/(Math.pow(2,n));

  translate(width/2,height/2);
  stroke(255);
  strokeWeight(1);

  noFill();
  beginShape();

  for(let i = 0; i < limite; i += step)
  {
    let result_array = functionPolar(i);
    //stroke(90,180,0);
    //strokeWeight(5);
    //point(result_array.x, result_array.y);
    stroke(255);
    strokeWeight(1);
    vertex(result_array.x, result_array.y);
  }
  endShape();

  n++;
  text(`${a.toFixed(3)}`,width/2 - 110, height/2 - 100);
  text(`${n}\n${Math.pow(2,n)}`,width/2 - 60, height/2 - 100);
  if(n == 20)
  {
    //n = 0;
    //u += 0.01;
    noLoop();
  
  }
}

function functionPolar(t)
{
  return new p5.Vector(scalar*Math.cos(t)*Math.sin(a*t) , scalar*Math.sin(a*t)*Math.sin(t));
}
