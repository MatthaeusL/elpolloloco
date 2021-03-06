class World {
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    StatusBar = new StatusBar(30, 0, 'life', 100);
    StatusBarCoin = new StatusBar(20, 35, 'coins', 1);
    StatusBarBottle = new StatusBar(10, 70, 'bottles', 1);
    StatusBarEndboss = new StatusBar(this.level.endboss[0].x, 0, 'endboss', 100);
    endscreen = new Endscreen();
    throwableObjects = [];
    collectedBottles = 0;
    collectedCoins = 0;
    playMusic = new Audio('audio/Lobo Loco - Old River Boat (ID 1368).mp3')
    quitGame = false;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();

    }
    setWorld() {
        this.character.world = this;
    }
    run() {
        setInterval(() => {
            this.checkThrowObjects();
            this.checkCollisions();
            this.checkCollisionEnemyAndBottle();
            this.checkCollisionEndbossAndBottle();
            this.collectBottles();
            this.collectCoins();
            this.Music();

        }, 200);
    }


    checkThrowObjects() {
            if (this.keyboard.D) {

                if (this.collectedBottles > 0) {
                    let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                    this.throwableObjects.push(bottle);
                    this.collectedBottles -= 1;
                    console.log(this.collectedBottles);
                }
            }
        }
        //  Character

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
                enemy.hitChicken();
            }
            if (this.character.isColliding(enemy) && enemy.chickenDead == false) {
                this.character.hit();
                this.StatusBar.setPercentage(this.character.energy);
            }

        });
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss) && this.character.isAboveGround()) {
                endboss.hit();
            }
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.StatusBar.setPercentage(this.character.energy);
                console.log('world Leben', this.character.energy);
            }

        });
    }

    // Endboss
    checkCollisionEndbossAndBottle() {
        this.throwableObjects.forEach((bottle) => {
            this.level.endboss.forEach((endboss) => {
                if (endboss.isColliding(bottle)) {
                    endboss.hit();
                    this.StatusBarEndboss.setPercentage(endboss.energy);
                }
            });
        });

    }

    // Chicken
    checkCollisionEnemyAndBottle() {
            this.throwableObjects.forEach((bottle) => {
                this.level.enemies.forEach((enemy) => {
                    if (enemy.isColliding(bottle)) {
                        console.log('chicken dead');
                        enemy.hitChicken();
                    }
                });
            });
        }
        // Bottles
    collectBottles() {
            this.level.bottles.forEach((bottles) => {
                if (this.character.isColliding(bottles)) {
                    bottles.y -= 500;
                    bottles.bottlesSound.play();
                    this.collectedBottles += 1;
                    // console.log(this.collectedBottles); /////////////////////////////////////////////////
                    this.StatusBarBottle.setPercentage(this.collectedBottles);
                }

            });

        }
        // Coins
    collectCoins() {
        this.level.coins.forEach((coins) => {
            if (this.character.isColliding(coins)) {
                coins.y -= 400;
                coins.coinSound.play();
                this.collectedCoins += 1;
                console.log('coins', this.collectedCoins);
                this.StatusBarCoin.setPercentage(this.collectedCoins);
            }
        });
    }
    Music() {
        if (!this.keyboard.M) {
            this.playMusic.play();
        }
        if (this.keyboard.M) {
            this.playMusic.pause();
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.movableObjects()
        this.ctx.translate(-this.camera_x, 0);
        this.fixedObjects();
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });

    }
    fixedObjects() {
        this.addToMap(this.StatusBar);
        this.addToMap(this.StatusBarCoin);
        this.addToMap(this.StatusBarBottle);
        this.drawEndscreen();
    }
    movableObjects() {
        // -------- these lines underneath are used to draw the gameobjects. 
        // these Object are level and level1 files written
        // levels/level1.js
        // models/level.class.js
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.endboss);
        this.addToMap(this.StatusBarEndboss);
    }
    drawEndscreen() {
        if (MovableObject.quitGame == true) {
            this.addToMap(this.endscreen);
            // this.playMusic.pause();
            setTimeout(() => {

                location.reload();
            }, 1500)

        }

    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });

    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);  --------- draw frame arround character and chicken

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }
    flipImage(mo) {

        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }

}