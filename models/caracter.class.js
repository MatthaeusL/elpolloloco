class Character extends MovableObject {
    height = 300;
    width = 150;
    y = 34;
    speed = 10;
    walkingSound = new Audio('audio/walking.mp3');

    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',


    ]


    world;



    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();

    }

    animate() {

        setInterval(() => {
            this.walkingSound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEnd_x) {
                this.moveRight();
                this.walkingSound.play();
                this.otherDirection = false;

            };
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.walkingSound.play();
                this.otherDirection = true;
            };

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x + 100;

        }, 1000 / 60);

        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {

                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }

        }, 50);

    }



}