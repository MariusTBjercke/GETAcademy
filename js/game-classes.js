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

var enemySkeletonRight = new Image();
var enemySkeletonLeft = new Image();
enemySkeletonRight.src = "img/Skeleton/Walk-right.png";
enemySkeletonLeft.src = "img/Skeleton/Walk-left.png";
var enemySkeletonAttackLeft = new Image();
enemySkeletonAttackLeft.src = "img/Skeleton/attack-left.png";
class Enemy {
    constructor(x, y, width, height, vx, vy, health) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.vx = vx;
        this.vy = vy;
        this.health = health;
    }

    drawFrame1Right(ctx) {
        ctx.drawImage(enemySkeletonRight, 60, 50, 45, 51, this.x, this.y, this.width, this.height);
    }

    drawFrame1Left(ctx) {
        ctx.drawImage(enemySkeletonLeft, 495, 50, 45, 51, this.x, this.y, this.width, this.height);
    }

    drawFrame2Right(ctx) {
        ctx.drawImage(enemySkeletonRight, 210, 50, 45, 51, this.x, this.y, this.width, this.height);
    }

    drawFrame2Left(ctx) {
        ctx.drawImage(enemySkeletonLeft, 345, 50, 45, 51, this.x, this.y, this.width, this.height);
    }

    drawFrame3Right(ctx) {
        ctx.drawImage(enemySkeletonRight, 360, 50, 45, 51, this.x, this.y, this.width, this.height);
    }

    drawFrame3Left(ctx) {
        ctx.drawImage(enemySkeletonLeft, 195, 50, 45, 51, this.x, this.y, this.width, this.height);
    }

    drawFrame4Right(ctx) {
        ctx.drawImage(enemySkeletonRight, 510, 50, 45, 51, this.x, this.y, this.width, this.height);
    }

    drawFrame4Left(ctx) {
        ctx.drawImage(enemySkeletonLeft, 45, 50, 45, 51, this.x, this.y, this.width, this.height);
    }

    drawFrameAttackLeft1(ctx) {
        ctx.drawImage(enemySkeletonAttackLeft, 188, 57, 36, 57, this.x, this.y, this.width, this.height);
    }

    update() {
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
groundBg.src = "img/magic-cliffs/ground.png";
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

var islandImg = new Image();
islandImg.src = "img/magic-cliffs/island.png";
class Island {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.drawImage(islandImg, this.x, this.y, this.width, this.height);
    }
}