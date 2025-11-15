// stub that shows the canvas working

const canvasEl = document.getElementById('canvas');
const app = new PIXI.Application({ resizeTo: canvasEl, backgroundColor: 0x0B0F1F });
canvasEl.appendChild(app.view);

window.addEventListener('resize', () => app.renderer.resize(canvasEl.clientWidth, canvasEl.clientHeight));

const betSlider = document.getElementById('bet');
const betValue = document.getElementById('betValue');
betSlider.addEventListener('input', () => betValue.textContent = betSlider.value);

const spinBtn = document.getElementById('spinBtn');
spinBtn.addEventListener('click', () => {
  spinBtn.disabled = true;
  // Placeholder: reel animation preview
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(4, 0x00FFF0, 1).drawRoundedRect(10, 10, app.view.width - 20, app.view.height - 20, 12);
  app.stage.addChild(graphics);
  setTimeout(() => { spinBtn.disabled = false; app.stage.removeChild(graphics); }, 600);
});

const rewardBtn = document.getElementById('rewardBtn');
rewardBtn.addEventListener('click', () => {
  const balEl = document.getElementById('balance');
  const newBal = Number(balEl.textContent) + 500;
  balEl.textContent = newBal;
});
