const playerImage = new Image();
playerImage.src = '/images/hiclipart.com (2).png';

class Player {
  constructor(game) {
    this.game = game;
    this.x = 250;
    this.y = 250;
    this.speedX = 20;
    this.speedY = 20;

    this.width = 50;
    this.height = 50;

    this.health = 1000;
  }

  position() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  checkCollisionWithProtection() {
    const protection = this.game.protection;
    const x = protection.x;
    const y = protection.y;
    const collusion = this.checkCollusion([x, y]);
    return collusion;
  }

  runLogic() {
    if (this.y + this.speedY < 0) {
      this.speedY = 0;
    }
    if (this.health <= 0) {
      this.game.lose();
    }
  }
  paint() {
    const context = this.game.context;
    context.save();
    context.drawImage(playerImage, this.x, this.y, this.width, this.height);
    context.restore();
  }
}
