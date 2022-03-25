class Level {
    endboss;
    enemies;
    clouds;
    backgroundObjects;
    levelEnd_x = 720 * 20;

    // here can you insert the game objects form level1.js Array
    constructor(endboss, enemies, clouds, backgroundObjects, ) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.endboss = endboss;


    }

}