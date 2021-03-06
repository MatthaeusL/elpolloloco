let canvas;
let world;
let keyboard = new Keyboard;

function startGame() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('body').classList.add('bg-dark');
    document.getElementById('startbutton').classList.add('d-none');

    document.getElementById('canvas').classList.remove('d-none');



    init();
}

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

}

function mouseDownLeft() {
    keyboard.LEFT = true;
}

function mouseUpLeft() {
    keyboard.LEFT = false;
}

function mouseDownRight() {
    keyboard.RIGHT = true;
}

function mouseUpRight() {
    keyboard.RIGHT = false;
}

function mouseDownD() {
    keyboard.D = true;
}

function mouseUpD() {
    keyboard.D = false;
}

function mouseDownSpace() {
    keyboard.SPACE = true;
}

function mouseUpSpace() {
    keyboard.SPACE = false;
}

function keyM() {
    if (keyboard.M == true) {
        keyboard.M = false;
    } else {
        keyboard.M = true;
    }
}




window.addEventListener("keydown", (event) => {

    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 13) {
        keyboard.ENTER = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (event.keyCode == 68) {
        keyboard.D = true;
    }
    if (event.keyCode == 77) {
        if (keyboard.M == true) {
            keyboard.M = false;
        } else {
            keyboard.M = true;
        }
    }
});

window.addEventListener("keyup", (event) => {
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 13) {
        keyboard.ENTER = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 68) {
        keyboard.D = false;
    }

});