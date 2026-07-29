const sections = [
  {
    id: 'wutiku',
    label: '乌提库',
    still: 'assets/stills/desktop/1920x1080/scene-01-wutiku-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-01-wutiku-start.png',
    accent: '#c4a15a',
    scroll: 1.35,
    linger: 0.28,
    eyebrow: '赫哲族鱼皮技艺',
    title: '衣裳——将片片鱼皮拼成乌提库。',
    body: '鱼皮按鳞纹和色泽筛选拼缝，领口、衣襟与袖口饰以云卷纹。',
    tags: ['乌提库', '鱼皮拼缝', '云卷纹'],
  },
  {
    id: 'trousers',
    label: '套裤',
    still: 'assets/stills/desktop/1920x1080/scene-02-trousers-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-02-trousers-start.png',
    accent: '#b88d3f',
    scroll: 1.2,
    linger: 0.22,
    title: '套裤——两只裤筒，挡住寒水与湿气。',
    body: '无裆无腰的两只裤筒套在长裤外，用于防寒、防水、防虫和耐磨。',
    tags: ['无裆无腰', '防寒防水', '云卷纹'],
  },
  {
    id: 'ula',
    label: '靰鞡',
    still: 'assets/stills/desktop/1920x1080/scene-03-ula-boots-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-03-ula-boots-start.png',
    accent: '#d0a85f',
    scroll: 1.2,
    linger: 0.24,
    title: '靰鞡——把缝线带向冰上行走。',
    body: '鱼皮向上折起、抽褶成底，再缝鞋脸与筒形靿，兼顾保暖、防水与冰上行走。',
    tags: ['帮底一体', '抽褶', '冰上行走'],
  },
  {
    id: 'tools',
    label: '工具',
    still: 'assets/stills/desktop/1920x1080/scene-04-tools-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-04-tools-start.png',
    accent: '#a7792f',
    scroll: 1.28,
    linger: 0.2,
    title: '工具——从木刀剥皮，到骨针拼缝。',
    body: '木刀用于剥皮，木铡刀负责鞣制，鱼骨针、鱼皮线与鱼鳔胶完成拼缝和纹饰。',
    tags: ['剥制', '鞣制', '拼缝'],
  },
  {
    id: 'patterns',
    label: '纹样',
    still: 'assets/stills/desktop/1920x1080/scene-05-patterns-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-05-patterns-start.png',
    accent: '#d4b46f',
    scroll: 1.5,
    linger: 0.32,
    title: '纹样——把无字的史书缝在衣上。',
    body: '水波、云卷、鱼鳞、几何、动物与神树六类纹样，借涂染、粘贴、缉缝与包绣留在鱼皮上。',
    tags: ['六大纹样', '植物染', '四种工艺'],
    cta: {
      primary: { label: '查看原始五图', href: '#heritage-wall' },
      secondary: { label: '返回开端', href: '#top' },
    },
  },
];

mountScrollWorld(document.getElementById('world'), {
  brand: { name: '鱼皮成境', href: '#top' },
  cta: { label: '五图原始展陈', href: '#heritage-wall' },
  hint: '滚动进入展廊',
  nav: true,
  atmosphere: true,
  crossfade: 0.1,
  diveScroll: 1.3,
  connScroll: 1.55,
  sections,
  connectors: [
    'assets/video/desktop/web/01-wutiku-to-trousers.mp4?v=60fps-20260729',
    'assets/video/desktop/web/02-trousers-to-ula.mp4?v=60fps-20260729',
    'assets/video/desktop/web/03-ula-to-tools.mp4?v=60fps-20260729',
    'assets/video/desktop/web/04-tools-to-patterns.mp4?v=60fps-20260729',
  ],
  connectorsMobile: [
    'assets/video/mobile/web/01-wutiku-to-trousers.mp4?v=60fps-20260729',
    'assets/video/mobile/web/02-trousers-to-ula.mp4?v=60fps-20260729',
    'assets/video/mobile/web/03-ula-to-tools.mp4?v=60fps-20260729',
    'assets/video/mobile/web/04-tools-to-patterns.mp4?v=60fps-20260729',
  ],
});

const world = document.getElementById('world');
world.querySelector('.sw-route')?.setAttribute('aria-label', '展览章节');
world.querySelectorAll('.sw-route__dot').forEach((button, index) => {
  button.setAttribute('aria-label', `前往第 ${index + 1} 章：${sections[index].label}`);
});

const MUSIC = {
  src: 'assets/audio/chinese-relaxing-villatic-music.mp3?v=96k',
  volume: 0.18,
};

function mountBackgroundMusic() {
  const topbar = world.querySelector('.sw-topbar');
  if (!topbar) return;

  const actions = document.createElement('div');
  actions.className = 'sw-topbar__actions';

  const toggle = document.createElement('button');
  toggle.className = 'sw-audio-toggle is-pending';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', '播放背景音乐');
  toggle.setAttribute('aria-pressed', 'false');
  toggle.dataset.tooltip = '播放背景音乐';
  toggle.innerHTML = `
    <span class="sw-audio-toggle__ring" aria-hidden="true"></span>
    <img class="sw-audio-toggle__icon sw-audio-toggle__icon--playing" src="assets/ui/audio-lines.svg" alt="">
    <img class="sw-audio-toggle__icon sw-audio-toggle__icon--paused" src="assets/ui/volume-x.svg" alt="">
  `;

  const audio = document.createElement('audio');
  audio.className = 'sw-background-audio';
  audio.src = MUSIC.src;
  audio.autoplay = true;
  audio.loop = true;
  audio.preload = 'auto';
  audio.volume = 0;
  audio.setAttribute('autoplay', '');
  audio.setAttribute('aria-hidden', 'true');

  const cta = topbar.querySelector('.sw-topcta');
  actions.appendChild(toggle);
  if (cta) actions.appendChild(cta);
  topbar.appendChild(actions);
  world.appendChild(audio);

  const entrance = document.createElement('div');
  entrance.className = 'sw-enter';
  entrance.setAttribute('role', 'dialog');
  entrance.setAttribute('aria-modal', 'true');
  entrance.setAttribute('aria-labelledby', 'sw-enter-title');
  entrance.innerHTML = `
    <div class="sw-enter__panel">
      <p class="sw-enter__eyebrow">赫哲族鱼皮数字展陈</p>
      <h1 id="sw-enter-title">鱼皮成境</h1>
      <button class="sw-enter__button" type="button">进入展览</button>
      <p class="sw-enter__note">轻触后开启背景音乐</p>
    </div>
  `;
  document.body.classList.add('sw-enter-open');
  document.body.appendChild(entrance);
  const enterButton = entrance.querySelector('.sw-enter__button');

  let fadeFrame = 0;
  let musicPlaying = false;

  function setState(state) {
    const playing = state === 'playing';
    const unavailable = state === 'unavailable';
    musicPlaying = playing;
    const label = unavailable
      ? '背景音乐加载失败'
      : playing
        ? '关闭背景音乐'
        : '播放背景音乐';

    toggle.classList.toggle('is-playing', playing);
    toggle.classList.toggle('is-pending', state === 'pending');
    toggle.classList.toggle('is-unavailable', unavailable);
    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('aria-pressed', String(playing));
    toggle.dataset.tooltip = label;
    toggle.disabled = unavailable;
  }

  function fadeVolume(to, duration, done) {
    cancelAnimationFrame(fadeFrame);
    const from = audio.volume;
    const started = performance.now();

    function step(now) {
      const progress = Math.min(1, (now - started) / duration);
      audio.volume = from + (to - from) * progress;
      if (progress < 1) {
        fadeFrame = requestAnimationFrame(step);
      } else if (done) {
        done();
      }
    }

    fadeFrame = requestAnimationFrame(step);
  }

  function playMusic() {
    cancelAnimationFrame(fadeFrame);
    audio.volume = 0;
    return audio.play()
      .then(() => {
        setState('playing');
        fadeVolume(MUSIC.volume, 700);
        return true;
      })
      .catch(() => {
        setState('pending');
        return false;
      });
  }

  function pauseMusic() {
    fadeVolume(0, 300, () => {
      audio.pause();
      setState('paused');
    });
  }

  function dismissEntrance() {
    entrance.classList.add('is-leaving');
    document.body.classList.remove('sw-enter-open');
    window.setTimeout(() => entrance.remove(), 260);
  }

  toggle.addEventListener('click', () => {
    if (audio.paused) {
      playMusic();
    } else {
      pauseMusic();
    }
  });

  audio.addEventListener('error', () => setState('unavailable'));

  const unlockEvents = ['pointerdown', 'touchstart', 'click', 'keydown', 'wheel'];
  function removeUnlockListeners() {
    unlockEvents.forEach((name) => document.removeEventListener(name, unlockOnFirstGesture));
  }

  function unlockOnFirstGesture(event) {
    if (event.target instanceof Element && event.target.closest('.sw-audio-toggle, .sw-enter')) return;
    if (!audio.paused) {
      removeUnlockListeners();
      return;
    }
    playMusic().then((playing) => {
      if (playing) removeUnlockListeners();
    });
  }
  unlockEvents.forEach((name) => document.addEventListener(name, unlockOnFirstGesture, { passive: true }));

  enterButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    dismissEntrance();
    const entered = musicPlaying ? Promise.resolve(true) : playMusic();
    entered.then((playing) => {
      if (playing) removeUnlockListeners();
    });
  });

  window.requestAnimationFrame(() => enterButton.focus({ preventScroll: true }));
  playMusic();
}

mountBackgroundMusic();
