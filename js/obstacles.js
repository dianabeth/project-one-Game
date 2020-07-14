class Infection {
  constructor(game) {
    this.game = game;
    this.width = this.game.width;
    this.height = this.game.height;
    this.speed = 2;
    this.setRandomPosition();
  }
  setRandomPosition() {
    this.x = Math.floor(Math.random() * this.width * 10);
    this.y = Math.floor(Math.random() * this.height * 10);
  }

  runLogic() {
    this.y += this.speed;
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, this.width, this.height);
    context.restore();
  }
}

class Prize {
  constructor(game) {
    this.game = game;
    this.width = this.game.width;
    this.height = this.game.height;
    this.speed = 1;
    this.setRandomPosition();
  }
  setRandomPosition() {
    this.x = Math.floor(Math.random() * this.width * 10);
    this.y = Math.floor(Math.random() * this.height * 10);
  }
  runLogic() {
    this.y += this.speed;
  }
  paint() {
    const context = this.game.context;
    context.save();
    context.fillStyle = 'magenta';
    context.fillRect(this.x, this.y, this.width, this.height);
    context.restore();
  }
}
