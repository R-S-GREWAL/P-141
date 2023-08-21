function setup() {
    var canvas = createCanvas(600,600);
	  canvas.parent('canvas');
	  video = createCapture(VIDEO);
	  video.size(900,325);
	
    poseNet = ml5.poseNet(video,modelLoaded);
	  poseNet.on('pose',gotPoses);
  }
function modelLoaded()
{
  console.log('Model Loaded!');
}
function draw()
{
  if(rightwristSCORE > 0.2){
    fill("#ff0000");
    stroke("#ff0000");
    circle(rightwristX,rightwristY,20);
  }
}
function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    rightwristX = results[0].pose.rightWrist.x;
    rightwristY = results[0].pose.rightWrist.y;
    rightwristSCORE = results[0].pose.keypoints[10].score;
    console.log("rightwristX = "+rightwristX+" ,rightwristY = "+rightwristY+" ,rightwristSCORE = "+rightwristSCORE);
  }
}