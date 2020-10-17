var balls = [];
var scl = 25;
var i;
var ball;

var bounces = 0;
var par;



function setup() {
    createCanvas(600,600)
    par = select('#bounces')
}

function mousePressed() {
    balls.push(i)
    balls[i] = new Ball(mouseX,mouseY);
}

function draw() {
    background(50)
    for(i=0;i < balls.length;i++) {
        balls[i].show();
        balls[i].update();
        balls[i].bounce()
    }
}

class Ball {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.xspeed = random(-10,10);
        this.yspeed = random(-10,10);
        if(this.xspeed == -2 || this.xspeed == 2) {
            this.xspeed = random(-10,10)
        }else if(this.yspeed == -2 || this.yspeed == 2) {
            this.yspeed = random(-10,10)
        }
        
    }

    show() {
        noStroke()
        fill(255,0,0)
        ellipse(this.x,this.y,scl,scl)
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    bounce() {
        if(this.x > width - (scl/2) || this.x < (scl/2)){
            this.xspeed *= -1;
            bounces++
            par.html('Bounces:' + bounces)
        }

        if(this.y > height - (scl/2) || this.y < (scl/2)){
            this.yspeed *= -1;
            bounces++
            par.html('Bounces:' + bounces)
        }
    }

}

