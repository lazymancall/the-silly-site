const c = document.getElementById("confetti");
const ctx = c.getContext("2d");

const height = window.innerHeight;
const width = window.innerWidth;

const red = "#E44F2D";
const blue = "#5A49DB";
const yellow = "#FAFC64";

confetti_colors = { 0:red, 1:blue, 2:yellow };

c.width = width;
c.height = height;

let confetti = [];

function create_state() {
    return {
        leftx: 0,
        rightx: 0
    };
}

function Draw() {
    
    generate_particles(500);
    start_confetti_animation();
}

function particle(x, y, Color) {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = Color;
    ctx.fill();
    ctx.stroke();
}

const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

function generate_particles(num) {
    for (let i = 0; i < num; i++) {
        confetti[i] = { 
            cx : (Math.floor(Math.random() * width)),
            cy : -( Math.floor(Math.random() * height)*1.5),
            color1 : confetti_colors[i%3],
            state : create_state(),
            speed: Math.floor((Math.random()*100)+50),
            leftb: true,
            rightb: false,
        };
        
        if(i % 2 == 0) {
            confetti[i].leftb = false;
        }
        
        confetti[i].speed += 1;
        
        confetti[i].state.leftx = confetti[i].cx - 15;
        confetti[i].state.rightx = confetti[i].cx + 15;
        
        particle(
            confetti[i].cx,
            confetti[i].cy,
            confetti[i].color1
            );
    }
    
}

function start_confetti_animation() {
    c.width = c.width;
    for (let i = 0; i < confetti.length; i++) {
        confetti[i].cy += 2 + confetti[i].speed / (i+100);
        
        particle(
            (confetti[i].cx) + Math.cos(confetti[i].cx),
            (confetti[i].cy)  + Math.cos(confetti[i].cy),
            confetti[i].color1
        );
    }
    window.requestAnimationFrame(start_confetti_animation);
}

window.requestAnimationFrame(Draw);