class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.width = this.canvas.height;
    this.height = this.canvas.height;
    this.player = new Player(this);
    this.infections = [];
    this.protection = [];
    this.vaccines = [];
    this.scoreboard = new Scoreboard(this);
    this.running = true;
    this.setKeyBindings();
    this.createInfections();
    this.createProtection();
    //this.infectionCollision();

    //this.setBoundaries();
  }
  createInfections() {
    for (let i = 0; i < 20; i++) {
      const infection = new Infection(this);
      this.infections.push(infection);
    }
  }

  createProtection() {
    for (let i = 0; i < 3; i++) {
      let protectiveGear = new Protection(this);
      this.protection.push(protectiveGear);
    }
  }

  setPlayerBoundaries() {
    if (this.player.x + this.player.width >= this.width) {
      this.player.x = this.canvas.width - this.player.width;
    }
    if (this.player.x <= 0) {
      this.player.x = 0;
    }
    if (this.player.y + this.player.height >= this.height) {
      this.player.y = this.height - this.player.height;
    }
    if (this.player.y <= 0) {
      this.player.y = 0;
    }
  }

  setInfectionBoundaries() {
    if (this.infections.x + this.infections.width >= this.width) {
      this.infections.x = this.canvas.width - this.infections.width;
    }
    if (this.infections.x <= 0) {
      this.infections.x = 0;
    }
    if (this.infections.y + this.infections.height >= this.height) {
      this.infections.y = this.height - this.infections.height;
    }
    if (this.infections.y <= 0) {
      this.infections.y = 0;
    }
  }
  setKeyBindings() {
    window.addEventListener('keydown', event => {
      const key = event.keyCode;

      event.preventDefault();
      switch (key) {
        case 38:
          this.player.y -= 15;
          break;
        case 40:
          this.player.y += 15;
          break;
        case 37:
          this.player.x -= 15;
          break;
        case 39:
          this.player.x += 15;
          break;
        case 32:
          let vaccine = new VaccineDrops(this);
          this.vaccines.push(vaccine);
          break;
      }
    });
  }

  detectVaccineCollision() {
    for (let vaccine of this.vaccines) {
      for (let infection of this.infections) {
        if (
          vaccine.x + vaccine.width > infection.x &&
          vaccine.x < infection.x + infection.width &&
          vaccine.y + vaccine.height > infection.y &&
          vaccine.y < infection.y + infection.height
        ) {
          this.player.health += 5;
          this.vaccines.splice(this.vaccines.indexOf(vaccine), 1);
          this.infections.splice(this.infections.indexOf(infection), 1);

          console.log(this.protection.length);
        }
      }
    }
  }

  detectProtectionCollision() {
    for (let protection of this.protection) {
      if (
        this.player.x + this.player.width > protection.x &&
        this.player.x < protection.x + protection.width &&
        this.player.y + this.player.height > protection.y &&
        this.player.y < protection.y + protection.height
      ) {
        this.player.health += 5;
        this.protection.splice(this.protection.indexOf(protection), 1);
      } else if (protection.height + protection.y > this.height) {
        this.protection.splice(this.protection.indexOf(protection), 1);
      }
    }
  }

  detectInfectionCollision() {
    for (let infection of this.infections) {
      if (
        this.player.x + this.player.width > infection.x &&
        this.player.x < infection.x + infection.width &&
        this.player.y + this.player.height > infection.y &&
        this.player.y < infection.y + infection.height
      ) {
        this.player.health -= 50;
        this.infections.splice(this.infections.indexOf(infection), 1);

        console.log(this.infections.length);
      } else if (infection.height + infection.y > this.height) {
        this.infections.splice(this.infections.indexOf(infection), 1);
      }
    }
  }

  runLogic() {
    this.player.runLogic();

    for (let infection of this.infections) {
      infection.runLogic();
    }

    for (let protectiveGear of this.protection) {
      protectiveGear.runLogic();
    }
    if (this.infections.length === 0) {
      this.createInfections();
    }
    if (this.protection.length === 0) {
      this.createProtection();
    }
    for (let vaccine of this.vaccines) {
      vaccine.runLogic();
    }
    if (this.player.health <= 0) {
      this.lose();
    }

    this.setPlayerBoundaries();
    this.setInfectionBoundaries();
    this.detectVaccineCollision();
    this.detectInfectionCollision();
    this.detectProtectionCollision();
  }

  clean() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    for (let vaccine of this.vaccines) {
      vaccine.paint();
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

    //paint scoreboard
    this.scoreboard.paint();
  }

  lose() {
    if (this.loopId) {
      clearTimeout(this.loopId);
    }
  }

  loop() {
    this.runLogic();
    this.clean();
    this.paint();
    this.lose();

    if (this.running) {
      setTimeout(() => {
        this.loop();
      }, 1000 / 60);
    }
  }
}
