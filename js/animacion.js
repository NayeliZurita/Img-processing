"use strict";
var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var numberOfParticles = 200;
var particlesArray = [];
var sprite = new Image();
sprite.src = './sharks.png';
var Particle = /** @class */ (function () {
    function Particle() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = (Math.random() * 10) + 2;
        this.speedX = (Math.random() * 3) - 1.5;
        this.speedY = (Math.random() * 3) - 1.5;
        this.size = 250;
        this.frameX = Math.floor(Math.random() * 4);
        this.frameY = Math.floor(Math.random() * 4);
    }
    Particle.prototype.draw = function () {
        ctx.drawImage(sprite, this.size * this.frameX, this.size * this.frameY, this.size, this.size, this.x, this.y, this.radius * 5, this.radius * 5);
    };
    Particle.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x + this.radius > canvas.width ||
            this.x - this.radius < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + this.radius > canvas.height ||
            this.y + this.radius < 0) {
            this.speedY = -this.speedY;
        }
        this.draw();
    };
    return Particle;
}());
function init() {
    for (var i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    requestAnimationFrame(animate);
}
init();
animate();
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesArray = [];
    init();
});
