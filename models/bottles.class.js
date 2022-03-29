class Bottles extends MovableObject {

    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada2.png');

        this.x = this.x = 200 + Math.random() * 14000;

        this.y = 345;
        this.height = 70;
        this.width = 70;


    }

}