let r = 400
let total = 0
let circle = 0
let diff
let recordDiff = 2
let recordPi = 0
let dom = document.querySelector('p')

function setup() {
    createCanvas(804,804)
    background(52, 73, 94)

    translate(width/2, height/2)
    stroke(255)
    strokeWeight(1)
    noFill()
    ellipse(0,0,r*2,r*2)
    rectMode(CENTER);
    rect(0,0,r*2,r*2)
}

function draw() {
    translate(width/2, height/2)
    let pi = 0
    stroke(255)
    point(0,0)
    for(let i = 0;i < 20000;i++) {
        total++
        let x = random(-r,r)
        let y = random(-r,r)
        

        let d = x * x + y * y
        if (d < r*r) {
            circle++
            stroke(236, 240, 241)
        }else {
            stroke(52, 152, 219)
        }

        point(x,y)
    }
    pi = 4 * (circle/total)
    diff = abs(PI - pi)
    if (diff < recordDiff) {
        recordDiff = diff
        recordPi = pi
        dom.innerHTML = "Pii on varmaan " + recordPi
        console.log(recordPi)
    }
    
    
}