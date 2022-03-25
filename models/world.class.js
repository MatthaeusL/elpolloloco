class World {
    character = new Character();
    endboss = new Endboss();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    StatusBar = new StatusBar(30, 0, 'life', 100);
    StatusBarCoin = new StatusBar(20, 35, 'coins', 80);
    StatusBarBottle = new StatusBar(10, 70, 'bottles', 40);
    StatusBarEndboss = new StatusBar(500, 0, 'endboss', 100);
    throwableObjects = [];




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


        }, 200);
    }
    checkThrowObjects() {
            if (this.keyboard.D) {
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObjects.push(bottle);
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
                endboss.hitEndboss();
            }
            if (this.character.isColliding(endboss) && endboss.endbossDead == false) {
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
                    endboss.hitEndboss();
                    this.StatusBarEndboss.setPercentage(this.endboss.endbossEnergy);
                    console.log('world', this.endboss.endbossEnergy);
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


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);


        // -------- these lines underneath are used to draw the gameobjects. 
        // these Object are level and level1 files written
        // levels/level1.js
        // models/level.class.js
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.endboss);
        this.addToMap(this.StatusBarEndboss);
        this.ctx.translate(-this.camera_x, 0);
        // ---------- space for fixed objects ------------
        this.addToMap(this.StatusBar);
        this.addToMap(this.StatusBarCoin);
        this.addToMap(this.StatusBarBottle);

        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);

        // draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
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