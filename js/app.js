(function() {
  'use strict';

  // =============================================
  //  IMAGES
  //  Add or remove entries here to manage the stills library.
  //  Each entry needs: url, photographer, link, source, location
  // =============================================

  var IMAGES = [
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2560&q=85',
      photographer: 'Samuel Ferrara',
      link: 'https://unsplash.com/@samferrara',
      source: 'Unsplash',
      location: 'Swiss Alps, Switzerland'
    },
    {
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=2560&q=85',
      photographer: 'Lukasz Szmigiel',
      link: 'https://unsplash.com/@szmigieldesign',
      source: 'Unsplash',
      location: 'Foggy forest valley'
    },
    {
      url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=2560&q=85',
      photographer: 'Qingbao Meng',
      link: 'https://unsplash.com/@ideasboom',
      source: 'Unsplash',
      location: 'Aerial green hills'
    },
    {
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2560&q=85',
      photographer: 'Luca Bravo',
      link: 'https://unsplash.com/@lucabravo',
      source: 'Unsplash',
      location: 'Forest path, Germany'
    },
    {
      url: 'https://images.unsplash.com/photo-1465056836900-8f1e940b2eb8?w=2560&q=85',
      photographer: 'Dave Hoefler',
      link: 'https://unsplash.com/@davehoefler',
      source: 'Unsplash',
      location: 'Mountain lake, Oregon'
    },
    {
      url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=2560&q=85',
      photographer: 'Robert Lukeman',
      link: 'https://unsplash.com/@robertlukeman',
      source: 'Unsplash',
      location: 'Green meadow, New Zealand'
    },
    {
      url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=2560&q=85',
      photographer: 'Kazuend',
      link: 'https://unsplash.com/@kazuend',
      source: 'Unsplash',
      location: 'Waterfall bridge, Bali'
    },
    {
      url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=2560&q=85',
      photographer: 'Matt Palmer',
      link: 'https://unsplash.com/@mattpalmer',
      source: 'Unsplash',
      location: 'Pine forest, California'
    },
    {
      url: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=2560&q=85',
      photographer: 'Jainik Vora',
      link: 'https://unsplash.com/@jainikvora',
      source: 'Unsplash',
      location: 'Misty mountains, India'
    },
    {
      url: 'https://images.unsplash.com/photo-1518173946687-a544757caa5b?w=2560&q=85',
      photographer: 'Casey Horner',
      link: 'https://unsplash.com/@mischievous_penguins',
      source: 'Unsplash',
      location: 'Rolling hills, Iceland'
    }
  ];

  // =============================================
  //  LIVE STREAMS
  //  Add or remove entries here to manage the live cam library.
  //  Each entry needs: embedId, title, org, link, location
  //
  //  NOTE: YouTube live stream IDs change when a stream restarts.
  //  If a stream shows an error, visit the source channel and
  //  copy the new video ID from the live URL.
  // =============================================

  var STREAMS = [
    {
      embedId: 'MK3tOW8TgAI',
      title: 'Black Eagle Nest',
      org: 'Africam',
      link: 'https://www.africam.com/',
      location: 'Selati Game Reserve, South Africa'
    },
    {
      embedId: 'jG0uYl5S44E',
      title: "Jack's Camp Waterhole",
      org: 'Africam',
      link: 'https://www.africam.com/',
      location: 'Kalahari, Botswana'
    },
    {
      embedId: 'Xe9CPAdyAro',
      title: 'Finch Hattons',
      org: 'Africam',
      link: 'https://www.africam.com/',
      location: 'Tsavo National Park, Kenya'
    },
    {
      embedId: 'DhCfRI7XssU',
      title: 'Hwange Safari Lodge',
      org: 'Africam',
      link: 'https://www.africam.com/',
      location: 'Hwange, Zimbabwe'
    },
    {
      embedId: 'mk02pEy3FdA',
      title: 'Camelthorn Waterhole',
      org: 'Africam',
      link: 'https://www.africam.com/',
      location: 'Botswana'
    },
    {
      embedId: '8JzwlpcVyKM',
      title: 'Jabulani Safari',
      org: 'Africam',
      link: 'https://www.africam.com/',
      location: 'South Africa'
    },
    {
      embedId: 'bEmFpjwMOvs',
      title: 'Lentorre Lodge',
      org: 'Africam',
      link: 'https://www.africam.com/',
      location: 'Kenya'
    }
  ];

  // =============================================
  //  AMBIENT SOUNDS
  //  Add or remove entries here to manage the sounds library.
  //  Place .mp3 files in the sounds/ folder and reference them below.
  //  Each entry needs: title, file (path relative to index.html)
  // =============================================

  var SOUNDS = [
    { title: 'Ambience — Troodos Mountains', file: 'sounds/ambience-troodos.mp3' },
    { title: 'Bird Songs in Forest',         file: 'sounds/bird-songs-forest.mp3' },
    { title: 'Flowing River & Bird Songs',   file: 'sounds/flowing-river-birds.mp3' }
  ];

  // =============================================
  //  STATE
  // =============================================

  var mode = 'images';
  var currentIndex = 0;
  var activeScene = 'a';
  var uiTimeout = null;
  var isTransitioning = false;
  var shuffledImages = [];
  var shuffledStreams = [];
  var soundPlaying = false;
  var soundTrackIndex = 0;
  var audioEl = null;

  // DOM
  var sceneA = document.getElementById('scene-a');
  var sceneB = document.getElementById('scene-b');
  var creditEl = document.getElementById('credit');
  var creditName = document.getElementById('credit-name');
  var creditMeta = document.getElementById('credit-meta');
  var creditLocation = document.getElementById('credit-location');
  var creditLocDivider = document.getElementById('credit-loc-divider');
  var counterEl = document.getElementById('counter');
  var liveIndicator = document.getElementById('live-indicator');
  var statusEl = document.getElementById('status');
  var statusText = document.getElementById('status-text');

  var audioPlayer = document.getElementById('audio-player');
  var audioToggle = document.getElementById('audio-toggle');
  var icoMuted = document.getElementById('ico-muted');
  var icoPlaying = document.getElementById('ico-playing');
  var audioVolume = document.getElementById('audio-volume');
  var audioTrackName = document.getElementById('audio-track-name');
  var audioPrevBtn = document.getElementById('audio-prev');
  var audioNextBtn = document.getElementById('audio-next');

  var infoBtn = document.getElementById('info-btn');
  var infoOverlay = document.getElementById('info-overlay');
  var infoBackdrop = document.getElementById('info-backdrop');
  var infoClose = document.getElementById('info-close');

  // =============================================
  //  SHUFFLE
  // =============================================

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = a[i]; a[i] = a[j]; a[j] = temp;
    }
    return a;
  }

  shuffledImages = shuffle(IMAGES);
  shuffledStreams = shuffle(STREAMS);

  // =============================================
  //  CROSSFADE
  // =============================================

  function getInactiveScene() { return activeScene === 'a' ? sceneB : sceneA; }
  function getActiveSceneEl() { return activeScene === 'a' ? sceneA : sceneB; }

  function crossfade() {
    isTransitioning = true;
    var oldActive = getActiveSceneEl();
    activeScene = activeScene === 'a' ? 'b' : 'a';
    var newActive = getActiveSceneEl();
    oldActive.classList.remove('active');
    newActive.classList.add('active');
    setTimeout(function() {
      oldActive.innerHTML = '';
      isTransitioning = false;
    }, 1400);
  }

  // =============================================
  //  UPDATE UI
  // =============================================

  function updateUI() {
    var item;
    if (mode === 'images') {
      item = shuffledImages[currentIndex];
      creditEl.href = item.link;
      creditName.textContent = item.photographer;
      creditMeta.textContent = item.source;
      creditMeta.style.display = '';
      if (item.location) {
        creditLocation.textContent = item.location;
        creditLocation.style.display = '';
        creditLocDivider.style.display = '';
      } else {
        creditLocation.style.display = 'none';
        creditLocDivider.style.display = 'none';
      }
      creditEl.style.display = 'flex';
      counterEl.textContent = (currentIndex + 1) + ' / ' + shuffledImages.length;
      liveIndicator.classList.remove('visible');
    } else {
      item = shuffledStreams[currentIndex];
      creditEl.href = item.link;
      creditName.textContent = item.title + ' \u2014 ' + item.org;
      creditMeta.textContent = '';
      creditMeta.style.display = 'none';
      if (item.location) {
        creditLocation.textContent = item.location;
        creditLocation.style.display = '';
        creditLocDivider.style.display = '';
      } else {
        creditLocation.style.display = 'none';
        creditLocDivider.style.display = 'none';
      }
      creditEl.style.display = 'flex';
      counterEl.textContent = (currentIndex + 1) + ' / ' + shuffledStreams.length;
      liveIndicator.classList.add('visible');
    }
  }

  // =============================================
  //  RENDER
  // =============================================

  function renderImage(index) {
    var item = shuffledImages[index];
    var target = getInactiveScene();
    statusText.textContent = 'Loading your view...';
    statusEl.classList.remove('hidden');

    var img = new Image();
    img.onload = function() {
      target.innerHTML = '';
      var imgEl = document.createElement('img');
      imgEl.src = item.url;
      imgEl.alt = item.location || 'Nature';
      imgEl.draggable = false;
      target.appendChild(imgEl);
      updateUI();
      statusEl.classList.add('hidden');
      requestAnimationFrame(function() { crossfade(); });
    };
    img.onerror = function() {
      statusText.textContent = 'Could not load this image. Use arrows to skip.';
      statusEl.classList.remove('hidden');
      isTransitioning = false;
      updateUI();
    };
    img.src = item.url;
  }

  function renderStream(index) {
    var item = shuffledStreams[index];
    var target = getInactiveScene();
    target.innerHTML = '';

    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + item.embedId
      + '?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0'
      + '&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    target.appendChild(iframe);

    updateUI();
    statusEl.classList.add('hidden');
    requestAnimationFrame(function() { crossfade(); });
  }

  function renderCurrent() {
    if (mode === 'images') renderImage(currentIndex);
    else renderStream(currentIndex);
  }

  // =============================================
  //  NAVIGATION
  // =============================================

  function getCollection() {
    return mode === 'images' ? shuffledImages : shuffledStreams;
  }

  function goNext() {
    if (isTransitioning) return;
    currentIndex = (currentIndex + 1) % getCollection().length;
    renderCurrent();
  }

  function goPrev() {
    if (isTransitioning) return;
    var col = getCollection();
    currentIndex = (currentIndex - 1 + col.length) % col.length;
    renderCurrent();
  }

  function switchMode(newMode) {
    if (newMode === mode || isTransitioning) return;
    mode = newMode;
    currentIndex = 0;
    var buttons = document.querySelectorAll('.mode-btn');
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].dataset.mode === mode) buttons[i].classList.add('active');
      else buttons[i].classList.remove('active');
    }
    renderCurrent();
  }

  // =============================================
  //  UI VISIBILITY
  // =============================================

  function showUI() {
    document.body.classList.add('ui-visible');
    clearTimeout(uiTimeout);
    uiTimeout = setTimeout(hideUI, 3500);
  }

  function hideUI() {
    if (infoOverlay.classList.contains('open')) return;
    document.body.classList.remove('ui-visible');
  }

  // =============================================
  //  INFO POPUP
  // =============================================

  function openInfo() {
    infoOverlay.classList.add('open');
    clearTimeout(uiTimeout);
  }

  function closeInfo() {
    infoOverlay.classList.remove('open');
    showUI();
  }

  infoBtn.addEventListener('click', function(e) { e.stopPropagation(); openInfo(); });
  infoClose.addEventListener('click', function(e) { e.stopPropagation(); closeInfo(); });
  infoBackdrop.addEventListener('click', function(e) { e.stopPropagation(); closeInfo(); });

  // =============================================
  //  AUDIO PLAYER
  // =============================================

  function initAudio() {
    if (!audioEl) {
      audioEl = new Audio();
      audioEl.loop = true;
      audioEl.volume = audioVolume.value / 100;
      audioEl.addEventListener('ended', function() { skipSound(1); });
      audioEl.addEventListener('error', function() {
        audioTrackName.textContent = '(unavailable)';
      });
    }
  }

  function expandPlayer() {
    audioPlayer.classList.remove('collapsed');
    audioPlayer.classList.add('expanded');
  }

  function collapsePlayer() {
    audioPlayer.classList.remove('expanded');
    audioPlayer.classList.add('collapsed');
  }

  function updateSoundUI() {
    audioTrackName.textContent = SOUNDS[soundTrackIndex].title;
    if (soundPlaying) {
      icoMuted.style.display = 'none';
      icoPlaying.style.display = 'block';
      audioToggle.classList.add('active');
      expandPlayer();
    } else {
      icoMuted.style.display = 'block';
      icoPlaying.style.display = 'none';
      audioToggle.classList.remove('active');
      collapsePlayer();
    }
  }

  function toggleSound() {
    initAudio();
    if (soundPlaying) {
      audioEl.pause();
      soundPlaying = false;
    } else {
      audioEl.src = SOUNDS[soundTrackIndex].file;
      audioEl.volume = audioVolume.value / 100;
      audioEl.play().catch(function() {
        audioTrackName.textContent = '(click to allow audio)';
      });
      soundPlaying = true;
    }
    updateSoundUI();
  }

  function skipSound(direction) {
    var len = SOUNDS.length;
    soundTrackIndex = (soundTrackIndex + direction + len) % len;
    if (soundPlaying && audioEl) {
      audioEl.src = SOUNDS[soundTrackIndex].file;
      audioEl.play().catch(function() {});
    }
    updateSoundUI();
  }

  audioToggle.addEventListener('click', function(e) { e.stopPropagation(); toggleSound(); });
  audioNextBtn.addEventListener('click', function(e) { e.stopPropagation(); skipSound(1); });
  audioPrevBtn.addEventListener('click', function(e) { e.stopPropagation(); skipSound(-1); });

  audioVolume.addEventListener('input', function() {
    if (audioEl) audioEl.volume = this.value / 100;
  });
  audioVolume.addEventListener('mousedown', function(e) { e.stopPropagation(); });
  audioVolume.addEventListener('touchstart', function(e) { e.stopPropagation(); });

  updateSoundUI();

  // =============================================
  //  GLOBAL EVENTS
  // =============================================

  document.addEventListener('mousemove', showUI);
  document.addEventListener('click', showUI);
  document.addEventListener('touchstart', showUI);

  document.getElementById('next').addEventListener('click', function(e) { e.stopPropagation(); goNext(); });
  document.getElementById('prev').addEventListener('click', function(e) { e.stopPropagation(); goPrev(); });
  document.getElementById('btn-images').addEventListener('click', function() { switchMode('images'); });
  document.getElementById('btn-streams').addEventListener('click', function() { switchMode('streams'); });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && infoOverlay.classList.contains('open')) {
      closeInfo(); return;
    }
    if (infoOverlay.classList.contains('open')) return;

    showUI();
    if (e.key === 'ArrowRight') goNext();
    else if (e.key === 'ArrowLeft') goPrev();
    else if (e.key === 's' || e.key === 'S') switchMode(mode === 'images' ? 'streams' : 'images');
    else if (e.key === 'm' || e.key === 'M') toggleSound();
  });

  // =============================================
  //  INIT
  // =============================================

  renderCurrent();
  showUI();

})();
