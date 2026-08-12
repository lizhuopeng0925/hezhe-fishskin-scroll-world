const sections = [
  {
    id: 'wutiku',
    label: 'Wutiku',
    still: 'assets/stills/desktop/1920x1080/scene-01-wutiku-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-01-wutiku-start.png',
    accent: '#c4a15a',
    scroll: 1.35,
    linger: 0.28,
    eyebrow: 'Hezhe fish-skin craftsmanship',
    titleLead: 'Wutiku',
    titleDetail: 'Clothing joined from fish skins',
    body: 'Fish skins are selected for their scale pattern and colour, then joined into a garment. Cloud-scroll motifs finish the collar, front opening and cuffs.',
    bodyMobile: 'Selected fish skins are joined into a garment and finished with cloud-scroll motifs.',
    tags: ['Wutiku', 'Joined fish skin', 'Cloud scrolls'],
  },
  {
    id: 'trousers',
    label: 'Wayoukeyi',
    still: 'assets/stills/desktop/1920x1080/scene-02-trousers-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-02-trousers-start.png',
    accent: '#b88d3f',
    scroll: 1.2,
    linger: 0.22,
    titleLead: 'Wayoukeyi',
    titleDetail: 'Separate overleggings for cold and wet',
    body: 'These men’s fish-skin overleggings have no waist or seat. Each separate leg is worn over trousers for warmth, water resistance and protection from wear.',
    bodyMobile: 'Two separate fish-skin legs are worn over trousers for warmth and protection.',
    tags: ['Wayoukeyi', 'Separate legs', 'Weather protection'],
  },
  {
    id: 'ula',
    label: 'Wenta',
    still: 'assets/stills/desktop/1920x1080/scene-03-ula-boots-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-03-ula-boots-start.png',
    accent: '#d0a85f',
    scroll: 1.2,
    linger: 0.24,
    titleLead: 'Wenta',
    titleDetail: 'Fish-skin boots for ice and winter',
    body: 'Fish skin is turned upwards and gathered to form the sole, then joined to the vamp and high shaft. The finished boots provide warmth and protection on wet or frozen ground.',
    bodyMobile: 'Gathered fish skin forms a warm, water-resistant boot for frozen ground.',
    tags: ['Wenta', 'Fish-skin boots', 'Gathered construction'],
  },
  {
    id: 'tools',
    label: 'Tools',
    still: 'assets/stills/desktop/1920x1080/scene-04-tools-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-04-tools-start.png',
    accent: '#a7792f',
    scroll: 1.28,
    linger: 0.2,
    titleLead: 'Craft tools',
    titleDetail: 'Preparing and stitching fish skin',
    body: 'Wooden mallets and blades soften and prepare the skin. Bone needles, fish-skin thread and fish glue are used to join panels and apply ornament.',
    bodyMobile: 'Mallets soften the skin; bone needles, thread and fish glue join the panels.',
    tags: ['Wooden mallet', 'Wooden blade', 'Bone needle'],
  },
  {
    id: 'patterns',
    label: 'Motifs',
    still: 'assets/stills/desktop/1920x1080/scene-05-patterns-start.png',
    stillMobile: 'assets/stills/mobile/1080x1920/scene-05-patterns-start.png',
    accent: '#d4b46f',
    scroll: 1.5,
    linger: 0.32,
    titleLead: 'Fish-skin motifs',
    titleDetail: 'Memory carried in pattern',
    body: 'Cloud scrolls, water waves, fish scales, geometric forms and animals are painted, appliquéd or stitched into the surface of the skin.',
    bodyMobile: 'Cloud scrolls, waves and scales are painted, appliquéd or stitched into the skin.',
    tags: ['Cloud scrolls', 'Water waves', 'Fish scales'],
    cta: {
      primary: { label: 'Explore the Heritage Archive', href: '#heritage-wall' },
      secondary: { label: 'Back to the beginning', href: '#top' },
    },
  },
];

mountScrollWorld(document.getElementById('world'), {
  brand: { name: 'Hezhe Fish Skin', href: '#top' },
  cta: { label: 'Heritage Archive', href: '#heritage-wall' },
  hint: 'Scroll to enter',
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
world.querySelector('.sw-route')?.setAttribute('aria-label', 'Exhibition chapters');
world.querySelectorAll('.sw-route__dot').forEach((button, index) => {
  button.setAttribute('aria-label', `Go to chapter ${index + 1}: ${sections[index].label}`);
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
