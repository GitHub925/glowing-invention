var noseyx=0
var noseyy=0
var Lwrist=0
var Rwrist=0
var diff=0
function setup(){
    video = createCapture(VIDEO);
    video.size(480, 380)
    canvas=createCanvas(480, 360);
    canvas.position(550, 205);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("oorgamoolga")

}

function draw(){
    textSize(diff)
fill('navy'); text("Ira", noseyy, noseyx);
document.getElementById("size").innerHTML=diff
}
function gotPoses(results) {
     if(results.length > 0) {
     console.log(results);
      noseyx = results[0].pose.nose.x;
       noseyy = results[0].pose.nose.y;
        console.log("noseX = " + noseyx +" noseY = " + noseyy);
        Lwrist=results[0].pose.leftWrist.x;
        Rwrist=results[0].pose.rightWrist.y;
        if(Lwrist>Rwrist){
            diff=floor(Lwrist-Rwrist);
        }
        else{
            diff=floor(Lwrist-Rwrist)
        }
     }
}
