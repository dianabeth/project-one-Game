class VaccineDrops {
  constructor(game) {
    this.game = game;
    this.width = 5;
    this.height = 10;
    this.speed = 1;
    this.x = this.game.player.x + 10;
    this.y = this.game.player.y;
  }

  runLogic() {
    this.y -= this.speed;
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.fillStyle = 'black';
    context.fillRect(this.x, this.y, this.width, this.height);
    context.restore();
  }
}

class Scoreboard {
  constructor(game) {
    this.game = game;
  }
  paint() {
    const context = this.game.context;
    const score = this.game.player.health;

    context.save();
    context.fillStyle = 'yellow';
    context.font = '32px sans-serif';
    context.fillText('Health: ' + score, 400, 100);

    context.restore();
  }
}

//https://i2.wp.com/i.pinimg.com/474x/7a/95/a0/7a95a09cecc36ba20ef6594ddaf5b685.jpg
