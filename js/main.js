window.addEventListener('load', event => {
  const canvasElement = document.getElementById('game');
  const game = new Game(canvasElement);
  //game.runLogic();
  //game.paint();
  game.loop();
});

