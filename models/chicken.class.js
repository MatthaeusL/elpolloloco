class Chicken extends MovableObject {
    height = 70;
    width = 70;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'

    ]



    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');

        this.x = 200 + Math.random() * 500;
        this.y = 355;

        this.loadImages(this.IMAGES_WALKING);

        this.animate();
        this.speed = .15 + Math.random() * .5;

    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);

        }, 170);

    }

}