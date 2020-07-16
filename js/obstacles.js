class Infection {
  constructor(game) {
    this.game = game;
    this.width = this.game.width;
    this.height = this.game.height;
    this.speed = 1;
    this.setRandomPosition();
  }
  setRandomPosition() {
    this.x = Math.floor(Math.random() * 10 * this.width);
    this.y = Math.floor(Math.random() * 10 * 10);
  }

  runLogic() {
    this.y += this.speed;
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, this.width - 20, this.height-30);
    context.restore();
  }
}







class Protection {
  constructor(game) {
    this.game = game;
    this.width = this.game.width;
    this.height = this.game.height;
    this.speed = 0.8;
    this.setRandomPosition();
  }
  setRandomPosition() {
    this.x = Math.floor(Math.random() * 10 * this.width);
    this.y = Math.floor(Math.random() * 10 * 10);
  }
  runLogic() {
    this.y += this.speed;
  }
  paint() {
    const context = this.game.context;
    context.save();
    context.fillStyle = 'magenta';
    context.fillRect(this.x, this.y, this.width / 3, this.height / 4);
    context.restore();
  
  }
}
