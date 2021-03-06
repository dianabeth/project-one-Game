window.addEventListener('load', event => {
  const button = document.getElementById('play');
  button.addEventListener('click', () => {
    const canvasElement = document.getElementById('game');
    const game = new Game(canvasElement);

    game.loop();
  });
});

const pausebtn = document.getElementById('pause');
pausebtn.addEventListener('click', () => {
  const canvasElement = document.getElementById('game');
  const game = new Game(canvasElement);

  game.pause();
});

const replaybtn = document.getElementById('replay');
replaybtn.addEventListener('click', () => {
  const canvasElement = document.getElementById('game');
  const game = new Game(canvasElement);

  game.loop();
});
