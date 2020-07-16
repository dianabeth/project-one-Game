class Player {
  constructor(game) {
    this.game = game;
    this.x = 250;
    this.y = 400;
    this.speedX = 10;
    this.speedY = 10;

    this.width = this.game.width;
    this.height = this.game.height;

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
    console.log(collusion);
    //return collusion;
  }

  runLogic() {
    /* const colliding = this.checkCollisionWithProtection();
    if (colliding) {
      this.game.protection.setRandomPosition();
    }
    for (let protectiveGear of this.game.protection) {
      protectiveGear.runLogic();

      /*const colliding = this.checkCollisionWithProtection();
      if (colliding) {
        const index = this.game.protection.indexOf(protectiveGear);
        this.health += 50;
        this.game.protection.splice(index, 1);
      }
      if (this.game.protection.x + this.game.protection.width < 0) {
        // Remove enemy from array of enemies
        const index = this.game.protection.indexOf(protectiveGear);
        this.game.protection.splice(index, 1);
      }
    }
    if (this.game.protection.length < 2) {
      const protection = new Protection(
        (1 + Math.random()) * this.width,
        Math.random() * this.height,
        2.5 + Math.random() * 0.5,
        Math.random() * 10,
        Math.random() * 10
      );
      this.game.protection.push(protection);
    }
  }*/
  }
  paint() {
    const context = this.game.context;
    context.save();
    context.fillStyle = 'wheat';
    context.fillRect(this.x, this.y, this.width - 25, this.height + 25);
    context.restore();
  }
}
