var canvas = document.getElementById("the_canvas");
var context = canvas.getContext("2d");
var image = new Image();

function input() {
    console.log("Input ...");
}

function update() {
    console.log("Update ...");
}

var x = 0, y = 800;

function draw() {
    context.drawImage(image, x, y, 600, 600, 0, 0, 600, 600);
    animate();
}

var frames = 6;
var currentFrame = 0;
var sprite = new Image();
var sprite_x = 0;
var initial = new Date().getTime();
var current;
sprite.src = "smug.png";

function animate() {
    current = new Date().getTime();
    if (current - initial >= 100) {
        currentFrame = (currentFrame + 1) % frames;
        initial = current;
    }
    context.drawImage(sprite, (sprite.width / 6) * currentFrame, 0, 600, 600, 0, 0, 600, 600)
    context.rotate(0.9, 1);
    context.drawImage(image, 0, 0);
}

function gameloop() {
    input();
    update();
    draw();
    window.requestAnimationFrame(gameloop);
}

window.requestAnimationFrame(gameloop);