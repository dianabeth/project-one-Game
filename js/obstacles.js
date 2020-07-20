const infectionImage = new Image();
infectionImage.src = 'https://www.dgaep.gov.pt/coronavirus/images/covid19.png';
//'https://png.pngtree.com/png-vector/20200601/ourlarge/pngtree-yellow-virus-cartoon-covid-19-illustration-png-image_2216573.jpg';

//'https://png.pngtree.com/png-clipart/20200330/ourlarge///pngtree-red-covid-19-bacteria-isolated-on-transparent-background-3//d-rendering-of-png-image_2167952.jpg';

class Infection {
  constructor(game) {
    this.game = game;
    this.width = 60;
    this.height = 40;
    this.speed = [];
    this.setSpeeds();
    this.yTimer = 0;
    this.yDelta = Math.random() * 5000 + 500;
    this.xTimer = 0;
    this.xDelta = Math.random() * 5000 + 500;
    this.index = 0;
    this.setRandomPosition();
  }
  setSpeeds() {
    for (let i = 1; i < 20; i++) {
      this.speed.push(i);
      this.speed.push(-i);
    }
  }
  setRandomPosition() {
    this.x = Math.floor(Math.random() * 10 * 50);
    this.y = Math.floor(Math.random() * 10 * 50);
  }

  runLogic(timestamp) {
    if (this.yTimer < timestamp - this.yDelta) {
      this.yTimer = timestamp;
      this.index = Math.floor(Math.random() * this.speed.length);
      this.y += this.speed[this.index];
    }
    if (this.xTimer < timestamp - this.xDelta) {
      this.xTimer = timestamp;
      this.index = Math.floor(Math.random() * this.speed.length);
      this.x += this.speed[this.index];
    }
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.drawImage(infectionImage, this.x, this.y, this.width, this.height);
    context.restore();
  }
}

protectionImage = new Image();
protectionImage.src = '/images/hiclipart.com (15).png';

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

protectionImage2 = new Image();
protectionImage2.src = '/images/hiclipart.com (7).png';

protectionImage3 = new Image();
protectionImage3.src = '/images/hiclipart.com (3).png';
class Protection2 {
  constructor(game) {
    this.game = game;
    this.width = 45;
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
    context.drawImage(protectionImage2, this.x, this.y, this.width, this.height);
    context.drawImage(protectionImage3, this.x + 50, this.y + 40, this.width, this.height);
    context.restore();
  }
}
