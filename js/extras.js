/*class Route {
  constructor (x, y, directionX, directionY) {
    this.point = new Point(x, y);
    this.direction = directionX;
    this.direction = directionY;
  } 
}*/

class Scoreboard {
  constructor(game) {
    this.game = game;
  }
  paint() {
    const context = this.game.context;
    const score = this.game.player.health;

    context.save();
    context.fillStyle = 'green';
    context.font = '32px sans-serif';

    context.fillText('Score: ' + score, 330, 50);

    context.restore();
  }
}
