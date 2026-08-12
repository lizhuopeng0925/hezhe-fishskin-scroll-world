const sections = [
  {
    id: 'wutiku',
    label: '乌提库',
    still: 'assets/stills/desktop/1920x1080/scene-01-wutiku-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-01-wutiku-start.png',
    accent: '#c4a15a',
    scroll: 1.35,
    linger: 0.28,
    title: '乌提库',
    subtitle: '——将片片鱼皮拼成衣裳',
    body: '鱼皮按鳞纹和色泽筛选拼缝，领口、衣襟与袖口饰以云卷纹。',
    tags: ['乌提库', '鱼皮拼缝', '云卷纹'],
  },
  {
    id: 'trousers',
    label: '卧又克衣',
    still: 'assets/stills/desktop/1920x1080/scene-02-trousers-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-02-trousers-start.png',
    accent: '#b88d3f',
    scroll: 1.2,
    linger: 0.22,
    title: '卧又克衣',
    subtitle: '——两只裤筒，挡住寒水与湿气',
    body: '无裆无腰的男式鱼皮套裤穿在长裤外，用于防寒、防水、防虫和耐磨。',
    tags: ['卧又克衣', '无裆无腰', '防寒防水'],
  },
  {
    id: 'ula',
    label: '温塔',
    still: 'assets/stills/desktop/1920x1080/scene-03-ula-boots-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-03-ula-boots-start.png',
    accent: '#d0a85f',
    scroll: 1.2,
    linger: 0.24,
    title: '温塔',
    subtitle: '——把缝线带向冰上行走',
    body: '温塔即鱼皮靰鞡。鱼皮向上折起、抽褶成底，再缝鞋脸与筒形靿，兼顾保暖、防水与冰上行走。',
    tags: ['温塔', '鱼皮靰鞡', '帮底一体'],
  },
  {
    id: 'tools',
    label: '制皮工具',
    still: 'assets/stills/desktop/1920x1080/scene-04-tools-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-04-tools-start.png',
    accent: '#a7792f',
    scroll: 1.28,
    linger: 0.2,
    title: '制皮工具',
    subtitle: '——从木槌鞣制，到骨针拼缝',
    body: '木槌与木铡刀用于鞣制和软化鱼皮，鱼骨针、鱼皮线与鱼鳔胶完成拼缝和纹饰。',
    tags: ['木槌', '木铡刀', '骨针'],
  },
  {
    id: 'patterns',
    label: '鱼皮纹样',
    still: 'assets/stills/desktop/1920x1080/scene-05-patterns-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-05-patterns-start.png',
    accent: '#d4b46f',
    scroll: 1.5,
    linger: 0.32,
    title: '鱼皮纹样',
    subtitle: '——把无字的史书缝在衣上',
    body: '云卷、水波、鱼鳞、几何与动物等纹样，借涂染、粘贴、缉缝与包绣留在鱼皮上。',
    tags: ['云卷', '水波', '鱼鳞'],
    cta: {
      primary: { label: '查看原始五图', href: '#heritage-wall' },
      secondary: { label: '返回开端', href: '#top' },
    },
  },
];

mountScrollWorld(document.getElementById('world'), {
  brand: { name: '鱼皮成境', subtitle: '赫哲族鱼皮技艺', href: '#top' },
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

const SOUND_STORAGE_KEY = 'hezhe-sound-on';
const MUSIC = {
  src: 'assets/audio/chinese-relaxing-villatic-music.mp3?v=96k',
  volume: 0.18,
};

function setBtn(el, value) {
  if (!el) return;
  el.setAttribute('aria-label', `SOUND: ${value}`);
  el.setAttribute('aria-pressed', String(value === 'ON'));
  el.classList.toggle('is-playing', value === 'ON');
  el.dataset.tooltip = `SOUND: ${value}`;
}

function loadSoundPreference() {
  try {
    return localStorage.getItem(SOUND_STORAGE_KEY) !== 'OFF';
  } catch {
    return true;
  }
}

function saveSoundPreference(soundOn) {
  try {
    localStorage.setItem(SOUND_STORAGE_KEY, soundOn ? 'ON' : 'OFF');
  } catch {
    // The button remains usable when browser storage is unavailable.
  }
}

function mountSoundToggle() {
  const topbar = world.querySelector('.sw-topbar');
  if (!topbar) return;

  const actions = document.createElement('div');
  actions.className = 'sw-topbar__actions';

  const toggle = document.createElement('button');
  toggle.className = 'sw-audio-toggle';
  toggle.id = 'soundBtn';
  toggle.type = 'button';
  toggle.innerHTML = `
    <span class="sw-audio-toggle__ring" aria-hidden="true"></span>
    <img class="sw-audio-toggle__icon sw-audio-toggle__icon--playing" src="assets/ui/audio-lines.svg" alt="">
    <img class="sw-audio-toggle__icon sw-audio-toggle__icon--paused" src="assets/ui/volume-x.svg" alt="">
  `;

  const audio = document.createElement('audio');
  audio.className = 'sw-background-audio';
  audio.loop = true;
  audio.preload = 'auto';
  audio.volume = MUSIC.volume;
  audio.setAttribute('aria-hidden', 'true');

  const cta = topbar.querySelector('.sw-topcta');
  actions.appendChild(toggle);
  if (cta) actions.appendChild(cta);
  topbar.appendChild(actions);
  world.appendChild(audio);

  let soundOn = loadSoundPreference();
  setBtn(toggle, soundOn ? 'ON' : 'OFF');

  const unlockEvents = ['pointerdown', 'touchstart', 'wheel', 'keydown'];
  const unlockOptions = { capture: true, passive: true };

  function removeUnlockListeners() {
    unlockEvents.forEach((name) => document.removeEventListener(name, unlockMusic, unlockOptions));
  }

  function addUnlockListeners() {
    unlockEvents.forEach((name) => document.addEventListener(name, unlockMusic, unlockOptions));
  }

  function ensureMusicSource() {
    if (audio.getAttribute('src')) return;
    audio.src = MUSIC.src;
    audio.load();
  }

  function playMusic() {
    if (!soundOn) return;
    ensureMusicSource();
    audio.play()
      .then(() => {
        if (!soundOn) {
          audio.pause();
          return;
        }
        removeUnlockListeners();
      })
      .catch(() => {
        if (soundOn) addUnlockListeners();
      });
  }

  function unlockMusic(event) {
    if (event.target instanceof Element && event.target.closest('.sw-audio-toggle')) return;
    playMusic();
  }

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    soundOn = !soundOn;
    setBtn(toggle, soundOn ? 'ON' : 'OFF');
    saveSoundPreference(soundOn);
    if (soundOn) {
      playMusic();
    } else {
      removeUnlockListeners();
      audio.pause();
    }
  });

  if (soundOn) playMusic();
}

mountSoundToggle();
