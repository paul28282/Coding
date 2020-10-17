var worm1
var worm2
var worm3
var worm4
var btn1
var btn2
var btn3
var btn4
const header = document.querySelector('.header')
const audio = document.querySelector('.audio')



function setup() {
    createCanvas(1200,400)
    btn1 = createSlider(0,20,0,0.1)
    btn2 = createSlider(0,20,0,0.1)
    btn3 = createSlider(0,20,0,0.1)
    btn4 = createSlider(0,20,0,0.1)
    btn1.position(10,500)
    btn2.position(310,500)
    btn3.position(610,500)
    btn4.position(910,500)
    worm1 = new Worm(0,255,0,0)
    worm2 = new Worm(100,0,255,0)
    worm3 = new Worm(200,0,0,255)
    worm4 = new Worm(300,200,0,255)
    background(0)


}

function draw() {
    if(btn4.value() > 1) {
    worm1.main(btn1.value())
    worm2.main(btn2.value())
    worm3.main(btn3.value())
    worm4.main(btn4.value())
    }


    if(worm1.x >= width && worm2.x < width && worm3.x < width && worm4.x < width) {
        header.innerHTML = "Worm1 wins"
        audio.play()
    }else if(worm2.x >= width && worm1.x < width && worm3.x < width && worm4.x < width) {
        header.innerHTML = "Worm2 wins"
        audio.play()
    }else if(worm3.x >= width && worm2.x < width && worm1.x < width && worm4.x < width) {
        header.innerHTML = "Worm3 wins"
        audio.play()
    }else if(worm4.x >= width && worm2.x < width && worm3.x < width && worm1.x < width) {
        header.innerHTML = "Worm4 wins"
        audio.play()
    }
}



class Worm{
    constructor(y,r,g,b) {
        this.x = 0;
        this.y = y;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    main(xspeed) {
        noStroke()
        fill(this.r,this.g,this.b)
        rect(this.x,this.y,100,100)

        this.x += xspeed;


    }
}