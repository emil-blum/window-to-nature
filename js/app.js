(function() {
  'use strict';

  // =============================================
  //  IMAGES
  //  Add or remove entries here to manage the stills library.
  //  Each entry needs: url, photographer, link, source, location
  // =============================================

  var IMAGES = [
    {
      url: 'https://images.unsplash.com/photo-1772289935663-80aa987be656?w=2560&q=85&fm=webp&auto=format',
      photographer: 'NIR HIMI',
      link: 'https://unsplash.com/@nirhimi',
      source: 'Unsplash',
      location: 'Spitzkoppe, Namibia'
    },
    {
      url: 'https://images.unsplash.com/photo-1771149076648-d0fdcd270f86?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Kristaps Ungurs',
      link: 'https://unsplash.com/@kristapsungurs',
      source: 'Unsplash',
      location: 'Location unknown'
    },
    {
      url: 'https://images.unsplash.com/photo-1772289935247-2de4bcacd7b4?w=2560&q=85&fm=webp&auto=format',
      photographer: 'NIR HIMI',
      link: 'https://unsplash.com/@nirhimi',
      source: 'Unsplash',
      location: 'Spitzkoppe, Namibia'
    },
    {
      url: 'https://images.unsplash.com/flagged/photo-1591409607878-b6b0221ceba8?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Tori Wise',
      link: 'https://unsplash.com/@toriwisephoto',
      source: 'Unsplash',
      location: 'San Diego, California, USA'
    },
    {
      url: 'https://images.unsplash.com/photo-1768834582204-3430797f89be?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Alan Jiang',
      link: 'https://unsplash.com/@alan_j',
      source: 'Unsplash',
      location: 'Seceda, South Tyrol, Italy'
    },
    {
      url: 'https://images.unsplash.com/photo-1770490085047-1460359929e7?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Iuliu Illes',
      link: 'https://unsplash.com/@illes_cristi',
      source: 'Unsplash',
      location: 'Location unknown'
    },
    {
      url: 'https://images.unsplash.com/photo-1768409234914-96f61529b7e2?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Intricate Explorer',
      link: 'https://unsplash.com/@intricateexplorer',
      source: 'Unsplash',
      location: 'Gardena Pass, South Tyrol, Italy'
    },
    {
      url: 'https://images.unsplash.com/photo-1770027217960-a0a09e423b77?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Evgeni Tcherkasski',
      link: 'https://unsplash.com/@evgenit',
      source: 'Unsplash',
      location: 'Kaiserstuhl, Germany'
    },
    {
      url: 'https://images.unsplash.com/photo-1769631417306-a1da09f42b20?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Marek Piwnicki',
      link: 'https://unsplash.com/@marekpiwnicki',
      source: 'Unsplash',
      location: 'South Tyrol, Italy'
    },
    {
      url: 'https://images.unsplash.com/photo-1769112112580-cee0f8a30413?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Dawid Zawiła',
      link: 'https://unsplash.com/@davealmine',
      source: 'Unsplash',
      location: 'Location unknown'
    },
    {
      url: 'https://images.unsplash.com/photo-1578637959542-ab12e1cbf39c?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Arun Clarke',
      link: 'https://unsplash.com/@arunclarke',
      source: 'Unsplash',
      location: 'Dandenong Ranges, Australia'
    },
    {
      url: 'https://images.unsplash.com/photo-1766548730089-e446483315b1?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Venti Views',
      link: 'https://unsplash.com/@ventiviews',
      source: 'Unsplash',
      location: 'Alabama Hills, California, USA'
    },
    {
      url: 'https://images.unsplash.com/photo-1762291834384-09118dda091d?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Nik Iurev',
      link: 'https://unsplash.com/@lastoops',
      source: 'Unsplash',
      location: 'Newfoundland, Canada'
    },
    {
      url: 'https://images.unsplash.com/photo-1639762940561-71e891372b1e?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Michele Marchesi',
      link: 'https://unsplash.com/@michelemarchesi',
      source: 'Unsplash',
      location: 'Monte Guglielmo, Italy'
    },
    {
      url: 'https://images.unsplash.com/photo-1765498068244-eb6043487aa3?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Royce Fonseca',
      link: 'https://unsplash.com/@casunshine0508',
      source: 'Unsplash',
      location: 'White Sands, New Mexico, USA'
    },
    {
      url: 'https://images.unsplash.com/photo-1765476608471-c30c09564def?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Marek Piwnicki',
      link: 'https://unsplash.com/@marekpiwnicki',
      source: 'Unsplash',
      location: 'Dolomites, Italy'
    },
    {
      url: 'https://images.unsplash.com/photo-1722505113117-c5e663002b3d?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Maksim Shutov',
      link: 'https://unsplash.com/@maksimshutov',
      source: 'Unsplash',
      location: 'Estonia'
    },
    {
      url: 'https://images.unsplash.com/photo-1557310017-faa4256c4169?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Bilou Bilal',
      link: 'https://unsplash.com/@biloubilou',
      source: 'Unsplash',
      location: 'Algeria'
    },
    {
      url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Luca Bravo',
      link: 'https://unsplash.com/@lucabravo',
      source: 'Unsplash',
      location: 'Lago di Braies, Italy'
    },
    {
      url: 'https://images.unsplash.com/photo-1533219480925-55054b668f15?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Sicheng Liu',
      link: 'https://unsplash.com/@lsc122746',
      source: 'Unsplash',
      location: 'Saihanba, China'
    },
    {
      url: 'https://images.unsplash.com/photo-1472017454701-20a80cfeaac5?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Vlad Shapochnikov',
      link: 'https://unsplash.com/@vladshap',
      source: 'Unsplash',
      location: 'Lake Louise, Canada'
    },
    {
      url: 'https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Christian Joudrey',
      link: 'https://unsplash.com/@cjoudrey',
      source: 'Unsplash',
      location: 'Yosemite, USA'
    },
    {
      url: 'https://images.unsplash.com/photo-1500885168199-dc1fde1d8177?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Niklas Tidbury',
      link: 'https://unsplash.com/@ntidbury',
      source: 'Unsplash',
      location: 'Appenzell, Switzerland'
    },
    {
      url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Damian Patkowski',
      link: 'https://unsplash.com/@damianpatkowski',
      source: 'Unsplash',
      location: 'Tsavo, Kenya'
    },
    {
      url: 'https://images.unsplash.com/photo-1532574754390-44dc5c6780bb?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Justin Lane',
      link: 'https://unsplash.com/@justinflane',
      source: 'Unsplash',
      location: 'Serengeti, Tanzania'
    },
    {
      url: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Lightscape',
      link: 'https://unsplash.com/@lightscape',
      source: 'Unsplash',
      location: 'Tromsø, Norway'
    },
    {
      url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Robert Lukeman',
      link: 'https://unsplash.com/@robertlukeman',
      source: 'Unsplash',
      location: 'Isle of Skye, Scotland'
    },
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Sam Ferrara',
      link: 'https://unsplash.com/@samferrara',
      source: 'Unsplash',
      location: 'Swiss Alps, Switzerland'
    },
    {
      url: 'https://images.unsplash.com/photo-1515250650815-aba93cc397cc?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Sam Ferrara',
      link: 'https://unsplash.com/@samferrara',
      source: 'Unsplash',
      location: 'New Zealand'
    },
    {
      url: 'https://images.unsplash.com/photo-1588171620174-cde0df33c7db?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Ruedi Häberli',
      link: 'https://unsplash.com/@ruehab',
      source: 'Unsplash',
      location: 'Iceland'
    },
    {
      url: 'https://images.unsplash.com/photo-1695105875900-3b75051bc326?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Zetong Li',
      link: 'https://unsplash.com/@zetong',
      source: 'Unsplash',
      location: 'Location unknown'
    },
    {
      url: 'https://images.unsplash.com/photo-1762976130179-4e534beff854?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Sergei Shershen',
      link: 'https://unsplash.com/@mackgreeb',
      source: 'Unsplash',
      location: 'Karelia, Russia'
    },
    {
      url: 'https://images.unsplash.com/photo-1540185814346-be28d041252e?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Gatis Vilaks',
      link: 'https://unsplash.com/@gatisv',
      source: 'Unsplash',
      location: 'Latvia'
    },
    {
      url: 'https://images.unsplash.com/photo-1628191606196-55736afd793b?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Lāsma Fedotova',
      link: 'https://unsplash.com/@lasma_fedotova',
      source: 'Unsplash',
      location: 'Latvia'
    },
    {
      url: 'https://images.unsplash.com/photo-1760132562597-dd9c467cd9cf?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Lukasz Szmigiel',
      link: 'https://unsplash.com/@szmigieldesign',
      source: 'Unsplash',
      location: 'Veľký Rozsutec, Slovakia'
    },
    {
      url: 'https://images.unsplash.com/photo-1462400362591-9ca55235346a?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Christian Joudrey',
      link: 'https://unsplash.com/@cjoudrey',
      source: 'Unsplash',
      location: 'Maui, Hawaii, USA'
    },
    {
      url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Qingbao Meng',
      link: 'https://unsplash.com/@ideasboom',
      source: 'Unsplash',
      location: 'Location unknown'
    },
    {
      url: 'https://images.unsplash.com/photo-1571692714879-48c5c6f76831?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Luca Bravo',
      link: 'https://unsplash.com/@lucabravo',
      source: 'Unsplash',
      location: 'Italy'
    },
    {
      url: 'https://images.unsplash.com/photo-1571164330912-270c6d07e212?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Luca Bravo',
      link: 'https://unsplash.com/@lucabravo',
      source: 'Unsplash',
      location: 'Val di Funes, Italy'
    },
    {
      url: 'https://images.unsplash.com/photo-1508144753681-9986d4df99b3?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Luca Bravo',
      link: 'https://unsplash.com/@lucabravo',
      source: 'Unsplash',
      location: 'Dolomites, Italy'
    },
    {
      url: 'https://images.unsplash.com/photo-1473283147055-e39c51463929?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Luca Bravo',
      link: 'https://unsplash.com/@lucabravo',
      source: 'Unsplash',
      location: 'Lago di Braies, Italy'
    },
    {
      url: 'https://images.unsplash.com/photo-1751249389638-37ea528a7026?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Matt Palmer',
      link: 'https://unsplash.com/@mattpalmer',
      source: 'Unsplash',
      location: 'Mie, Japan'
    },
    {
      url: 'https://images.unsplash.com/photo-1628075264489-f69550ac4dbb?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Matt Palmer',
      link: 'https://unsplash.com/@mattpalmer',
      source: 'Unsplash',
      location: 'Tasmania, Australia'
    },
    {
      url: 'https://images.unsplash.com/photo-1628075264881-5662f943aad2?w=2560&q=85&fm=webp&auto=format',
      photographer: 'Matt Palmer',
      link: 'https://unsplash.com/@mattpalmer',
      source: 'Unsplash',
      location: 'Death Valley, USA'
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

  // Pick image width once at load time based on screen size.
  // Mobile gets 1080px (covers 2× displays up to 540px wide).
  // Desktop gets 2560px for retina/large monitors.
  var IMG_WIDTH = window.innerWidth <= 768 ? 1080 : 2560;
  function imgUrl(url) {
    return url.replace(/([?&])w=\d+/, '$1w=' + IMG_WIDTH);
  }

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

    var src = imgUrl(item.url);
    var img = new Image();
    img.onload = function() {
      target.innerHTML = '';
      var imgEl = document.createElement('img');
      imgEl.src = src;
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
    img.src = src;
  }

  function renderStream(index) {
    var item = shuffledStreams[index];
    var target = getInactiveScene();
    target.innerHTML = '';

    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + item.embedId
      + '?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0'
      + '&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1'
      + '&fs=0&disablekb=1';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = false;
    iframe.loading = 'lazy';
    iframe.style.cssText = 'width:100%;height:100%;border:none;display:block;';

    // Transparent overlay blocks clicks from reaching YouTube UI,
    // preventing the player from going fullscreen or navigating away.
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:absolute;inset:0;z-index:1;';

    var wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:absolute;inset:0;';
    wrapper.appendChild(iframe);
    wrapper.appendChild(overlay);
    target.appendChild(wrapper);

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
