class ThrowableObject extends MovableObject {
    height = 60;
    width = 60;


    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;
        this.throw(x, y);



    }

    throw () {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 7;
        }, 25);
    }





}