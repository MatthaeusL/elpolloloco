class Cloud extends MovableObject {

    y = 20;
    width = 500;
    height = 300;


    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 14400;
        this.animate()

    }
    animate() {
        setInterval(() => {
            this.moveLeft();

        }, 1000 / 60);
    }

}