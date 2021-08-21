$(function() {

    // Game canvas
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 600;

    var background = new Image();
    background.src = "img/magic-cliffs/clouds.png";

    const startGameBtn = document.querySelector('#startGameBtn');
    const modalEl = document.querySelector('#modalEl');

    var worldWidth = 2000;

    var enemySpeed = 0.08;
    var enemyWalkStance = 1;
    var enemyAttackStance = 1;
    var enemyStanceMode = 'walk';
    var bitcoinStance = 0;
    const friction = 0.94;
    const gravity = 0.5;
    const playerSpeed = 0.2;
    var playerJumpForce = 15;
    var playerStance = 0;
    var walkInterval;
    var timer = false;
    var move;
    var faceLeft = false;
    var faceRight = true;

    var wearBunnyEars = false;

    const x = canvas.width / 2;
    const y = canvas.height / 2;

    var animationId;
    var score;
    var bitcoins;
    let currentFrame = 0;

    // Declare arrays and variables
    function init() {
        player = {
            x: 130,
            y: y,
            vx: 0,
            vy: gravity,
            width: 53,
            height: 121,
            jumping: false
        };
        projectiles = [];
        enemyObjects = [
            {
                "x": 420,
                "y": 494,
                "width": 98,
                "height": 76,
                "vx": enemySpeed - (enemySpeed * 2),
                "vy": 0,
                "health": 100
            },
        ];
        bunnyObjects = [
            {
                x: 705,
                y: 510,
                width: 45,
                height: 54
            },
        ];
        bitcoinObjects = [
            {
                x: 357,
                y: 320,
                width: 25,
                height: 25
            },
            {
                x: 535,
                y: 280,
                width: 25,
                height: 25
            },
        ];
        particles = [];
        score = 0;
        bitcoins = 0;
    }

    let playerWalkRight = new Image();
    playerWalkRight.src = "img/player/walk-right.png";
    let playerWalkLeft = new Image();
    playerWalkLeft.src = "img/player/walk-left.png";
    let playerJumpLeft = new Image();
    playerJumpLeft.src = "img/player/jump-left.png";
    let playerJumpRight = new Image();
    playerJumpRight.src = "img/player/jump-right.png";
    function drawPlayer(ctx) {

        var playerDrawn = false;

        // Draw player sprite
        if (keyUp) {
            if (keyLeft && !playerDrawn) {
                playerDrawn = true;
                ctx.drawImage(playerJumpLeft, 0, 0, 56, 121, player.x, player.y, 56, 121);
            } else if (keyRight && !playerDrawn) {
                playerDrawn = true;
                ctx.drawImage(playerJumpRight, 0, 0, 56, 121, player.x, player.y, 56, 121);
            }
            if (faceLeft && !playerDrawn) {
                playerDrawn = true;
                ctx.drawImage(playerJumpLeft, 0, 0, 56, 121, player.x, player.y, 56, 121);
            } else if (faceRight && !playerDrawn) {
                playerDrawn = true;
                ctx.drawImage(playerJumpRight, 0, 0, 56, 121, player.x, player.y, 56, 121);
            }
        } else if (keyLeft) {
            move = true;
            playerWalkLeftData.frames.forEach((item, itemIndex) => {
                if (playerStance === itemIndex) {
                    ctx.drawImage(playerWalkLeft, item.frame.x, item.frame.y, item.frame.w, item.frame.h, player.x, player.y, item.frame.w, item.frame.h);
                }
            });
            faceLeft = true;
            faceRight = false;
        } else if (keyRight) {
            move = true;
            playerWalkRightData.frames.forEach((item, itemIndex) => {
                if (playerStance === itemIndex) {
                    ctx.drawImage(playerWalkRight, item.frame.x, item.frame.y, item.frame.w, item.frame.h, player.x, player.y, item.frame.w, item.frame.h);
                }
            });
            faceLeft = false;
            faceRight = true;
        } else {
            if (faceLeft) {
                ctx.drawImage(playerWalkLeft, 0, 0, 53, 121, player.x, player.y, 53, 121);
            } else {
                ctx.drawImage(playerWalkRight, 0, 0, 53, 121, player.x, player.y, 53, 121);
            }
        }

        if (move && !timer) {
            walkInterval = setInterval(changeStance, 120);
            timer = true;
        }

    }

    function drawHud() {
        ctx.save();
        ctx.resetTransform();
        ctx.font = "20px Fantasy";
        ctx.fillStyle = "#202020";
        ctx.fillText("SCORE: " + score, 10, 30);
        ctx.restore();

        drawBitcoinIcon();

        ctx.save();
        ctx.resetTransform();
        ctx.font = "20px Fantasy";
        ctx.fillStyle = "#202020";
        ctx.fillText("" + bitcoins, 40, 60);
        ctx.restore();
    }

    function animatorCounter() {
        setInterval(enemyWalkStanceCounter, 200);
        setInterval(enemyAttackStanceCounter, 200);
        setInterval(bitcoinStanceCounter, 90);
    }

    function enemyWalkStanceCounter() {
        enemyWalkStance++;
        if (enemyWalkStance > 4) {
            enemyWalkStance = 1;
        }
    }

    function enemyAttackStanceCounter() {
        enemyAttackStance++;
        if (enemyAttackStance > 4) {
            enemyAttackStance = 1;
        }
    }

    function bitcoinStanceCounter() {
        bitcoinStance++;
        if (bitcoinStance > 10) {
            bitcoinStance = 0;
        }
    }

    function doCollision(object, collision) {

        var objectLeft = object.x;
        var objectRight = object.x + object.width;
        var objectTop = object.y;
        var objectBottom = object.y + object.height;
        var objectCenterX = object.x + object.width * 0.5;
        var objectCenterY = object.y + object.height * 0.5;
        var collisionLeft = collision.x;
        var collisionRight = collision.x + collision.width;
        var collisionTop = collision.y;
        var collisionBottom = collision.y + collision.height;
        var collisionCenterX = collision.x + collision.width * 0.5;
        var collisionCenterY = collision.y + collision.height * 0.5;

        var vector_x, vector_y;

        vector_x = objectCenterX - collisionCenterX;
        vector_y = objectCenterY - collisionCenterY;

        if (vector_y * vector_y > vector_x * vector_x) {

            if (vector_y > 0 && objectTop <= collisionBottom) {
                object.y = collisionBottom + 0.01;
            }

            if (vector_y < 0 && objectBottom >= collisionTop) {
                object.y = collisionTop - object.height;
                object.jumping = false;
                object.vy = 0;
            }

        } else {

            if (vector_x > 0 && objectLeft <= collisionRight) {
                object.x = collisionRight;
            }

            if (vector_x < 0 && objectRight >= collisionLeft) {
                object.x = collisionLeft - object.width;
            }

        }

    }

    function spawnBitcoins() {
        bitcoinObjects.forEach((bitcoin, bitcoinIndex) => {
            let bitcoinImg = new Image();
            bitcoinImg.src = "img/coin/coin-spritesheet.png";

            drawBitcoinAnim(bitcoin, bitcoinImg);

            // If player collides with a bitcoin, increase total and remove
            const distX = bitcoin.x - player.x;
            const distY = bitcoin.y - player.y - player.height;

            if (distX <= bitcoin.width && player.x <= bitcoin.x + bitcoin.width) {
                if (distY <= bitcoin.height && player.y <= bitcoin.y + bitcoin.height) {
                    bitcoins += 1;
                    bitcoinObjects.splice(bitcoinIndex, 1);
                }
            }
        });
    }

    function drawBitcoinAnim(bitcoin, bitcoinImg) {
        let columnWidth = 50 * bitcoinStance;
        ctx.save();
        ctx.drawImage(bitcoinImg, columnWidth, 0, 50, 50, bitcoin.x, bitcoin.y, bitcoin.width, bitcoin.height);
        ctx.restore();
    }

    function drawBitcoinIcon() {
        let bitcoinImg = new Image();
        bitcoinImg.src = "img/coin/coin-spritesheet.png";

        ctx.save();
        ctx.resetTransform();
        ctx.drawImage(bitcoinImg, 0, 0, 50, 50, 10, 40, 25, 25);
        ctx.restore();
    }

    function SpawnBunnyEars() {

        bunnyObjects.forEach((bunnyEars, bunnyEarsIndex) => {

            bunnyEars = new BunnyEars(bunnyEars.x, bunnyEars.y, bunnyEars.width, bunnyEars.height);
            bunnyEars.draw(ctx);

            const distX = bunnyEars.x - player.x;
            const distY = bunnyEars.y - player.y;

            if (distX <= bunnyEars.width && player.x <= bunnyEars.x + bunnyEars.width) {
                if (distY <= bunnyEars.height && player.y <= bunnyEars.y + bunnyEars.height) {
                    wearBunnyEars = true;
                }
            }

        });

    }

    function drawSkeleton(enemy) {

        // Walk left and right
        if (enemyWalkStance === 1 && enemyStanceMode === 'walk') {
            if (enemy.vx > 0) {
                enemy.drawFrame1Right(ctx);
            } else {
                enemy.drawFrame1Left(ctx);
            }
        } else if (enemyWalkStance === 2 && enemyStanceMode === 'walk') {
            if (enemy.vx > 0) {
                enemy.drawFrame2Right(ctx);
            } else {
                enemy.drawFrame2Left(ctx);
            }
        } else if (enemyWalkStance === 3 && enemyStanceMode === 'walk') {
            if (enemy.vx > 0) {
                enemy.drawFrame3Right(ctx);
            } else {
                enemy.drawFrame3Left(ctx);
            }
        } else if (enemyWalkStance === 4 && enemyStanceMode === 'walk') {
            if (enemy.vx > 0) {
                enemy.drawFrame4Right(ctx);
            } else {
                enemy.drawFrame4Left(ctx);
            }
        }

        // Attack animation left and right
        if (enemyStanceMode === 'attack') {
            enemy.drawFrameAttackLeft1(ctx);
        }

    }

    function world1() {
        ground = new Ground(0, 570, worldWidth, 40);
        ground.draw(ctx);

        // Ground collision
        if (getOverlap(player, ground) && player.y <= ground.y) {
            player.jumping = false;
            player.y = ground.y - player.height;
            player.vy = 0;
        }

        var islandObjects = [
            {
                "x": 120,
                "y": 330,
                "width": 98,
                "height": 76
            },
            {
                "x": 320,
                "y": 350,
                "width": 98,
                "height": 76
            },
            {
                "x": 500,
                "y": 310,
                "width": 98,
                "height": 76
            },
            {
                "x": 680,
                "y": 280,
                "width": 98,
                "height": 76
            }
        ];

        for (var i = 0; i < islandObjects.length; i++) {

            islandObjects[i]['name'] = new Island(islandObjects[i]['x'], islandObjects[i]['y'], islandObjects[i]['width'], islandObjects[i]['height']);
            islandObjects[i]['name'].draw(ctx);

            doCollision(player, islandObjects[i]['name']);

            enemyObjects.forEach((enemy, enemyIndex) => {

                doCollision(enemy, islandObjects[i]['name']);
                doCollision(enemy, player);

                // Ground collision
                if (getOverlap(enemy, ground) && enemy.y <= ground.y) {
                    enemy.y = ground.y - enemy.height;
                    enemy.vy = 0;
                }

            });

        }

        // const dist = calcDistance(player, enemy);

        // End game
        // if (dist - enemy.width < 1) {
        //     cancelAnimationFrame(animationId);
        //     modalEl.style.display = 'block';
        // }

    }

    function changeStance() {
        playerStance++;
        if (playerStance > 7) {
            playerStance = 0;
        }
    }

    function drawHealthbar(x, y, percent, width, thickness) {

        ctx.save();
        ctx.beginPath();
        ctx.rect(x, y, width * (percent / 100), thickness);
        if (percent > 63) {
            ctx.fillStyle = "green";
        } else if (percent > 37) {
            ctx.fillStyle = "gold";
        } else if (percent > 13) {
            ctx.fillStyle = "orange";
        } else {
            ctx.fillStyle = "red";
        }
        ctx.fill();
        ctx.closePath();
        ctx.restore();

    }

    function spawnEnemies() {
        enemyObjects.forEach((enemy, enemyIndex) => {
            enemy = new Enemy(enemy.x, enemy.y, enemy.width, enemy.height, enemy.vx, enemy.vy, enemy.health);
            drawSkeleton(enemy);
        });
    }

    function calcDistance(object1, object2) {
        return Math.hypot(object1.x - object2.x, object1.y - object2.y);
    }

    function getOverlap(rectangle1, rectangle2) {
        const intersectionX1 = Math.max(rectangle1.x, rectangle2.x);
        const intersectionX2 = Math.min(rectangle1.x + rectangle1.width, rectangle2.x + rectangle2.width);
        if (intersectionX2 < intersectionX1) {
            return null;
        }
        const intersectionY1 = Math.max(rectangle1.y, rectangle2.y);
        const intersectionY2 = Math.min(rectangle1.y + rectangle1.height, rectangle2.y + rectangle2.height);
        if (intersectionY2 < intersectionY1) {
            return null;
        }
        return true;
    }

    var canFire = true;
    function updatePlayer() {

        // Make sure player cannot move outside map on the left
        if (player.x <= 0) {
            player.x = 0;
        } else if (player.x >= worldWidth - player.width) {
            player.x = worldWidth - player.width;
        }

        // Left and right
        if (keyLeft) {
            player.vx -= playerSpeed;
        } else if (keyRight) {
            player.vx += playerSpeed;
        }

        // Shoot
        var projectileVelocity;
        var projectileX;
        function allowFire() {
            canFire = true;
        }

        if (canFire) {
            // Add phoneTouch for mobile support
            if (keySpace) {

                setTimeout(() => {
                    if (faceLeft) {
                        projectileVelocity = {
                            x: -5,
                            y: 0
                        };
                        projectileX = player.x;
                    } else if (faceRight) {
                        projectileVelocity = {
                            x: 5,
                            y: 0
                        };
                        projectileX = player.x + player.width;
                    } else {
                        projectileVelocity = {
                            x: 5,
                            y: 0
                        };
                        projectileX = player.x + player.width;
                    }
                    projectiles.push(new Projectile(
                        projectileX,
                        player.y + 33,
                        2,
                        'black',
                        projectileVelocity
                    ));
                }, 0);

                canFire = false;
                setTimeout(allowFire, 100);

            }
        }

        // Jump
        var jumpSound = new Audio('sounds/player/jump.mp3');
        if (keyUp && player.jumping === false) {
            player.vy -= playerJumpForce;
            player.jumping = true;
            // jumpSound.play();
        }

        // Gravity
        player.vy += gravity;

        // Update position
        player.x += player.vx;
        player.y += player.vy;

        // Friction
        player.vx *= friction;
        player.vy *= friction;

    }

    function RectCircleColliding(rect,circle) {
        var dx = Math.abs(circle.x-(rect.x+rect.width/2));
        var dy = Math.abs(circle.y-(rect.y+rect.height/2));

        if (dx > circle.radius+rect.width/2) {
            return false;
        }
        if (dy > circle.radius+rect.height/2) {
            return false;
        }

        if (dx <= rect.width) {
            return true;
        }
        if (dy <= rect.height) {
            return true;
        }

        dx=dx-rect.width;
        dy=dy-rect.height;

        return (dx*dx+dy*dy<=circle.radius*circle.radius);
    }

    function updateEnemy() {

        enemyObjects.forEach((enemy, enemyIndex) => {

            // Make sure enemy cannot move outside map
            if (enemy.x <= 0) {
                enemy.x = 0;
            } else if (enemy.x + enemy.width >= worldWidth) {
                enemy.x = worldWidth - enemy.width;
            }

            // Attack if close to player
            const dist = calcDistance(enemy, player);
            if (dist < player.width / 2 + enemy.width) {
                enemyStanceMode = 'attack';
            } else {
                enemyStanceMode = 'walk';
            }


            // Gravity
            enemy.vy += gravity;

            // Update position
            enemy.x += enemy.vx;
            enemy.y += enemy.vy;

            // Friction
            enemy.vx *= friction;
            enemy.vy *= friction;

            // Move enemy based on player x position (must be in walk stance as well)
            if (enemy.x > player.x && enemyStanceMode === "walk") {
                setTimeout(() => {
                    enemy.vx -= enemySpeed;
                }, 1000);
            } else if (enemy.x < player.x && enemyStanceMode === "walk") {
                setTimeout(() => {
                    enemy.vx += enemySpeed;
                }, 1000);
            }

            // Enemy health bar
            drawHealthbar(enemy.x, enemy.y - 20, enemy.health, 100, 10);

            projectiles.forEach((projectile, projectileIndex) => {

                // When projectiles touch enemy
                if (RectCircleColliding(enemy, projectile)) {

                    // Create explosions
                    for (let i = 0; i < 5 * 2; i++) {
                        particles.push(new Particle(projectile.x, projectile.y, Math.random() * 2, "red", {
                            x: (Math.random() - 0.5) * (Math.random() * 5),
                            y: (Math.random() - 0.5) * (Math.random() * 5)
                        }));
                    }

                    // Draw health from enemy - if no health left remove from screen
                    enemy.health -= 10;
                    if (enemy.health <= 0) {
                        setTimeout(() => {
                            enemyObjects.splice(enemyIndex, 1);
                        }, 0);
                    }

                    // Remove projectile from screen
                    score += 10;
                    setTimeout(() => {
                        projectiles.splice(projectileIndex, 1);
                    }, 0);
                }
            });

        });

    }

    function updateBunnyEars() {

        if (wearBunnyEars) {
            var bunnyIcon = new BunnyEars(canvas.width - 35, 10, 25, 30);
            bunnyIcon.drawIcon(ctx);
            playerJumpForce = 30;
        }

        // Place bunny ears on character head
        setTimeout(() => {
            bunnyObjects.forEach((bunnyEars, bunnyEarsIndex) => {
                if (wearBunnyEars) {
                    if (faceRight || keyRight) {
                        bunnyEars.x = player.x + 5;
                        bunnyEars.y = player.y - 40;
                    } else if (faceLeft || keyLeft) {
                        bunnyEars.x = player.x + 35;
                        bunnyEars.y = player.y - 40;
                    }
                }
            });
        }, 0);

    }

    function animate() {
        animationId = requestAnimationFrame(animate);
        ctx.save();
        ctx.resetTransform();
        ctx.drawImage(background, 0, 0, 800, 600, 0, 0, canvas.width, canvas.height);
        ctx.restore();

        // Spawn player
        drawPlayer(ctx);

        // Generate world
        world1();
        updateWorld();

        // Generate hud
        drawHud();

        // Spawn bitcoin
        spawnBitcoins();

        // Bunny ears
        SpawnBunnyEars();
        updateBunnyEars();

        // Spawn enemies in world
        spawnEnemies();
        updateEnemy();

        // Player animations on movement
        // playerAnimator(ctx);

        // Player movement
        updatePlayer();

        // Particles from enemy explosion
        particles.forEach((particle, index) => {
            if (particle.alpha <= 0) {
                setTimeout(() => {
                    particles.splice(index, 1);
                }, 0);
            } else {
                particle.update(ctx);
            }
        });

        // Projectiles from gun
        projectiles.forEach((projectile, index) => {
            projectile.update(ctx);

            // Remove from edges of screen
            if (projectile.x + projectile.radius < 0 || projectile.x - projectile.radius > worldWidth || projectiles.y + projectile.radius < 0 || projectiles.y - projectile.radius > canvas.height) {
                setTimeout(() => {
                    projectiles.splice(index, 1);
                }, 0);
            }
        });

    }

    function updateWorld() {
        if (player.x > 400 && player.x <= worldWidth - 400) {
            ctx.resetTransform();
            ctx.translate(400-player.x, 0);
        }
    }

    // Player movement
    var keyLeft;
    var keyRight;
    var keyUp;
    var keySpace;
    function keyListener(e) {

        var key_state = (e.type === "keydown");

        switch(e.keyCode) {

            case 65:
                keyLeft = key_state;
                break;
            case 37:
                keyLeft = key_state;
                break;
            case 39:
                keyRight = key_state;
                break;
            case 68:
                keyRight = key_state;
                break;
            case 87:
                keyUp = key_state;
                break;
            case 38:
                e.preventDefault();
                keyUp = key_state;
                break;
            case 32:
                e.preventDefault();
                keySpace = key_state;
                break;

        }

    }
    document.addEventListener("keydown", keyListener, false);
    document.addEventListener("keyup", keyListener, false);

    // Do stuff on mouse click
    var mouseClick;
    function mouseListener(e) {

        var mouse_down_state = (e.type == "mousedown") ? true:false;
        if (mouse_down_state) {
            mouseClick = true;
        }

        var mouse_up_state = (e.type == "mouseup") ? true:false;
        if (mouse_up_state) {
            mouseClick = false;
        }

    }
    window.addEventListener('mousedown', mouseListener, false);
    window.addEventListener('mouseup', mouseListener, false);

    // Disable right click
    jQuery('canvas, #scoreWrapper, #modalEl').bind('contextmenu', function(e) {
        e.preventDefault();
    });

    // Do stuff on mobile touch
    var phoneTouch;
    function phoneTouchListener(e) {
        var touch_start_state = (e.type == "touchstart") ? true:false;
        if (touch_start_state) {
            phoneTouch = true;
        }

        var touch_end_state = (e.type == "touchend") ? true:false;
        if (touch_end_state) {
            phoneTouch = false;
        }
    }
    window.addEventListener('touchstart', phoneTouchListener, false);
    window.addEventListener('touchend', phoneTouchListener, false);

    // Start game by clicking on modal
    startGameBtn.addEventListener('click', () => {
        init();
        drawHud();
        animatorCounter();
        animate();
        startGameBtn.style.display = 'none';
    });

});