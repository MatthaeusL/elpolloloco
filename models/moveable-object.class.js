class MovableObject {
    x = 120;
    y = 250;
    height = 200;
    width = 100;
    img;
    imageCache = {};



    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image;
            img.src = path;
            this.imageCache[path] = path;



        });
    }

    moveRight() {
        console.log('Moving right');

    }


    moveLeft() {

    }
}