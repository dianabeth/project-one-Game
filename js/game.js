class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.width = 50;
    this.height = 50;
    this.player = new Player(this);
    this.infections = [];
    this.protection = [];
    this.vaccines = [];
    this.scoreboard = new Scoreboard(this);
    this.setKeyBindings();
    this.createInfections();
    this.createProtection();
    //this.checkCollusion();
    this.createVaccineDrops();
    //this.setBoundaries();
  }
  createInfections() {
    for (let i = 0; i < 16; i++) {
      let infection = new Infection(this);
      this.infections.push(infection);
    }
  }

  createProtection() {
    for (let i = 0; i < 5; i++) {
      let protectiveGear = new Protection(this);
      this.protection.push(protectiveGear);
    }
  }

  createVaccineDrops() {
    for (let i = 0; i < 15; i++) {
      let vaccine = new VaccineDrops(this);
      this.vaccines.push(vaccine);
    }
  }
  /*
  setBoundaries() {
    if (this.player.x >= this.width || this.player.x <= 0) {
      // this.speedX = this.speedX * -1;
      this.speedX = 0;
    } 
    if (this.player.y >= this.height || this.player.y <= 0) {
      // this.speedY = this.speedY * -1;
      this.speedY *= -1 ;
    }
  }*/

  setKeyBindings() {
    window.addEventListener('keydown', event => {
      const key = event.key;

      event.preventDefault();
      switch (key) {
        case 'ArrowUp':
          this.player.y -= 15;
          break;
        case 'ArrowDown':
          this.player.y += 15;
          break;
        case 'ArrowLeft':
          this.player.x -= 15;
          break;
        case 'ArrowRight':
          this.player.x += 15;
          break;
        case 'Space':
          let vaccine = new VaccineDrops();
          this.vaccines.push(vaccine);
          break;
      }
    });
  }

  checkCollusion(player) {
    if (this.player.x > this.infection.x || this.infection.x > this.player.x) return false;
    if (this.player.y > this.infection.y || this.infection.y > this.player.y) return false;
    return true;
  }
  /*
  checkCollisionWithProtection() {
    const protection = this.protection;
    const x = protection.x;
    const y = protection.y;
    const collusion = this.checkCollusion([x, y]);
    console.log(collusion);
    //return collusion;
  }*/

  runLogic() {
    this.player.runLogic();

    for (let infection of this.infections) {
      infection.runLogic();
    }
    for (let protectiveGear of this.protection) {
      protectiveGear.runLogic();
    }

    for (let vaccine of this.vaccines) {
        vaccine.runLogic();
    }
  }

  clean() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    for (let i = 0; i < this.vaccines.length; i++) {
      this.vaccines[i].paint();
    }
    //paint player
    this.player.paint();
    //paint infections
    for (let infection of this.infections) {
      infection.paint();
    }
    //paint protectiveGear
    for (let protectiveGear of this.protection) {
      protectiveGear.paint();
    }
    //paint vaccine
    //this.vaccine = new VaccineDrops(this);
    //for (let i = 0; i < this.vaccine.length; i++) {
    //  vaccineArray[i].paint();
    //}
    //paint scoreboard
    this.scoreboard.paint();
  }

  loop() {
    this.runLogic();
    this.clean();
    this.paint();

    setTimeout(() => {
      this.loop();
    }, 1000 / 60);
  }
}
