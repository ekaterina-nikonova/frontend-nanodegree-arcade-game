// Enemies our player must avoid
//EN: startX should be more than 101, so that the enemy appears outside the canvas
var Enemy = function(row, startX) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  this.x = -1 * startX; //EN: starting point outside the canvas
  this.y = row; //EN: one of three rows of stone blocks, 0 to 2
  this.defaultSpeed = 200 * (Math.random() + 1);
  this.speed = this.defaultSpeed;
  /*
   * EN: When a bug bumps into another one within the canvas borders,
   * they swap speeds.
   */
  this.checkCollisions = function(other) {
    if (this.x + 101 >= other.x && this.x < other.x) {
      other.x += this.x + 101 - other.x; //EN: to prevent interlacing
      var temp = this.speed;
      this.speed = other.speed;
      other.speed = temp;
    }
  }
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//EN: Parameter: canvas, to track when the bugs reach the edge of the canvas
Enemy.prototype.update = function(dt, canvas) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += this.speed * dt;
  if (this.x > (canvas.width + 505)) {
    this.x = -150 * (Math.random() + 1);
    this.speed = this.defaultSpeed;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.scale(ratio, ratio);
  ctx.drawImage(Resources.get(this.sprite), 72 + this.x, 212 + this.y * 83);
  ctx.scale(1 / ratio, 1 / ratio);
};

var BrownBug = function(row, startX) {
  Enemy.call(this, row, startX);
  this.sprite = 'images/brown-bug.png';
  this.defaultSpeed = 80 * (Math.random() + 1);
};
BrownBug.prototype = Object.create(Enemy.prototype);
BrownBug.prototype.constructor = BrownBug;

var BlueBug = function(row, startX) {
  Enemy.call(this, row, startX);
  this.sprite = 'images/blue-bug.png';
  this.defaultSpeed = 150 * (Math.random() + 1);
};
BlueBug.prototype = Object.create(Enemy.prototype);
BlueBug.prototype.constructor = BlueBug;

var RedBug = function(row, startX) {
  Enemy.call(this, row, startX);
  this.sprite = 'images/red-bug.png';
  this.defaultSpeed = 200 * (Math.random() + 1);
};
RedBug.prototype = Object.create(Enemy.prototype);
RedBug.prototype.constructor = RedBug;

var RainbowBug = function(row, startX) {
  Enemy.call(this, row, startX);
  this.sprite = 'images/rainbow-bug.png';
  this.defaultSpeed = 300 * (Math.random() + 1);
};
RainbowBug.prototype = Object.create(Enemy.prototype);
RainbowBug.prototype.constructor = RainbowBug;

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var addEnemies = function(lvl) {
  var enemies = [];
  switch (lvl) {
    case 2:
      enemies.push(
        [new BrownBug(0, 150),
        new BlueBug(0, 600),
        new BrownBug(0, 900)],
        [new BlueBug(1, 101),
        new BrownBug(1, 600)],
        [new BrownBug(2, 300),
        new BlueBug(2, 700)]
      );
      break;
    case 3:
      enemies.push(
        [new BlueBug(0, 101),
        new BrownBug(0, 500)],
        [new RedBug(1, 200),
        new BlueBug(1, 400),
        new BrownBug(1, 700)],
        [new RedBug(2, 101),
        new BlueBug(2, 500)]
      );
      break;
    case 4:
      enemies.push(
        [new RainbowBug(0, 101),
        new BlueBug(0, 400),
        new BrownBug(0, 600)],
        [new RedBug(1, 200),
        new RainbowBug(1, 700)],
        [new RedBug(2, 101),
        new BlueBug(2, 400),
        new BlueBug(2, 800)]
      );
      break;
    case 5:
      enemies.push(
        [new BlueBug(0, 300),
        new RainbowBug(0, 101),
        new BrownBug(0, 500),
        new RedBug(0, 700)],
        [new RedBug(1, 200),
        new BlueBug(1, 101),
        new RainbowBug(1, 400)],
        [new RedBug(2, 700),
        new BlueBug(2, 200),
        new RainbowBug(2, 300),
        new BlueBug(2, 400)]
      );
      break;
    default: //EN: level 1
      enemies.push(
        [new BrownBug(0, 101),
        new BrownBug(0, 505)],
        [new BrownBug(1, 200)],
        [new BrownBug(2, 150),
        new BrownBug(2, 700)]
      );
  }
  return enemies;
};

var allEnemies = addEnemies(currentLevel.level);

var player = {
  avatar: 'images/char-boy.png',
  x: 3, //EN: initial position; 0 to 6
  y: 4, //EN: initial position - grass row (for player rows are 0 to 4)
  /*
  * EN: 'lives' and somer other properties are objects, so that they can be
  * passed by reference to various render() functions, whose properties'
  * values will be dynamically updated.
  */
  lives: {value: 3}, //EN: initial value
  healthInitial: 100,
  health: {value: this.healthInitial},
  score: {value: 0},
  update: function() {
    /*
     * EN: What happens when the player hits the top row
     */
    if (this.y === 0) {
      var position = this.x;
      this.y = 4;
      this.x = 3;
      if (!currentLevel.waterBlocks.includes(position)) { //EN: succesfully crossed
        var splashCrossed = new Splash('crossed'); //EN: have to create a new object every time so that it grabs the updated value of hopsLeft
        currentLevel.hopsLeft.value--;
        player.score.value += currentLevel.crossBonus;
        if (currentLevel.hopsLeft.value > 0) {
          splashCrossed.render();
        } else if (currentLevel.level < 5) {
          var splashLevelUp = new Splash('level up');
          splashLevelUp.render();
        } else {
          splashWin.render();
        }
      } else if (this.lives.value > 0) { //EN: loss of life restores health
        this.lives.value--;
        this.health.value = this.healthInitial;
        splashDrown.render();
      } else {
        this.lives.value--;
        splashGameOver.render();
      }
    }
    if (this.health.value <= 0) {
      console.log('Health is 0: ' + this.health.value);
      this.lives.value--;
      this.health.value = this.healthInitial;
      console.log('Lives: ' + this.lives.value);
    }
  },
  render: function(rto) {
    ctx.scale(rto, rto);
    ctx.drawImage(Resources.get(this.avatar), 72 + this.x * 101, 212 + (this.y - 1) * 83);
    ctx.scale(1 / rto, 1 / rto);
  },
  handleInput: function(code) {
    switch (code) {
      case 'left':
        if (this.x > 0) this.x--;
        break;
      case 'up':
        if (this.y > 0) this.y--;
        break;
      case 'right':
        if (this.x < 6) this.x++;
        break;
      case 'down':
        if (this.y < 4) this.y++;
        break;
    }
  },
  checkCollisions: function(enemy) {
    var playerX = 72 - 51 + this.x * 101; //EN: player's x is 0..6
    if (this.y === enemy.y + 1 &&
        playerX <= enemy.x + 101 &&
        playerX + 101 > enemy.x + 51) { //EN: half the width is added/removed for more natural feel of collisions
      this.y = 4;
      this.x = 3;
      if (enemy instanceof BrownBug) {
        this.health.value -= 10;
      } else if (enemy instanceof BlueBug) {
        this.health.value -= 15;
      } else if (enemy instanceof RedBug) {
        this.health.value -= 20;
      } else if (enemy instanceof RainbowBug) {
        this.health.value -= 25;
      } else {
        console.log('What kind of bug was that?!');
      }
      if (this.lives.value >= 0 && this.health.value > 0) { //EN: the last 'OUCH!' shouldn't prevent the 'GAME OVER' splash
        splashHit.render();
      } else {splashGameOver.render();}
    }
  }
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});

var Splash = function(reason) {
  switch (reason) {
    case 'drowned':
      this.content = player.lives;
      this.fillColor = 'rgba(193, 95, 72, 0.5)';
      this.strokeColor = 'rgba(128, 0, 0, 1)';
      this.duration = 3; //EN: passed to the setInterval()
    break;
    case 'hit':
      this.content = {value: 'OUCH!'};
      this.fillColor = 'rgba(128, 0, 0, 0.7)';
      this.strokeColor = 'rgba(228, 157, 157, 1)';
      this.duration = 1;
    break;
    case 'crossed':
      this.content = currentLevel.hopsLeft;
      this.fillColor = 'rgba(95, 193, 72, 0.5)';
      this.strokeColor = 'rgba(0, 128, 0, 1)';
      this.duration = 3;
    break;
    case 'game over': //EN: lives === -1
      this.content = {value: 'GAME OVER'};
      this.fillColor = 'rgba(200, 72, 72, 0.5)';
      this.strokeColor = 'rgba(88, 0, 0, 1)';
      this.duration = 15;
    break;
    case 'level up': //EN: new level
      this.content = {value: currentLevel.level + 1};
      this.fillColor = 'rgba(72, 95, 193, 0.5)';
      this.strokeColor = 'rgba(0, 0, 128, 1)';
      this.duration = 8;
    break;
    case 'win': //EN: finished level 5
      this.content = {value: 'HURRAY!'};
      this.fillColor = 'rgba(255, 200, 10, 0.7)';
      this.strokeColor = 'rgba(155, 100, 2, 1)';
      this.duration = 15;
    break;
  }
};

canvasSplash.available = true; //EN: to prevent conflucts between splashes
Splash.prototype.render = function() {
  if (canvasSplash.available === true) {
    canvasSplash.available = false;
    var size = 0;
    var interval = setInterval(zoom, this.duration);
    var self = this;
    function zoom() {
      if (size === 300) {
        ctxSplash.clearRect(0, 0, canvasSplash.width, canvasSplash.height);
        clearInterval(interval);
        canvasSplash.available = true;
      } else {
        ctxSplash.clearRect(0, 0, canvasSplash.width, canvasSplash.height);
        ctxSplash.font = size + 'px "Baloo"';
        ctxSplash.fillStyle = self.fillColor;
        ctxSplash.strokeStyle = self.strokeColor;
        ctxSplash.lineWidth = size / 50;
        ctxSplash.textAlign = 'center';
        ctxSplash.textBaseline = 'middle';
        ctxSplash.fillText(self.content.value, canvasSplash.width / 2, canvasSplash.height / 2);
        ctxSplash.strokeText(self.content.value, canvasSplash.width / 2, canvasSplash.height / 2);
        size++;
      }
    }
  }
};

var splashDrown = new Splash('drowned');
var splashHit = new Splash('hit');
var splashGameOver = new Splash('game over');
var splashWin = new Splash('win');

var frame = {
  render: function() {
    ctx.scale(ratio, ratio);
    /*
     * EN: Level and score indicators
     */
    var lvl = currentLevel.level;
    ctx.font = '55px "Baloo"';
    ctx.fillStyle = 'rgb(95, 193, 72)';
    ctx.strokeStyle = 'rgb(107, 87, 97)';
    ctx.lineWidth = 2;
    ctx.fillText('LEVEL ' + lvl, 72, 110);
    ctx.strokeText('LEVEL ' + lvl, 72, 110);

    var score = player.score.value;
    ctx.font = '35px "Baloo"';
    ctx.fillStyle = 'rgb(162, 195, 168)';
    ctx.fillText('SCORE: ' + score, 72, 170);
    ctx.strokeText('SCORE: ' + score, 72, 170);

    /*
     * EN: Lives and health indicators
     */
    var lives = player.lives.value;
    for (var i = 0; i < lives; i++) {
      ctx.drawImage(Resources.get('images/heart-small.png'), 851 - 72 - (i + 1) * 55, 44); //EN: 851px is the original canvas.width, before scaling
    }

    var health = player.health.value;
    var x0 = 851 - 72 - 250 * health / 100;
    var gradient = ctx.createLinearGradient(x0, 140, x0, 170);
    gradient.addColorStop(0, 'rgb(246, 153, 107)');
    gradient.addColorStop(0.3, 'rgb(229, 67, 0)');
    gradient.addColorStop(0.6, 'rgb(229, 67, 0)');
    gradient.addColorStop(1, 'rgb(192, 56, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(x0, 140, 250 * health / 100, 30);
    ctx.strokeRect(851 - 72 - 250, 140, 250, 30);
    ctx.scale(1 / ratio, 1 / ratio);
  }
};
