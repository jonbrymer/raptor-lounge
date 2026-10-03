/* ═══════════════════════════════════════════════════════════
   NEONDRIVE — COMPLETE GAME ENGINE
   Perspective road · Obstacle cars · Power-ups · Particles
   Physics · Scoring · Leaderboard · Mobile touch support
═══════════════════════════════════════════════════════════ */

'use strict';

// ─── CANVAS SETUP ────────────────────────────────────────────────────
const canvas = document.getElementById('game-canvas');
const ctx    = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', () => { resizeCanvas(); if (G.running) renderFrame(); });

// ─── TITLE ROAD CANVAS ───────────────────────────────────────────────
const titleCanvas = document.getElementById('title-road');
const tctx = titleCanvas ? titleCanvas.getContext('2d') : null;
function resizeTitleCanvas() {
  if (!titleCanvas) return;
  titleCanvas.width  = window.innerWidth;
  titleCanvas.height = window.innerHeight;
}
resizeTitleCanvas();
window.addEventListener('resize', resizeTitleCanvas);

// ─── CONSTANTS ───────────────────────────────────────────────────────
const LANES      = 5;
const MAX_HEALTH = 3;
const BASE_SPEED = 4;
const COLORS = {
  road:        '#141820',
  roadEdge:    '#1E2330',
  laneMark:    '#00FFD4',
  laneMarkDim: 'rgba(0,255,212,0.12)',
  horizon:     '#0A0C14',
  sky: [
    ['#0A0C14','#10142A'],
    ['#0A0C14','#18101A'],
    ['#0A0C14','#0C1418'],
  ],
  cars: [
    '#FF2D55','#FF6B2B','#FFD60A','#BF5AF2',
    '#0A84FF','#FF375F','#30D158','#5AC8FA',
    '#FF9F0A','#AC8E68',
  ],
};
const POWERUP_TYPES = ['shield','boost','magnet','star','nitro','freeze','coin','repair'];
// Rarity weighting — higher weight = more common
const PU_WEIGHTS = { shield:18, boost:18, magnet:16, star:12, nitro:14, freeze:12, coin:16, repair:6 };
function pickPowerUpType() {
  const total = POWERUP_TYPES.reduce((s, t) => s + (PU_WEIGHTS[t] || 10), 0);
  let r = Math.random() * total;
  for (const t of POWERUP_TYPES) {
    r -= (PU_WEIGHTS[t] || 10);
    if (r <= 0) return t;
  }
  return POWERUP_TYPES[POWERUP_TYPES.length - 1];
}
// Durations (in frames @60fps) for timed power-ups
const PU_DURATIONS = { boost:300, magnet:180, star:240, nitro:240, freeze:300 };

// ─── GAME STATE ──────────────────────────────────────────────────────
const G = {
  running:      false,
  paused:       false,
  score:        0,
  distance:     0,
  level:        1,
  speed:        BASE_SPEED,
  health:       MAX_HEALTH,
  frame:        0,
  animId:       null,
  playerLane:   2,        // 0–4
  playerX:      0,        // actual pixel X (smooth)
  playerY:      0,
  laneWidth:    0,
  laneTargetX:  0,
  laneMoving:   false,
  topSpeed:     0,
  dodgeStreak:  0,
  bestStreak:   0,
  scoreMulti:   1,
  lastObstacle: 0,
  obstacles:    [],
  powerUps:     [],
  particles:    [],
  explosions:   [],
  stars:        [],
  cityBuildings:[],
  activePUs:    { boost:0, magnet:0, star:0, nitro:0, freeze:0 },
  invincible:   false,
  keys:         {},
  laneChangeCD: 0,
  spawnTimer:   0,
  puSpawnTimer: 0,
  titleAnim:    0,
  titleRoadY:   0,
};

// ─── UTILS ───────────────────────────────────────────────────────────
const rnd  = (a, b) => a + Math.random() * (b - a);
const rndI = (a, b) => Math.floor(rnd(a, b + 1));
const lerp = (a, b, t) => a + (b - a) * t;
const clamp= (v, lo, hi) => Math.max(lo, Math.min(hi, v));

function laneX(lane) {
  const roadLeft  = canvas.width  * 0.18;
  const roadRight = canvas.width  * 0.82;
  const lw        = (roadRight - roadLeft) / LANES;
  return roadLeft + lw * lane + lw * 0.5;
}
function getLaneWidth() {
  return (canvas.width * 0.64) / LANES;
}

// ─── CITY SKYLINE GENERATOR ──────────────────────────────────────────
function generateCityBuildings() {
  G.cityBuildings = [];
  const count = 28;
  for (let i = 0; i < count; i++) {
    G.cityBuildings.push({
      x:      (canvas.width / count) * i + rnd(-10, 10),
      w:      rnd(30, 90),
      h:      rnd(40, 160),
      color:  `hsl(${220 + rnd(-20,20)}, ${rnd(15,30)}%, ${rnd(8,18)}%)`,
      winRows:Math.floor(rnd(2, 6)),
      winCols:Math.floor(rnd(2, 5)),
      lit:    Array.from({length: 30}, () => Math.random() > 0.55),
    });
  }
}

function drawCitySkyline(scroll) {
  const horizonY = canvas.height * 0.42;
  G.cityBuildings.forEach(b => {
    const bx = ((b.x - scroll * 0.15) % canvas.width + canvas.width) % canvas.width;
    const by = horizonY - b.h;
    // Building body
    ctx.fillStyle = b.color;
    ctx.fillRect(bx, by, b.w, b.h);
    // Windows
    const ww = b.w / (b.winCols + 1) * 0.6;
    const wh = b.h  / (b.winRows + 1) * 0.45;
    for (let r = 0; r < b.winRows; r++) {
      for (let c = 0; c < b.winCols; c++) {
        const idx = r * b.winCols + c;
        const lit = b.lit[idx % b.lit.length];
        const wx = bx + b.w * (c + 1) / (b.winCols + 1) - ww / 2;
        const wy = by + b.h * (r + 1) / (b.winRows + 1);
        ctx.fillStyle = lit
          ? `rgba(255,230,150,${rnd(0.6,0.95)})`
          : 'rgba(0,0,0,0.4)';
        ctx.fillRect(wx, wy, ww, wh);
      }
    }
    // Antenna on tall buildings
    if (b.h > 100) {
      ctx.fillStyle = '#2a2f40';
      ctx.fillRect(bx + b.w/2 - 1, by - 20, 2, 20);
      ctx.beginPath();
      ctx.arc(bx + b.w/2, by - 20, 3, 0, Math.PI*2);
      ctx.fillStyle = `rgba(255,50,50,${0.5 + 0.5*Math.sin(G.frame*0.05)})`;
      ctx.fill();
    }
  });
}

// ─── STAR FIELD ──────────────────────────────────────────────────────
function initStars() {
  G.stars = Array.from({length: 80}, () => ({
    x: rnd(0, canvas.width),
    y: rnd(0, canvas.height * 0.42),
    r: rnd(0.3, 1.5),
    a: rnd(0, 1),
    speed: rnd(0.003, 0.012),
  }));
}

function drawStars() {
  G.stars.forEach(s => {
    s.a += s.speed;
    const alpha = 0.3 + 0.7 * Math.abs(Math.sin(s.a));
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(200,220,255,${alpha})`;
    ctx.fill();
  });
}

// ─── PERSPECTIVE ROAD ─────────────────────────────────────────────────
function drawRoad() {
  const W  = canvas.width;
  const H  = canvas.height;
  const hy = H * 0.42;   // horizon Y
  const vx = W * 0.5;    // vanishing X

  // Sky gradient
  const skyGrad = ctx.createLinearGradient(0, 0, 0, hy);
  skyGrad.addColorStop(0, '#04060E');
  skyGrad.addColorStop(1, '#0E1428');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, W, hy);

  // Horizon glow
  const horizGrad = ctx.createRadialGradient(vx, hy, 0, vx, hy, W*0.6);
  horizGrad.addColorStop(0, 'rgba(0,255,212,0.08)');
  horizGrad.addColorStop(0.5,'rgba(0,100,255,0.04)');
  horizGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = horizGrad;
  ctx.fillRect(0, 0, W, hy + 60);

  // Road surface (trapezoid)
  const roadBL = W * 0.0;
  const roadBR = W * 1.0;
  const roadTL = vx - 2;
  const roadTR = vx + 2;

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(roadTL, hy);
  ctx.lineTo(roadTR, hy);
  ctx.lineTo(roadBR, H);
  ctx.lineTo(roadBL, H);
  ctx.closePath();

  // Road gradient (depth)
  const roadGrad = ctx.createLinearGradient(0, hy, 0, H);
  roadGrad.addColorStop(0, '#10151E');
  roadGrad.addColorStop(0.3,'#141820');
  roadGrad.addColorStop(1, '#1A1E28');
  ctx.fillStyle = roadGrad;
  ctx.fill();
  ctx.restore();

  // Road edges (glow lines)
  const roadLeftB  = W * 0.18;
  const roadRightB = W * 0.82;
  [[roadLeftB, vx - 2], [roadRightB, vx + 2]].forEach(([bx, tx]) => {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(tx, hy);
    ctx.lineTo(bx, H);
    ctx.strokeStyle = 'rgba(0,255,212,0.5)';
    ctx.lineWidth = 2;
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#00FFD4';
    ctx.stroke();
    ctx.restore();
  });

  // Lane markings (perspective + animation)
  const lw = (roadRightB - roadLeftB) / LANES;
  const dashFreq = 80;
  const dashLen  = 0.4;
  const scrollOffset = (G.frame * G.speed * 0.5) % dashFreq;

  for (let lane = 1; lane < LANES; lane++) {
    const bx = roadLeftB + lw * lane;
    const tx = vx + (bx - vx) * 0.01;  // near-vanishing

    // Draw dashes along this lane divider with perspective spacing
    for (let t = 0; t < 1.02; t += 0.04) {
      // t=0 near horizon, t=1 near bottom
      const tAnimated = ((t + scrollOffset / (H - hy)) % 1 + 1) % 1;
      if (tAnimated % (1/25) > (1/25) * dashLen) continue;

      const y1 = hy + (H - hy) * tAnimated;
      const y2 = hy + (H - hy) * Math.min(tAnimated + 0.03, 1);
      // X interpolates from tx (horizon) to bx (bottom)
      const ratio1 = (tAnimated);
      const ratio2 = Math.min(tAnimated + 0.03, 1);
      const x1 = lerp(tx, bx, ratio1);
      const x2 = lerp(tx, bx, ratio2);
      const lineW = lerp(0.3, 3, tAnimated);
      const alpha = lerp(0.06, 0.5, tAnimated);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(0,255,212,${alpha})`;
      ctx.lineWidth = lineW;
      ctx.stroke();
      ctx.restore();
    }
  }

  // Road shoulder stripes
  const stripeCount = 12;
  for (let i = 0; i < stripeCount; i++) {
    const tAnimated = ((i / stripeCount + scrollOffset / (H - hy) * 0.5) % 1 + 1) % 1;
    const y  = hy + (H - hy) * tAnimated;
    const xL = lerp(vx - 2, roadLeftB,  tAnimated);
    const xR = lerp(vx + 2, roadRightB, tAnimated);
    const alpha = tAnimated * 0.35;
    ctx.fillStyle = `rgba(255,107,43,${alpha})`;
    ctx.fillRect(xL - 3 * tAnimated, y - 1, 3 * tAnimated, 2);
    ctx.fillRect(xR, y - 1, 3 * tAnimated, 2);
  }
}

// ─── PLAYER CAR ──────────────────────────────────────────────────────
function drawPlayerCar(x, y, invincible, frameNum) {
  const lw = getLaneWidth();
  const cw = lw * 0.62;
  const ch = cw * 1.8;
  const cx = x;
  const cy = y - ch * 0.5;

  ctx.save();

  // Invincibility pulse
  if (invincible) {
    ctx.shadowBlur  = 20 + 10 * Math.sin(frameNum * 0.3);
    ctx.shadowColor = '#BF5AF2';
  }

  // Headlight glow on road
  const glowGrad = ctx.createRadialGradient(cx, cy+ch, 0, cx, cy+ch, cw*1.5);
  glowGrad.addColorStop(0, 'rgba(255,200,100,0.25)');
  glowGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = glowGrad;
  ctx.fillRect(cx-cw, cy+ch-5, cw*2, cw*1.5);

  // Car body
  const bodyGrad = ctx.createLinearGradient(cx-cw/2, cy, cx+cw/2, cy);
  bodyGrad.addColorStop(0,   '#CC4400');
  bodyGrad.addColorStop(0.3, '#FF6B2B');
  bodyGrad.addColorStop(0.7, '#FF8C55');
  bodyGrad.addColorStop(1,   '#CC4400');
  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.roundRect(cx - cw/2, cy, cw, ch, [cw*0.15, cw*0.15, cw*0.08, cw*0.08]);
  ctx.fill();

  // Roof / cabin
  const roofGrad = ctx.createLinearGradient(cx-cw*0.35, cy+ch*0.15, cx+cw*0.35, cy+ch*0.15);
  roofGrad.addColorStop(0, '#0A0C14');
  roofGrad.addColorStop(0.5,'#1a1e2e');
  roofGrad.addColorStop(1, '#0A0C14');
  ctx.fillStyle = roofGrad;
  ctx.beginPath();
  ctx.roundRect(cx - cw*0.35, cy+ch*0.14, cw*0.7, ch*0.42, cw*0.12);
  ctx.fill();

  // Windshield glare
  ctx.fillStyle = 'rgba(100,200,255,0.15)';
  ctx.beginPath();
  ctx.roundRect(cx - cw*0.28, cy+ch*0.16, cw*0.56, ch*0.18, 4);
  ctx.fill();

  // Headlights
  [cx-cw*0.3, cx+cw*0.3-cw*0.12].forEach(hx => {
    ctx.fillStyle = '#FFF4C2';
    ctx.shadowBlur  = 12;
    ctx.shadowColor = '#FFD60A';
    ctx.fillRect(hx, cy + ch * 0.88, cw*0.12, ch*0.06);
    ctx.shadowBlur = 0;
  });

  // Tail lights
  [cx-cw*0.3, cx+cw*0.3-cw*0.12].forEach(tx => {
    ctx.fillStyle = '#FF2D55';
    ctx.shadowBlur  = 8;
    ctx.shadowColor = '#FF2D55';
    ctx.fillRect(tx, cy + ch * 0.04, cw*0.12, ch*0.06);
    ctx.shadowBlur = 0;
  });

  // Wheels
  const wheelW = cw * 0.18;
  const wheelH = ch * 0.14;
  [[cx-cw*0.5-wheelW*0.3, cy+ch*0.1],[cx+cw*0.5-wheelW*0.7, cy+ch*0.1],
   [cx-cw*0.5-wheelW*0.3, cy+ch*0.72],[cx+cw*0.5-wheelW*0.7, cy+ch*0.72]].forEach(([wx,wy]) => {
    ctx.fillStyle = '#0A0C14';
    ctx.beginPath();
    ctx.roundRect(wx, wy, wheelW, wheelH, 3);
    ctx.fill();
    ctx.fillStyle = '#2A2F40';
    ctx.beginPath();
    ctx.roundRect(wx+2, wy+2, wheelW-4, wheelH-4, 2);
    ctx.fill();
  });

  // Speed lines (motion blur)
  if (G.speed > BASE_SPEED * 1.5) {
    const intensity = (G.speed - BASE_SPEED * 1.5) / (BASE_SPEED * 3);
    for (let i = 0; i < 4; i++) {
      const sx = cx + rnd(-cw*0.6, cw*0.6);
      const sy = cy + ch + rnd(0, 30);
      ctx.strokeStyle = `rgba(0,255,212,${intensity * 0.4})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(sx, sy + rnd(20, 60));
      ctx.stroke();
    }
  }

  ctx.restore();
}

// ─── OBSTACLE CARS ───────────────────────────────────────────────────
function drawObstacleCar(ob, frameNum) {
  const lw = getLaneWidth();
  const cw = lw * 0.58;
  const ch = cw * 1.7;
  // Perspective scale: smaller near horizon, bigger near bottom
  const scale = lerp(0.3, 1.0, ob.screenY);
  const scw = cw * scale;
  const sch = ch * scale;
  const cx  = ob.screenX;
  const cy  = ob.screenYpx - sch * 0.5;

  ctx.save();
  if (ob.hit) {
    ctx.globalAlpha = 0.3 + 0.7 * Math.sin(frameNum * 0.5);
  }

  // Car body
  const bodyGrad = ctx.createLinearGradient(cx - scw/2, cy, cx + scw/2, cy);
  bodyGrad.addColorStop(0,   shadeColor(ob.color, -40));
  bodyGrad.addColorStop(0.4, ob.color);
  bodyGrad.addColorStop(0.6, shadeColor(ob.color, 20));
  bodyGrad.addColorStop(1,   shadeColor(ob.color, -40));
  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.roundRect(cx - scw/2, cy, scw, sch, [scw*0.12, scw*0.12, scw*0.08, scw*0.08]);
  ctx.fill();

  // Roof
  ctx.fillStyle = 'rgba(10,12,20,0.85)';
  ctx.beginPath();
  ctx.roundRect(cx - scw*0.33, cy + sch*0.15, scw*0.66, sch*0.4, scw*0.1);
  ctx.fill();

  // Windshield reflection
  ctx.fillStyle = 'rgba(150,220,255,0.12)';
  ctx.beginPath();
  ctx.roundRect(cx - scw*0.26, cy + sch*0.17, scw*0.52, sch*0.17, 3);
  ctx.fill();

  // Tail lights (facing player)
  [cx - scw*0.28, cx + scw*0.16].forEach(tx => {
    ctx.fillStyle = `rgba(255,45,85,${0.8 + 0.2*Math.sin(frameNum*0.1)})`;
    ctx.shadowBlur  = 6 * scale;
    ctx.shadowColor = '#FF2D55';
    ctx.fillRect(tx, cy + sch*0.04, scw*0.12, sch*0.06);
    ctx.shadowBlur = 0;
  });

  // Wheels
  [[cx-scw*0.5, cy+sch*0.08],[cx+scw*0.38, cy+sch*0.08],
   [cx-scw*0.5, cy+sch*0.72],[cx+scw*0.38, cy+sch*0.72]].forEach(([wx,wy]) => {
    ctx.fillStyle = '#080A10';
    ctx.beginPath();
    ctx.roundRect(wx, wy, scw*0.18, sch*0.14, 2);
    ctx.fill();
  });

  // Hit flash
  if (ob.hit) {
    ctx.fillStyle = 'rgba(255,45,85,0.5)';
    ctx.beginPath();
    ctx.roundRect(cx - scw/2, cy, scw, sch, scw*0.1);
    ctx.fill();
  }

  ctx.restore();
}

function shadeColor(hex, pct) {
  const num = parseInt(hex.slice(1), 16);
  const r = clamp(((num >> 16) & 0xFF) + pct, 0, 255);
  const g = clamp(((num >> 8)  & 0xFF) + pct, 0, 255);
  const b = clamp((num & 0xFF) + pct, 0, 255);
  return `rgb(${r},${g},${b})`;
}

// ─── POWER-UPS ───────────────────────────────────────────────────────
const PU_CONFIG = {
  shield: { icon:'🛡',  color:'#32D74B', label:'SHIELD',  bgColor:'rgba(50,215,75,0.15)'  },
  boost:  { icon:'⚡',  color:'#FFD60A', label:'BOOST',   bgColor:'rgba(255,214,10,0.15)' },
  magnet: { icon:'🧲',  color:'#0A84FF', label:'MAGNET',  bgColor:'rgba(10,132,255,0.15)' },
  star:   { icon:'⭐',  color:'#BF5AF2', label:'STAR',    bgColor:'rgba(191,90,242,0.15)' },
  nitro:  { icon:'🚀', color:'#FF375F', label:'NITRO',   bgColor:'rgba(255,55,95,0.15)'  },
  freeze: { icon:'❄️', color:'#5AC8FA', label:'FREEZE',  bgColor:'rgba(90,200,250,0.15)' },
  coin:   { icon:'💰', color:'#FFB800', label:'BONUS',   bgColor:'rgba(255,184,0,0.15)'  },
  repair: { icon:'🔧', color:'#FF6B2B', label:'REPAIR',  bgColor:'rgba(255,107,43,0.15)' },
};

function drawPowerUp(pu, frameNum) {
  const cfg   = PU_CONFIG[pu.type];
  const scale = lerp(0.25, 0.9, pu.screenY);
  const size  = 28 * scale;
  const cx    = pu.screenX;
  const cy    = pu.screenYpx;
  const bob   = Math.sin(frameNum * 0.08 + pu.phase) * 3 * scale;

  ctx.save();
  ctx.shadowBlur  = 15 * scale;
  ctx.shadowColor = cfg.color;

  // Glow ring
  ctx.beginPath();
  ctx.arc(cx, cy + bob, size * 0.9, 0, Math.PI*2);
  ctx.fillStyle = cfg.bgColor;
  ctx.fill();
  ctx.strokeStyle = cfg.color;
  ctx.lineWidth = 1.5 * scale;
  ctx.stroke();

  // Pulse ring
  const pulseR = size * (1.1 + 0.2 * Math.sin(frameNum * 0.12));
  ctx.beginPath();
  ctx.arc(cx, cy + bob, pulseR, 0, Math.PI*2);
  ctx.strokeStyle = `${cfg.color}40`;
  ctx.lineWidth = scale;
  ctx.stroke();

  // Icon
  ctx.font = `${size * 1.1}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(cfg.icon, cx, cy + bob);

  ctx.restore();
}

// ─── PARTICLES ───────────────────────────────────────────────────────
function spawnParticles(x, y, color, count = 18, type = 'normal') {
  for (let i = 0; i < count; i++) {
    const angle = rnd(0, Math.PI * 2);
    const speed = type === 'explosion' ? rnd(3, 10) : rnd(1, 4);
    G.particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (type === 'explosion' ? rnd(2,6) : 0),
      r:  rnd(2, type === 'explosion' ? 6 : 4),
      life: 1.0,
      decay: rnd(0.018, 0.045),
      color,
      type,
    });
  }
}

function spawnCollectParticles(x, y, color) {
  for (let i = 0; i < 10; i++) {
    const angle = rnd(0, Math.PI * 2);
    G.particles.push({
      x, y,
      vx: Math.cos(angle) * rnd(2, 5),
      vy: Math.sin(angle) * rnd(2, 5) - 2,
      r: rnd(3, 6), life: 1.0, decay: 0.03,
      color, type: 'collect',
    });
  }
}

function updateAndDrawParticles() {
  G.particles = G.particles.filter(p => p.life > 0);
  G.particles.forEach(p => {
    p.x  += p.vx;
    p.y  += p.vy;
    p.vy += 0.15;  // gravity
    p.life -= p.decay;
    const alpha = Math.max(0, p.life);

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle   = p.color;
    ctx.shadowBlur  = p.type === 'collect' ? 8 : 4;
    ctx.shadowColor = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * alpha, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();
  });
}

// ─── GROUND SCRAPE SPARKS ────────────────────────────────────────────
function spawnSparks(x, y) {
  for (let i = 0; i < 8; i++) {
    G.particles.push({
      x, y,
      vx: rnd(-3, 3),
      vy: rnd(-4, -1),
      r: rnd(1, 3), life: 1.0, decay: 0.06,
      color: rndI(0,1) ? '#FFD60A' : '#FF6B2B',
      type: 'spark',
    });
  }
}

// ─── OBSTACLE SPAWNING ───────────────────────────────────────────────
function spawnObstacle() {
  const takenLanes = new Set(G.obstacles.filter(o => o.screenY < 0.25).map(o => o.lane));
  let lane;
  let tries = 0;
  do { lane = rndI(0, LANES-1); tries++; } while (takenLanes.has(lane) && tries < 10);

  // Avoid spawning in same lane as player every time
  if (takenLanes.size === 0 && lane === G.playerLane && Math.random() > 0.3) {
    lane = (lane + rndI(1, LANES-1)) % LANES;
  }

  G.obstacles.push({
    lane,
    screenY:   0,      // 0 = horizon, 1 = bottom
    screenX:   0,
    screenYpx: 0,
    color: COLORS.cars[rndI(0, COLORS.cars.length - 1)],
    hit:  false,
    hitTimer: 0,
    passed: false,
  });
}

function spawnPowerUp() {
  const type = pickPowerUpType();
  const lane = rndI(0, LANES - 1);
  G.powerUps.push({
    type, lane,
    screenY: 0, screenX: 0, screenYpx: 0,
    phase: rnd(0, Math.PI * 2),
    collected: false,
  });
}

// ─── PERSPECTIVE PROJECTION ──────────────────────────────────────────
function projectToScreen(lane, depthT) {
  // depthT: 0 = horizon, 1 = bottom of screen
  const W  = canvas.width;
  const H  = canvas.height;
  const hy = H * 0.42;
  const vx = W * 0.5;
  const roadLeft  = W * 0.18;
  const roadRight = W * 0.82;
  const lw = (roadRight - roadLeft) / LANES;

  const bottomX = roadLeft + lw * lane + lw * 0.5;
  const topX    = vx;
  const screenX = lerp(topX, bottomX, depthT);
  const screenY = hy + (H - hy) * depthT;
  return { screenX, screenYpx: screenY };
}

// ─── COLLISION DETECTION ─────────────────────────────────────────────
function checkCollisions() {
  const H  = canvas.height;
  const hy = H * 0.42;
  const lw = getLaneWidth();
  const playerCW = lw * 0.62 * 0.9;
  const playerCH = playerCW * 1.8 * 0.9;
  const pY = G.playerY;
  const pX = G.playerX;

  // Obstacles
  G.obstacles.forEach(ob => {
    if (ob.passed || ob.hit) return;
    const scale = lerp(0.3, 1.0, ob.screenY);
    const obCW  = lw * 0.58 * scale * 0.9;
    const obCH  = obCW / 0.58 * 1.7 * 0.9;

    const dx = Math.abs(ob.screenX - pX);
    const dy = Math.abs(ob.screenYpx - pY);
    if (dx < (obCW + playerCW) * 0.5 && dy < (obCH + playerCH) * 0.42) {
      if (ob.screenY > 0.78 && ob.screenY < 1.05) {
        if (!G.invincible) {
          hitPlayer(ob.screenX, ob.screenYpx);
          ob.hit = true;
          ob.hitTimer = 30;
        }
      }
    }
    // Count dodge
    if (ob.screenY > 1.05 && !ob.passed) {
      ob.passed = true;
      G.dodgeStreak++;
      if (G.dodgeStreak > G.bestStreak) G.bestStreak = G.dodgeStreak;
      if (G.dodgeStreak % 5 === 0) showCombo(G.dodgeStreak);
    }
  });

  // Power-ups
  G.powerUps.forEach(pu => {
    if (pu.collected) return;
    const scale = lerp(0.25, 0.9, pu.screenY);
    const size  = 28 * scale;
    const dx = Math.abs(pu.screenX - pX);
    const dy = Math.abs(pu.screenYpx - pY);

    // Magnet effect — attract nearby power-ups
    if (G.activePUs.magnet > 0 && pu.screenY > 0.5) {
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 200) {
        pu.lane = G.playerLane;
      }
    }

    if (dx < size * 1.5 && dy < size * 1.5 && pu.screenY > 0.75) {
      collectPowerUp(pu);
    }
  });
}

function hitPlayer(x, y) {
  G.health--;
  updateHealthUI();
  spawnParticles(x, y, '#FF2D55', 20, 'explosion');
  spawnSparks(x, y + 20);
  // Screen flash
  document.getElementById('screen-game').classList.add('flash-hit');
  setTimeout(() => document.getElementById('screen-game').classList.remove('flash-hit'), 350);

  if (G.health <= 0) {
    setTimeout(gameOver, 300);
  }
}

function collectPowerUp(pu) {
  pu.collected = true;
  const cfg = PU_CONFIG[pu.type];
  spawnCollectParticles(pu.screenX, pu.screenYpx, cfg.color);
  if (pu.type !== 'coin') showComboText(cfg.icon + ' ' + cfg.label + '!', cfg.color);

  switch(pu.type) {
    case 'shield':
      G.health = Math.min(G.health + 1, MAX_HEALTH);
      updateHealthUI();
      break;
    case 'boost':
      G.activePUs.boost = 300;  // 5 seconds at 60fps
      G.scoreMulti = 2;
      updatePowerUpHUD();
      break;
    case 'magnet':
      G.activePUs.magnet = 180; // 3 seconds
      updatePowerUpHUD();
      break;
    case 'star':
      G.activePUs.star = PU_DURATIONS.star;  // 4 seconds
      G.invincible = true;
      updatePowerUpHUD();
      break;
    case 'nitro':
      G.activePUs.nitro = PU_DURATIONS.nitro; // 4 seconds
      G.nitroBoostSpeed = G.speed * 0.9;       // extra speed added on top of level speed
      updatePowerUpHUD();
      break;
    case 'freeze':
      G.activePUs.freeze = PU_DURATIONS.freeze; // 5 seconds
      updatePowerUpHUD();
      break;
    case 'coin':
      G.score += 250;
      showComboText('💰 +250!', cfg.color);
      break;
    case 'repair':
      G.health = MAX_HEALTH;
      updateHealthUI();
      break;
  }
}

// ─── POWER-UP HUD ────────────────────────────────────────────────────
function updatePowerUpHUD() {
  let el = document.getElementById('powerup-hud');
  if (!el) {
    el = document.createElement('div');
    el.id = 'powerup-hud';
    el.className = 'powerup-hud';
    document.getElementById('screen-game').appendChild(el);
  }
  el.innerHTML = '';
  ['boost','star','magnet','nitro','freeze'].forEach(type => {
    const rem = G.activePUs[type];
    if (rem <= 0) return;
    const cfg = PU_CONFIG[type];
    const maxTime = PU_DURATIONS[type] || 180;
    const pct = (rem / maxTime * 100).toFixed(1);
    const div = document.createElement('div');
    div.className = `pu-indicator ${type}`;
    div.innerHTML = `
      <span>${cfg.icon}</span>
      <div class="pu-timer-bar">
        <div class="pu-timer-fill" style="width:${pct}%;background:${cfg.color}"></div>
      </div>`;
    el.appendChild(div);
  });
}

// ─── SCORING ─────────────────────────────────────────────────────────
function updateScore() {
  // Base score from speed and time
  const baseGain = G.speed * 0.08 * G.scoreMulti;
  G.score    += baseGain;
  G.distance += G.speed * 0.5;  // metres

  // Level progression
  const newLevel = Math.floor(G.score / 500) + 1;
  if (newLevel > G.level) {
    G.level = newLevel;
    G.speed  = BASE_SPEED + G.level * 0.8;
    document.getElementById('hud-level').textContent = G.level;
    showComboText('LEVEL ' + G.level + '!', '#00FFD4');
  }

  // Top speed tracking
  const kmh = Math.round(G.speed * 30);
  if (kmh > G.topSpeed) G.topSpeed = kmh;

  // Update HUD
  document.getElementById('hud-score').textContent  = Math.floor(G.score);
  const distM = Math.floor(G.distance);
  document.getElementById('hud-dist').textContent   = distM < 1000 ? `${distM} m` : `${(distM/1000).toFixed(1)} km`;

  // Speedometer
  const speedPct = clamp(G.speed / (BASE_SPEED * 6) * 100, 0, 100);
  document.getElementById('speedo-arc').style.setProperty('--speedo-pct', speedPct + '%');
  document.getElementById('speedo-val').textContent = kmh;
}

// ─── COMBO DISPLAY ───────────────────────────────────────────────────
function showCombo(streak) {
  const el = document.getElementById('combo-notif');
  const msgs = {5:'NICE! ×2',10:'GREAT! ×3',15:'AMAZING! ×4',20:'UNSTOPPABLE! ×5'};
  const multi = Math.min(5, Math.floor(streak/5)+1);
  el.textContent = msgs[streak] || `${streak} DODGES! ×${multi}`;
  G.scoreMulti = multi;
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
  el.addEventListener('animationend', () => el.classList.remove('show'), {once:true});
}

function showComboText(text, color) {
  const el = document.getElementById('combo-notif');
  el.textContent  = text;
  el.style.color  = color || '#FFD60A';
  el.style.textShadow = `0 0 20px ${color || '#FFD60A'}`;
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
  el.addEventListener('animationend', () => el.classList.remove('show'), {once:true});
}

// ─── HEALTH UI ───────────────────────────────────────────────────────
function updateHealthUI() {
  const fill = document.getElementById('health-fill');
  const val  = document.getElementById('health-val');
  const pct  = (G.health / MAX_HEALTH) * 100;
  fill.style.width = `${pct}%`;
  val.textContent  = G.health;
  fill.className = 'health-fill';
  if (G.health === 1) fill.classList.add('crit');
  else if (G.health === 2) fill.classList.add('low');
}

// ─── INPUT ───────────────────────────────────────────────────────────
function setupInput() {
  // Keyboard
  window.addEventListener('keydown', e => {
    G.keys[e.code] = true;
    if ((e.code === 'ArrowLeft'  || e.code === 'KeyA') && !G.paused) moveLeft();
    if ((e.code === 'ArrowRight' || e.code === 'KeyD') && !G.paused) moveRight();
    if (e.code === 'Escape' || e.code === 'KeyP') togglePause();
    e.preventDefault();
  });
  window.addEventListener('keyup', e => { G.keys[e.code] = false; });

  // Mobile buttons
  const btnL = document.getElementById('btn-left');
  const btnR = document.getElementById('btn-right');
  if (btnL) {
    btnL.addEventListener('touchstart', e => { e.preventDefault(); moveLeft();  }, {passive:false});
    btnL.addEventListener('mousedown',  ()  => moveLeft());
  }
  if (btnR) {
    btnR.addEventListener('touchstart', e => { e.preventDefault(); moveRight(); }, {passive:false});
    btnR.addEventListener('mousedown',  ()  => moveRight());
  }

  // Swipe
  let touchStartX = 0;
  document.getElementById('screen-game').addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, {passive:true});
  document.getElementById('screen-game').addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) moveLeft(); else moveRight();
    }
  }, {passive:true});
}

let _laneCooldown = 0;
function moveLeft()  { if (G.paused || !G.running) return; if (_laneCooldown > 0) return; if (G.playerLane > 0) { G.playerLane--; _laneCooldown = 12; } }
function moveRight() { if (G.paused || !G.running) return; if (_laneCooldown > 0) return; if (G.playerLane < LANES-1) { G.playerLane++; _laneCooldown = 12; } }

// ─── GAME LOOP ───────────────────────────────────────────────────────
function gameLoop() {
  if (!G.running) return;
  if (!G.paused) {
    G.frame++;
    if (_laneCooldown > 0) _laneCooldown--;

    // Smooth player X
    const targetX = laneX(G.playerLane);
    G.playerX = lerp(G.playerX, targetX, 0.2);
    G.playerY = canvas.height * 0.82;

    // Update active power-up timers
    ['boost','magnet','star','nitro','freeze'].forEach(type => {
      if (G.activePUs[type] > 0) {
        G.activePUs[type]--;
        if (G.activePUs[type] === 0) {
          if (type === 'boost')  { G.scoreMulti = 1; }
          if (type === 'star')   { G.invincible = false; }
          if (type === 'nitro')  { G.nitroBoostSpeed = 0; }
          updatePowerUpHUD();
        }
      }
    });
    updatePowerUpHUD();

    // Spawn obstacles
    G.spawnTimer++;
    const spawnRate = Math.max(28, 80 - G.level * 5);
    if (G.spawnTimer >= spawnRate) {
      spawnObstacle();
      G.spawnTimer = 0;
    }

    // Spawn power-ups
    G.puSpawnTimer++;
    if (G.puSpawnTimer >= 300) {
      spawnPowerUp();
      G.puSpawnTimer = 0;
    }

    // Move obstacles
    const effSpeed  = G.speed + (G.activePUs.nitro > 0 ? (G.nitroBoostSpeed || 0) : 0);
    const freezeFac = G.activePUs.freeze > 0 ? 0.35 : 1;
    const moveSpeed = effSpeed / 60 * freezeFac;
    G.obstacles.forEach(ob => {
      ob.screenY += moveSpeed * 0.018;
      const proj = projectToScreen(ob.lane, ob.screenY);
      ob.screenX   = proj.screenX;
      ob.screenYpx = proj.screenYpx;
      if (ob.hit) { ob.hitTimer--; if (ob.hitTimer <= 0) ob.hit = false; }
    });
    G.obstacles = G.obstacles.filter(ob => ob.screenY < 1.3);

    // Move power-ups
    G.powerUps.forEach(pu => {
      pu.screenY += moveSpeed * 0.016;
      const proj = projectToScreen(pu.lane, pu.screenY);
      pu.screenX   = proj.screenX;
      pu.screenYpx = proj.screenYpx;
    });
    G.powerUps = G.powerUps.filter(pu => pu.screenY < 1.3 && !pu.collected);

    checkCollisions();
    updateScore();
  }
  renderFrame();
  G.animId = requestAnimationFrame(gameLoop);
}

function renderFrame() {
  const W = canvas.width;
  const H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  drawStars();
  drawCitySkyline(G.frame * G.speed);
  drawRoad();

  // Draw power-ups (behind player)
  G.powerUps.filter(pu => pu.screenY < 0.85).forEach(pu => drawPowerUp(pu, G.frame));

  // Draw obstacles (perspective sorted — smaller/farther first)
  const sortedObs = [...G.obstacles].sort((a,b) => a.screenY - b.screenY);
  sortedObs.filter(ob => ob.screenY < 0.85).forEach(ob => drawObstacleCar(ob, G.frame));

  // Draw player car
  drawPlayerCar(G.playerX, G.playerY, G.invincible, G.frame);

  // Draw obstacles in front of player
  sortedObs.filter(ob => ob.screenY >= 0.85).forEach(ob => drawObstacleCar(ob, G.frame));
  G.powerUps.filter(pu => pu.screenY >= 0.85).forEach(pu => drawPowerUp(pu, G.frame));

  // Particles always on top
  updateAndDrawParticles();

  // Star invincibility aura
  if (G.invincible) {
    ctx.save();
    ctx.shadowBlur  = 30 + 10 * Math.sin(G.frame * 0.2);
    ctx.shadowColor = '#BF5AF2';
    ctx.strokeStyle = `rgba(191,90,242,${0.5 + 0.3 * Math.sin(G.frame * 0.15)})`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(G.playerX, G.playerY - 30, 30, 50, 0, 0, Math.PI*2);
    ctx.stroke();
    ctx.restore();
  }

  // Boost trail
  if (G.activePUs.boost > 0) {
    for (let i = 0; i < 2; i++) {
      spawnParticles(
        G.playerX + rnd(-15,15),
        G.playerY + rnd(10,30),
        '#FFD60A', 1, 'normal'
      );
    }
  }
}

// ─── GAME CONTROL ────────────────────────────────────────────────────
function startGame() {
  showScreen('screen-game');
  resetGame();
  G.running = true;
  G.animId  = requestAnimationFrame(gameLoop);
}

function resetGame() {
  cancelAnimationFrame(G.animId);
  G.score        = 0;
  G.distance     = 0;
  G.level        = 1;
  G.speed        = BASE_SPEED;
  G.health       = MAX_HEALTH;
  G.frame        = 0;
  G.playerLane   = 2;
  G.playerX      = laneX(2);
  G.playerY      = canvas.height * 0.82;
  G.topSpeed     = 0;
  G.dodgeStreak  = 0;
  G.bestStreak   = 0;
  G.scoreMulti   = 1;
  G.obstacles    = [];
  G.powerUps     = [];
  G.particles    = [];
  G.spawnTimer   = 0;
  G.puSpawnTimer = 0;
  G.invincible     = false;
  G.activePUs      = { boost:0, magnet:0, star:0, nitro:0, freeze:0 };
  G.nitroBoostSpeed= 0;
  _laneCooldown    = 0;
  generateCityBuildings();
  initStars();
  updateHealthUI();
  document.getElementById('hud-score').textContent = '0';
  document.getElementById('hud-dist').textContent  = '0 m';
  document.getElementById('hud-level').textContent = '1';
  document.getElementById('speedo-val').textContent = '0';
  document.getElementById('speedo-arc').style.setProperty('--speedo-pct','0%');
  const puHud = document.getElementById('powerup-hud');
  if (puHud) puHud.innerHTML = '';
}

function restartGame() {
  document.getElementById('pause-overlay').classList.add('hidden');
  G.paused = false;
  G.running = false;
  resetGame();
  G.running = true;
  G.animId  = requestAnimationFrame(gameLoop);
}

function togglePause() {
  if (!G.running) return;
  G.paused = !G.paused;
  const overlay = document.getElementById('pause-overlay');
  overlay.classList.toggle('hidden', !G.paused);
  document.getElementById('pause-btn').textContent = G.paused ? '▶' : '⏸';
  if (!G.paused) {
    G.animId = requestAnimationFrame(gameLoop);
  }
}

function quitToMenu() {
  G.running = false;
  G.paused  = false;
  cancelAnimationFrame(G.animId);
  document.getElementById('pause-overlay').classList.add('hidden');
  showScreen('screen-title');
  updateTitleStats();
}

function gameOver() {
  G.running = false;
  cancelAnimationFrame(G.animId);
  showScreen('screen-gameover');

  const score = Math.floor(G.score);
  const dist  = Math.floor(G.distance);
  const best  = getBestScore();

  document.getElementById('go-score').textContent  = score.toLocaleString();
  document.getElementById('go-dist').textContent   = dist < 1000 ? `${dist} m` : `${(dist/1000).toFixed(2)} km`;
  document.getElementById('go-speed').textContent  = `${G.topSpeed} km/h`;
  document.getElementById('go-level').textContent  = G.level;
  document.getElementById('go-streak').textContent = G.bestStreak;

  if (score > best) {
    document.getElementById('go-new-best').style.display = 'block';
    document.getElementById('go-best-val').textContent   = score.toLocaleString();
  } else {
    document.getElementById('go-new-best').style.display = 'none';
  }
}

function saveAndRestart() {
  saveScore();
  restartGame();
  showScreen('screen-game');
}

function saveAndMenu() {
  saveScore();
  showScreen('screen-title');
  updateTitleStats();
}

// ─── LEADERBOARD ─────────────────────────────────────────────────────
function getLeaderboard() {
  try { return JSON.parse(localStorage.getItem('nd_lb') || '[]'); } catch { return []; }
}

function getBestScore() {
  const lb = getLeaderboard();
  return lb.length ? lb[0].score : 0;
}

function saveScore() {
  const name  = (document.getElementById('player-name').value.trim().toUpperCase() || 'PLAYER').slice(0, 12);
  const score = Math.floor(G.score);
  const dist  = Math.floor(G.distance);
  if (score === 0) return;
  const lb = getLeaderboard();
  lb.push({ name, score, dist, date: new Date().toLocaleDateString() });
  lb.sort((a,b) => b.score - a.score);
  localStorage.setItem('nd_lb', JSON.stringify(lb.slice(0, 20)));
}

function renderLeaderboard() {
  const lb   = getLeaderboard();
  const rows = document.getElementById('lb-rows');
  if (!lb.length) {
    rows.innerHTML = '<div class="lb-empty">No scores yet. Play a race first! 🏁</div>';
    return;
  }
  const medals = ['gold','silver','bronze'];
  rows.innerHTML = lb.map((e, i) => `
    <div class="lb-row ${medals[i] || ''}">
      <span class="lb-rank ${medals[i] || ''}">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i+1}</span>
      <span class="lb-name">${escHtml(e.name)}</span>
      <span class="lb-score">${e.score.toLocaleString()}</span>
      <span class="lb-dist">${e.dist < 1000 ? e.dist+'m' : (e.dist/1000).toFixed(1)+'km'}</span>
    </div>`).join('');
}

function clearLeaderboard() {
  if (!confirm('Clear all high scores?')) return;
  localStorage.removeItem('nd_lb');
  renderLeaderboard();
}

function updateTitleStats() {
  const lb = getLeaderboard();
  document.getElementById('best-score-title').textContent = lb.length ? lb[0].score.toLocaleString() : '0';
  const best = lb[0];
  document.getElementById('best-dist-title').textContent = best
    ? (best.dist < 1000 ? best.dist + ' m' : (best.dist/1000).toFixed(1) + ' km')
    : '0 km';
}

// ─── SCREEN MANAGER ──────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'screen-leaderboard') renderLeaderboard();
  if (id === 'screen-title') {
    updateTitleStats();
    startTitleAnimation();
  }
  if (id === 'screen-game') stopTitleAnimation();
}

// ─── TITLE SCREEN ANIMATION ──────────────────────────────────────────
let _titleAnimId = null;
let _titleScroll = 0;

function startTitleAnimation() {
  stopTitleAnimation();
  if (!tctx) return;
  function animTitle() {
    _titleScroll += 2;
    drawTitleRoad(_titleScroll);
    _titleAnimId = requestAnimationFrame(animTitle);
  }
  animTitle();
}

function stopTitleAnimation() {
  if (_titleAnimId) { cancelAnimationFrame(_titleAnimId); _titleAnimId = null; }
}

function drawTitleRoad(scroll) {
  if (!tctx || !titleCanvas) return;
  const W  = titleCanvas.width;
  const H  = titleCanvas.height;
  const hy = H * 0.5;
  const vx = W * 0.5;

  tctx.clearRect(0, 0, W, H);

  // Sky
  const skyGrad = tctx.createLinearGradient(0, 0, 0, hy);
  skyGrad.addColorStop(0, '#04060E');
  skyGrad.addColorStop(1, '#0C1428');
  tctx.fillStyle = skyGrad;
  tctx.fillRect(0, 0, W, hy);

  // Road
  tctx.beginPath();
  tctx.moveTo(vx - 2, hy);
  tctx.lineTo(vx + 2, hy);
  tctx.lineTo(W, H);
  tctx.lineTo(0, H);
  tctx.closePath();
  const roadGrad = tctx.createLinearGradient(0, hy, 0, H);
  roadGrad.addColorStop(0, '#10151E');
  roadGrad.addColorStop(1, '#1A1E28');
  tctx.fillStyle = roadGrad;
  tctx.fill();

  // Lane dashes
  const roadL = W * 0.15, roadR = W * 0.85;
  const lw = (roadR - roadL) / LANES;
  for (let lane = 1; lane < LANES; lane++) {
    const bx = roadL + lw * lane;
    const tx = vx;
    for (let t = 0; t <= 1; t += 0.04) {
      const tA = ((t + scroll / (H - hy) * 0.04) % 1 + 1) % 1;
      if (tA % (1/20) > (1/20) * 0.45) continue;
      const y1 = hy + (H - hy) * tA;
      const y2 = hy + (H - hy) * Math.min(tA + 0.03, 1);
      const x1 = lerp(tx, bx, tA);
      const x2 = lerp(tx, bx, Math.min(tA + 0.03, 1));
      tctx.beginPath();
      tctx.moveTo(x1, y1); tctx.lineTo(x2, y2);
      tctx.strokeStyle = `rgba(0,255,212,${lerp(0.05, 0.4, tA)})`;
      tctx.lineWidth = lerp(0.3, 2.5, tA);
      tctx.stroke();
    }
  }

  // Road edges
  [[roadL, vx-2],[roadR, vx+2]].forEach(([bx, tx]) => {
    tctx.beginPath();
    tctx.moveTo(tx, hy); tctx.lineTo(bx, H);
    tctx.strokeStyle = 'rgba(0,255,212,0.4)';
    tctx.lineWidth = 2; tctx.shadowBlur = 10;
    tctx.shadowColor = '#00FFD4'; tctx.stroke();
    tctx.shadowBlur = 0;
  });

  // A couple of title screen cars for atmosphere
  drawTitleCars(scroll);
}

const _titleCars = [
  {lane:1, y:0.3, color:'#FF2D55'}, {lane:3, y:0.6, color:'#0A84FF'},
  {lane:0, y:0.8, color:'#FFD60A'}, {lane:4, y:0.15, color:'#BF5AF2'},
];
function drawTitleCars(scroll) {
  if (!tctx || !titleCanvas) return;
  const W = titleCanvas.width; const H = titleCanvas.height;
  const hy = H * 0.5; const roadL = W*0.15, roadR = W*0.85;
  const lw = (roadR - roadL) / LANES;
  _titleCars.forEach(c => {
    const screenY = ((c.y + scroll * 0.0008) % 1 + 1) % 1;
    if (screenY < 0.05 || screenY > 1) return;
    const bx = roadL + lw * c.lane + lw * 0.5;
    const tx = W * 0.5;
    const cx = lerp(tx, bx, screenY);
    const cy = hy + (H - hy) * screenY;
    const scale = lerp(0.15, 0.7, screenY);
    const cw = lw * 0.58 * scale, ch = cw * 1.7;

    tctx.save();
    tctx.globalAlpha = screenY;
    tctx.fillStyle = c.color;
    tctx.beginPath();
    tctx.roundRect(cx - cw/2, cy - ch/2, cw, ch, cw*0.12);
    tctx.fill();
    tctx.fillStyle = 'rgba(10,12,20,0.8)';
    tctx.beginPath();
    tctx.roundRect(cx - cw*0.3, cy - ch*0.35, cw*0.6, ch*0.4, cw*0.1);
    tctx.fill();
    tctx.restore();
  });
}

// ─── UTILITY ─────────────────────────────────────────────────────────
function escHtml(str) {
  return (str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ─── INIT ─────────────────────────────────────────────────────────────
setupInput();
generateCityBuildings();
initStars();
updateTitleStats();
startTitleAnimation();

// Show mobile controls on touch devices
if ('ontouchstart' in window) {
  document.getElementById('mobile-controls').style.pointerEvents = 'all';
}

console.log('[NeonDrive] Ready. ← → to steer, P to pause.');
