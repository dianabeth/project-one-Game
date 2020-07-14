class Player {
  constructor(game) {
    this.game = game;
    this.x = 250;
    this.y = 400;
    this.speedX = 10;
    this.speedY = 10;

    this.width = this.game.height;
    this.height = this.game.height;

    this.health = 500;
  }

  position() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  runLogic() {}
  paint() {
    const context = this.game.context;
    context.save();
    context.fillStyle = 'wheat';
    context.fillRect(this.x, this.y, this.width - 25, this.height + 25);
    context.restore();
  }
}
