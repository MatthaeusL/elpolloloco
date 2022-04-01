class StatusBar extends DrawableObject {

    IMAGES_LIFE = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png',

    ];
    IMAGES_COINS = [
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/20_ .png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/80_ _1.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/100__1.png'
    ];

    IMAGES_BOTTLES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'
    ];

    IMAGES_ENDBOSS = [
        'img/7.Marcadores/Barra/Marcador vida/verde/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
    ]

    IMAGES;
    percentage;




    constructor(x, y, bar, percentage) {
        super();
        this.resolveStatusBars(bar);
        this.percentage = percentage;
        this.x = x;
        this.y = y;
        this.width = 180;
        this.height = 50;
        this.setPercentage(percentage);
    }

    resolveStatusBars(bar) {
        switch (bar) {
            case 'life':
                this.loadImages(this.IMAGES_LIFE);
                this.IMAGES = this.IMAGES_LIFE;
                break;
            case 'coins':
                this.loadImages(this.IMAGES_COINS);
                this.IMAGES = this.IMAGES_COINS;
                break;
            case 'bottles':
                this.loadImages(this.IMAGES_BOTTLES);
                this.IMAGES = this.IMAGES_BOTTLES;
                break;
            case 'endboss':
                this.loadImages(this.IMAGES_ENDBOSS);
                this.IMAGES = this.IMAGES_ENDBOSS;
                break;
            default:
                break;
        }
    }
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else if (this.percentage > 0) {
            return 0;
        } else if (this.percentage <= 0) {
            return 0;
        }
    }
}