const playerImage = new Image();
playerImage.src =
  'https://png.pngtree.com/png-clipart/20200304/ourlarge/pngtree-hand-drawn-2019-new-corona-virus-wearing-mask-protection-png-image_2156538.jpg';

class Player {
  constructor(game) {
    this.game = game;
    this.x = 250;
    this.y = 480;
    this.speedX = 10;
    this.speedY = 10;

    this.width = 50;
    this.height = 70;

    this.health = 500;
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
  }
  paint() {
    const context = this.game.context;
    context.save();
    context.drawImage(playerImage, this.x, this.y, this.width, this.height);
    context.restore();
  }
}
