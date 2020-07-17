class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.player = new Player(this);
    this.x = this.player.x;
    this.y = this.player.y;
    this.infections = [];
    this.protection = [];
    this.protection2 = [];
    this.vaccines = [];
    this.scoreboard = new Scoreboard(this);
    this.running = true;
    this.setKeyBindings();
    this.createInfections();
    this.createProtection();
    this.createProtection2();
    //this.move();
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

  createProtection2() {
    for (let i = 0; i < 3; i++) {
      let protectiveGear2 = new Protection2(this);
      this.protection2.push(protectiveGear2);
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
  //move(direction) {
  //  this.x += direction * 10;
  //  this.y += direction * 10;

  setKeyBindings() {
    window.addEventListener('keydown', event => {
      const key = event.keyCode;

      event.preventDefault();
      switch (key) {
        case 38:
          if (this.running) {
            this.player.y -= 20;
          }
          //this.y.move(-1);
          break;
        case 40:
          if (this.running) {
            this.player.y += 20;
          }
          //this.y.move(1);
          break;
        case 37:
          if (this.running) {
            this.player.x -= 20;
          }
          // this.x.move(-1);
          break;
        case 39:
          if (this.running) {
            this.player.x += 20;
          }
          // this.x.move(1);
          break;
        case 32:
          if (this.running) {
            let vaccine = new VaccineDrops(this);
            this.vaccines.push(vaccine);
          }
          break;
      }
    });
  }
  detectProtectionCollisionWithInfection() {
    for (let protection of this.protection) {
      for (let infection of this.infections) {
        if (
          protection.x + protection.width > infection.x &&
          protection.x < infection.x + infection.width &&
          protection.y + protection.height > infection.y &&
          protection.y < infection.y + infection.height
        ) {
          this.player.health -= 10;
          this.protection.splice(this.protection.indexOf(protection), 1);

          //console.log(this.protection.length);
        }
      }
    }
  }
  detectProtection2CollisionWithInfection() {
    for (let protection of this.protection2) {
      for (let infection of this.infections) {
        if (
          protection.x + protection.width > infection.x &&
          protection.x < infection.x + infection.width &&
          protection.y + protection.height > infection.y &&
          protection.y < infection.y + infection.height
        ) {
          this.player.health -= 10;
          this.protection2.splice(this.protection2.indexOf(protection), 1);

          //console.log(this.protection.length);
        }
      }
    }
  }

  detectVaccineCollisionWithInfection() {
    for (let vaccine of this.vaccines) {
      for (let infection of this.infections) {
        if (
          vaccine.x + vaccine.width > infection.x &&
          vaccine.x < infection.x + infection.width &&
          vaccine.y + vaccine.height > infection.y &&
          vaccine.y < infection.y + infection.height
        ) {
          this.player.health += 20;
          this.vaccines.splice(this.vaccines.indexOf(vaccine), 1);
          this.infections.splice(this.infections.indexOf(infection), 1);

          //console.log(this.protection.length);
        }
      }
    }
  }

  detectVaccineCollisionWithProtection() {
    for (let vaccine of this.vaccines) {
      for (let protection of this.protection) {
        if (
          vaccine.x + vaccine.width > protection.x &&
          vaccine.x < protection.x + protection.width &&
          vaccine.y + vaccine.height > protection.y &&
          vaccine.y < protection.y + protection.height
        ) {
          this.player.health -= 50;
          this.vaccines.splice(this.vaccines.indexOf(vaccine), 1);
          this.protection.splice(this.protection.indexOf(protection), 1);

          //console.log(this.protection.length);
        }
      }
    }
  }

  detectVaccineCollisionWithProtection2() {
    for (let vaccine of this.vaccines) {
      for (let protection of this.protection2) {
        if (
          vaccine.x + vaccine.width > protection.x &&
          vaccine.x < protection.x + protection.width &&
          vaccine.y + vaccine.height > protection.y &&
          vaccine.y < protection.y + protection.height
        ) {
          this.player.health -= 20;
          this.vaccines.splice(this.vaccines.indexOf(vaccine), 1);
          this.protection2.splice(this.protection2.indexOf(protection), 1);
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
        this.player.health += 20;
        this.protection.splice(this.protection.indexOf(protection), 1);
      } else if (protection.height + protection.y > this.height) {
        this.protection.splice(this.protection.indexOf(protection), 1);
      }
    }
  }

  detectProtection2Collision() {
    for (let protection of this.protection2) {
      if (
        this.player.x + this.player.width > protection.x &&
        this.player.x < protection.x + protection.width &&
        this.player.y + this.player.height > protection.y &&
        this.player.y < protection.y + protection.height
      ) {
        this.player.health += 20;
        this.protection2.splice(this.protection2.indexOf(protection), 1);
      } else if (protection.height + protection.y > this.height) {
        this.protection2.splice(this.protection2.indexOf(protection), 1);
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
        this.player.health -= 20;
        this.infections.splice(this.infections.indexOf(infection), 1);

        console.log(this.infections.length);
      } else if (infection.height + infection.y > this.height) {
        this.infections.splice(this.infections.indexOf(infection), 1);
      }
    }
  }

  runLogic(timestamp) {
    this.player.runLogic();

    for (let infection of this.infections) {
      infection.runLogic(timestamp);
    }

    for (let protectiveGear of this.protection) {
      protectiveGear.runLogic();
    }
    for (let protectiveGear of this.protection2) {
      protectiveGear.runLogic();
    }
    if (this.infections.length === 18) {
      console.log(this.infections.length);
      this.createInfections();
    }
    if (this.protection.length === 0) {
      this.createProtection();
    }
    if (this.protection2.length === 0) {
      this.createProtection2();
    }
    for (let vaccine of this.vaccines) {
      vaccine.runLogic();
    }
    if (this.player.health === 0) {
      //console.log(this.player.health);
      this.lose();
    }

    this.setPlayerBoundaries();
    this.setInfectionBoundaries();
    this.detectInfectionCollision();
    this.detectProtectionCollision();
    this.detectProtection2Collision();
    this.detectVaccineCollisionWithInfection();
    this.detectVaccineCollisionWithProtection();
    this.detectVaccineCollisionWithProtection2();
    this.detectProtectionCollisionWithInfection();
    this.detectProtection2CollisionWithInfection();
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
    for (let protectiveGear of this.protection2) {
      protectiveGear.paint();
    }

    //paint scoreboard
    this.scoreboard.paint();

    if (this.player.health <= 0) {
      this.paintLose();
    }
  }

  lose() {
    this.running = false;
  }

  paintLose() {
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.fillStyle = 'greenyellow';
    this.context.font = '30px Arial';
    this.context.fillText('GAME OVER!!!', 80, 260);
    this.context.fillText('...YOU HAVE BEEN INFECTED!!!', 100, 300);
  }

  loop(timestamp) {
    this.runLogic(timestamp);
    this.clean();

    //this.lose();

    if (this.running) {
      window.requestAnimationFrame(timestamp => this.loop(timestamp));
    }
    this.paint();
  }
}
