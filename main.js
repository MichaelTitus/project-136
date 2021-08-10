status = "";
function preload() {
    
}
function setup() {
    canvas = createCanvas(480, 380)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}
function draw() {
    image(video, 0, 0, 480, 380)
    console.log("video is live")
}

function start(){
    objectdetector = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function modelLoaded(){
    console.log("model is loaded")
    status = true;
  
}