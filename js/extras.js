/*class Route {
  constructor (x, y, directionX, directionY) {
    this.point = new Point(x, y);
    this.direction = directionX;
    this.direction = directionY;
  } 
}*/

class VaccineDrops {
  constructor(game) {
    this.game = game;
    this.width = this.game.width;
    this.height = this.game.height;
    this.speed = 1;
    this.x = this.game.player.x;
    this.y = this.game.player.y;
  }

  runLogic() {
   this.y -= this.speed;
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.fillStyle = 'white';
    context.fillRect(this.x + 10, this.y, 5, 10);
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
    context.fillStyle = 'wheat';
    context.font = '32px sans-serif';
    context.fillText('Score: ' + score, 330, 400);

    context.restore();
  }
}
