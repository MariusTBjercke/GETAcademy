class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }

    update(ctx) {
        this.draw(ctx);
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
    }
}

var friction = 0.94;
class Particle {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1;
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }

    update(ctx) {
        this.draw(ctx);
        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
        this.alpha -= 0.01;
    }
}

var ptrn;
var groundBg = new Image();
groundBg.src = "img/js-game/magic-cliffs/ground.png";
class Ground {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ptrn = ctx.createPattern(groundBg, 'repeat');
        ctx.fillStyle = ptrn;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var brickImg = new Image();
brickImg.src = "img/js-game/environment/brick.png";
class Brick {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.drawImage(brickImg, this.x, this.y, this.width, this.height);
    }
}

var mysteryBoxImg = new Image();
mysteryBoxImg.src = "img/js-game/environment/mystery-box.png";
class MysteryBox {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.drawImage(mysteryBoxImg, this.x, this.y, this.width, this.height);
    }
}