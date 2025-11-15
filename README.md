# neon-vegas-slot
neon vegas slot prototype


Why these three files

index.html: The shell GitHub Pages will serve.

style.css: Your neon-retro theme, responsive by default.

main.js: Verifies your front-end loads in the browser; you’ll later connect it to the backend.

Why store these in /docs 
docs/paylines.json
 docs/paytable.json
  docs/strips.json

Clarity for Showing your math and fairness structure.

Single source of truth: Frontend can load these JSONs to render accurate visuals matching backend logic later.
 m












 Line‑by‑line explanation for index.html

<!doctype html> → Declares HTML5.

<meta charset> → Ensures proper text encoding.

<meta viewport> → Makes layout responsive on mobile.

<title> → Browser tab title.

<link rel="stylesheet"> → Connects to your neon theme CSS.

<div class="app"> → Master container for header, game, and controls.

<header> → Shows game title and balance.

<main> → Holds the PixiJS canvas where reels will render.

<footer> → Contains bet slider and buttons.

<script src="pixi.js"> → Loads PixiJS graphics library.

<script src="main.js"> → Loads your game logic.

Customization
Change <h1>Neon Vegas</h1> to your brand name.

Add disclaimers like “Prototype — virtual coins only” under header.

Adjust slider range (min, max) to match your bet sizes.










line‑by‑line explanation for styles.css 


:root → Defines neon color palette variables.

html, body → Sets background, text color, font.

.app → Flex column layout for header, game, footer.

.topbar → Header styling with neon glow on title and balance.

.game → Centers the canvas.

#canvas → Responsive game area with neon border and glow.

.controls → Footer with buttons styled neon cyan.

.bet → Bet slider styling.

@media → Mobile responsiveness: canvas becomes taller (3:4 ratio).

Customization
Swap neon colors for your preferred palette.

Adjust max-width for canvas to fit your design.

Add animations (CSS keyframes) for glowing header text.




Line‑by‑line explanation for Main.js
const canvasEl → Gets the canvas container.

new PIXI.Application → Creates a PixiJS app that fills the container.

resizeTo → Makes Pixi auto‑resize with the container.

window.addEventListener('resize') → Ensures responsive redraw.

betSlider → Range input for bet size.

spinBtn → Spin button.

rewardBtn → Demo coin refill button.

balanceEl → Balance display span.

betSlider.addEventListener → Updates displayed bet value live.

spinBtn.addEventListener → Demo spin animation (neon frame flashes).

rewardBtn.addEventListener → Adds 500 demo coins to balance.

Customization
Replace demo spin animation with actual reel logic later.

Add sound effects (Howler.js) when spin or reward triggers.

Animate balance changes (fade or glow when updated).