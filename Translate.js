var angle = 0.1;

function setup(){
    createCanvas(400,400);

}

function draw(){
    background("black");
    push();
    translate(200,200);
    rotate(angle);
    rectMode(CENTER);
    angle = angle+1;
    rect(0,0,30,140);
    pop();
    rect(100,100,20,20);
    
    
}