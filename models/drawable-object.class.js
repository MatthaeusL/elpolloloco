class DrawableObject {
    x = 120;
    y = 250;
    height = 200;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    draw(ctx) {
        // try {
        //     ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        // } catch (e) {
        //     console.log('could not load image', this.img);
        //     console.warn('Error loading image', e);
        // }
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    loadImages(arr) {
            arr.forEach(path => {
                let img = new Image;
                img.src = path;
                this.imageCache[path] = img;
            });
        }
        // --------- draw frame arround character and chicken
        // drawFrame(ctx) {
        //     if (this instanceof Character || this instanceof Chicken) {
        //         ctx.beginPath();
        //         ctx.lineWidth = '5';
        //         ctx.strokeStyle = 'blue';
        //         ctx.rect(this.x, this.y, this.width, this.height);
        //         ctx.stroke();
        //     }




}