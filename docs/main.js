const canvasEl = document.getElementById('canvas');
const app = new PIXI.Application({ resizeTo: canvasEl, backgroundColor: 0x0B0F1F });
canvasEl.appendChild(app.view);

// Responsive resize
window.addEventListener('resize', () => app.renderer.resize(canvasEl.clientWidth, canvasEl.clientHeight));

// UI elements
const betSlider = document.getElementById('bet');
const betValue = document.getElementById('betValue');
const spinBtn = document.getElementById('spinBtn');
const rewardBtn = document.getElementById('rewardBtn');
const balanceEl = document.getElementById('balance');

betSlider.addEventListener('input', () => betValue.textContent = betSlider.value);

// Demo spin animation
spinBtn.addEventListener('click', () => {
  spinBtn.disabled = true;
  const frame = new PIXI.Graphics();
  frame.lineStyle(4, 0x00FFF0, 1).drawRoundedRect(10, 10, app.view.width - 20, app.view.height - 20, 12);
  app.stage.addChild(frame);
  setTimeout(() => { spinBtn.disabled = false; app.stage.removeChild(frame); }, 600);
});

// Demo reward button
rewardBtn.addEventListener('click', () => {
  const newBal = Number(balanceEl.textContent) + 500;
  balanceEl.textContent = newBal;
});
