video = "";
objects = [];

function preload(){
video = createVideo('video.mp4');
video.hide();
}

function setup(){
canvas = createCanvas(480 , 380);
canvas.center();
}

function start(){
objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
}

function draw(){
image(video , 0 ,0 , 480 , 380);
if(status != ""){
objectDetector.detect(video , gotResults);
for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML = "Status : Objects Detected";
document.getElementById("number_of_objects").innerHTML = "Number of object detected are : "+objects.length;
r = random(255);
g = random(255);
b = random(255);
fill(r , g , b);
percent = floor(object[i].confidence*100);
text(object[i].label+" "+percent+"%" , objects[i].x +15 , objects[i].y +15);
noFill();
stroke(r , g , b);
rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height); 
}
}
}

function gotResults(error , results){
if(error){
console.log(error);
}
else{
console.log(results);
objects = results;
}
}

function modelLoaded(){
console.log("Model Is Loaded");
video.loop();
video.speed(1);
video.volume(0);
}
