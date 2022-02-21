class MovableObject {
    x = 120;
    y = 250;
    height = 200;
    width = 100;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');

    }


    moveLeft() {

    }
}