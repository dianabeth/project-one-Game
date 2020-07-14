class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.width = 50;
    this.height = 50;
    this.player = new Player(this);
    this.infections = [];
    this.prize = new Prize(this);
    this.scoreboard = new Scoreboard(this);
    //this.prize.setRandomPosition();
    this.setKeyBindings();
    this.createInfections();
    //this.setBoundaries();
  }
  createInfections() {
    for (let i = 0; i < 8; i++) {
      let infection = new Infection(this);
      this.infections.push(infection);
    }
  }

  /*createPrizes () {
   
      for (let i = 0; i < 10; i++) {
      let  infection = new Infection(this);
        this.infections.push(infection);
      }
  
  
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
      }
    });
  }
  checkIntersection(player) {
    return (
      player.x + player.width > this.x &&
      player.x < this.x + this.width &&
      player.y + player.height > this.y &&
      player.y < this.y + this.height
    );
  }

  runLogic() {
    this.player.runLogic();
    for (let infection of this.infections) {
      infection.runLogic();
    }
    this.prize.runLogic();
  }

  clean() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    this.player.paint();
    for (let infection of this.infections) {
      infection.paint();
    }
    this.prize.paint();
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
