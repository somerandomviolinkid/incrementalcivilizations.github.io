function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

let canvas = document.getElementById('viewBox');
let ctx = canvas.getContext('2d');

let viewBoxX = 128;
let viewBoxY = 72;
let zoom = 1;
let cameraPos = { x: 0, y: 0 }