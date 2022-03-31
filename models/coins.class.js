class Coins extends MovableObject {
    coinSound = new Audio('audio/coin.mp3')

    constructor() {
        super().loadImage('img/8.Coin/Moneda2.png');

        this.x = this.x = 200 + Math.random() * 14000;

        this.y = 150 + Math.random() * 30;
        this.height = 100;
        this.width = 100;


    }

}