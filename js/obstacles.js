const infectionImage = new Image();
infectionImage.src =
  'https://png.pngtree.com/png-clipart/20200330/ourlarge/pngtree-red-covid-19-bacteria-isolated-on-transparent-background-3d-rendering-of-png-image_2167952.jpg';

class Infection {
  constructor(game) {
    this.game = game;
    this.width = 20;
    this.height = 20;
    this.speed = 2;
    this.setRandomPosition();
  }
  setRandomPosition() {
    this.x = Math.floor(Math.random() * 10 * 50);
    this.y = Math.floor(Math.random() * 10 * 50);
  }

  runLogic() {
    this.y += this.speed;
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.drawImage(infectionImage, this.x, this.y, this.width, this.height);
    context.restore();
  }
}

protectionImage = new Image();
protectionImage.src =
  'https://png.pngtree.com/png-vector/20200419/ourlarge/pngtree-please-stay-home-for-kids-prevent-corona-virus-covid-19-png-image_2179787.jpg';
class Protection {
  constructor(game) {
    this.game = game;
    this.width = 50;
    this.height = 50;
    //this.speed = 1;
    this.setRandomPosition();
  }
  setRandomPosition() {
    this.x = Math.floor(Math.random() * 10 * 50);
    this.y = Math.floor(Math.random() * 10 * 50);
  }
  runLogic() {
    //this.y += this.speed;
  }
  paint() {
    const context = this.game.context;
    context.save();
    context.drawImage(protectionImage, this.x, this.y, this.width, this.height);
    context.restore();
  }
}

/*protectionImage2 = new Image();
protectionImage.src =
  'https://png.pngtree.com/png-vector/20200419/ourlarge/pngtree-please-stay-home-for-kids-prevent-corona-virus-covid-19-png-image_2179787.jpg';
class Protection {
  constructor(game) {
    this.game = game;
    this.width = 50;
    this.height = 50;
    //this.speed = 1;
    this.setRandomPosition();
  }
  setRandomPosition() {
    this.x = Math.floor(Math.random() * 10 * 50);
    this.y = Math.floor(Math.random() * 10 * 50);
  }
  runLogic() {
    //this.y += this.speed;
  }
  paint() {
    const context = this.game.context;
    context.save();
    context.drawImage(protectionImage, this.x, this.y, this.width, this.height);
    context.restore();
  }
}*/
