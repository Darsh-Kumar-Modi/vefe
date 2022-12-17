var nX=0;
var nY=0;
var wL=0;
var wR=0;
dif=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,400);
    canvas.position(600,130);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("modelLoaded");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    nX=results[0].pose.nose.x;
    nY=results[0].pose.nose.y;
    console.log("nosex = " +nX+ "noseY = "+ nY);
    wL=results[0].pose.leftWrist.x;
    wR=results[0].pose.rightWrist.x;
    dif=floor(wL-wR);
    console.log( "leftwrist="+wL +" right wrist="+wR + " difference="+dif);
}
}
function draw(){
    background(1,0,22);
document.getElementById("font").innerHTML="height of the font will be = "+ dif;
    textSize(dif);
    fill("white");
    stroke("yellow");
    text('Darsh', nY, nX);
}