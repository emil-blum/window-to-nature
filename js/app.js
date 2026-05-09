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
    },
    {
      embedId: 'v4zcdC-fEKw',
      title: 'Victoria Falls Safari Lodge',
      org: 'Africam',
      link: 'https://www.africam.com/',
      location: 'Zimbabwe'
    },
    {
      embedId: 'uguioUQHH0M',
      title: 'Stony Point Nature Reserve',
      org: 'Africam',
      link: 'https://www.africam.com/',
      location: 'South Africa'
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
    { title: 'Flowing River & Bird Songs',   file: 'sounds/flowing-river-birds.mp3' },
    { title: 'Bubbling Mountain Stream',     file: 'sounds/bubbling-mountain-stream.mp3' },
    { title: 'Insects at Night',             file: 'sounds/insects-at-night.mp3' },
    { title: 'Mountain Forest Stream',       file: 'sounds/mountain-forest-stream.mp3' },
    { title: 'Nightly Insect Songs',         file: 'sounds/nightly-insect-songs.mp3' },
    { title: 'Summer Rain',                  file: 'sounds/summer-rain.mp3' }
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

  // ── Fullscreen ──
  var fsBtn       = document.getElementById('fullscreen-btn');
  var icoExpand   = document.getElementById('ico-expand');
  var icoCompress = document.getElementById('ico-compress');

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  function updateFullscreenIcon() {
    var isFs = !!document.fullscreenElement;
    icoExpand.style.display   = isFs ? 'none' : '';
    icoCompress.style.display = isFs ? ''     : 'none';
  }

  fsBtn.addEventListener('click', function(e) { e.stopPropagation(); toggleFullscreen(); });
  document.addEventListener('fullscreenchange', updateFullscreenIcon);

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
    else if (e.key === 'f' || e.key === 'F') toggleFullscreen();
  });

  // =============================================
  //  INIT
  // =============================================

  renderCurrent();
  showUI();

  // =============================================
  //  POMODORO / FOCUS TIMER
  // =============================================

  var pomState     = 'idle'; // idle | running | paused | complete | break
  var pomTasks     = [
    { text: '', done: false },
    { text: '', done: false },
    { text: '', done: false }
  ];
  var pomDuration  = 25;  // minutes
  var pomRemaining = 0;   // seconds
  var pomInterval  = null;

  var pomOverlay  = document.getElementById('pom-overlay');
  var pomBackdrop = document.getElementById('pom-backdrop');
  var pomCloseBtn = document.getElementById('pom-close');
  var pomBtnEl    = document.getElementById('pom-btn');
  var pomPlayer   = document.getElementById('pomodoro-player');
  var pomPillTask = document.getElementById('pom-pill-task');
  var pomPillSep  = document.getElementById('pom-pill-sep');
  var pomPillTime = document.getElementById('pom-pill-time');

  function pomFmt(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  function pomFirstTask() {
    for (var i = 0; i < pomTasks.length; i++) {
      if (!pomTasks[i].done && pomTasks[i].text.trim()) return pomTasks[i].text.trim();
    }
    return '';
  }

  function pomTrunc(str, max) {
    return str.length > max ? str.slice(0, max) + '…' : str;
  }

  // ── Pill ──

  function pomUpdatePill() {
    var active = (pomState === 'running' || pomState === 'paused' || pomState === 'break');
    if (active) {
      pomPlayer.classList.add('active');
      pomBtnEl.classList.add('active');
      if (pomState === 'break') {
        pomPillTask.textContent = 'On a break';
        pomPillSep.style.display = 'none';
        pomPillTime.textContent = '';
      } else {
        var task = pomFirstTask();
        pomPillTask.textContent = pomTrunc(task || 'Focus', 22);
        pomPillSep.style.display = task ? '' : 'none';
        pomPillTime.textContent = pomFmt(pomRemaining);
      }
    } else {
      pomPlayer.classList.remove('active');
      pomBtnEl.classList.remove('active');
    }
  }

  // ── Card rendering ──

  function pomRenderCard() {
    var title        = document.getElementById('pom-title');
    var completeMsg  = document.getElementById('pom-complete-msg');
    var breakMsg     = document.getElementById('pom-break-msg');
    var timeDisplay  = document.getElementById('pom-time-display');
    var timeBig      = document.getElementById('pom-time-big');
    var durSection   = document.getElementById('pom-duration-section');
    var durInput     = document.getElementById('pom-duration-input');
    var actions      = document.getElementById('pom-actions');

    completeMsg.style.display = 'none';
    breakMsg.style.display    = 'none';
    timeDisplay.style.display = 'none';
    durSection.style.display  = 'none';

    if (pomState === 'idle') {
      title.textContent = 'Focus';
      durSection.style.display = '';
      durInput.value = pomDuration;
      actions.innerHTML = '<button class="pom-btn-primary" id="pom-start">Start Focus</button>';
      document.getElementById('pom-start').addEventListener('click', pomStartTimer);

    } else if (pomState === 'running' || pomState === 'paused') {
      title.textContent = pomState === 'paused' ? 'Paused' : 'Focusing';
      timeDisplay.style.display = '';
      timeBig.textContent = pomFmt(pomRemaining);
      var pauseLabel = pomState === 'running' ? 'Pause' : 'Resume';
      actions.innerHTML =
        '<div class="pom-btn-row">' +
          '<button class="pom-btn-secondary" id="pom-pause">' + pauseLabel + '</button>' +
          '<button class="pom-btn-secondary" id="pom-reset">Reset</button>' +
        '</div>';
      document.getElementById('pom-pause').addEventListener('click', pomTogglePause);
      document.getElementById('pom-reset').addEventListener('click', pomReset);

    } else if (pomState === 'complete') {
      title.textContent = 'Session done';
      completeMsg.style.display = '';
      actions.innerHTML =
        '<div class="pom-btn-row">' +
          '<button class="pom-btn-secondary" id="pom-take-break">Take a break</button>' +
          '<button class="pom-btn-primary" style="flex:1" id="pom-keep-going">Keep going</button>' +
        '</div>';
      document.getElementById('pom-take-break').addEventListener('click', pomTakeBreak);
      document.getElementById('pom-keep-going').addEventListener('click', pomKeepGoing);

    } else if (pomState === 'break') {
      title.textContent = 'On a break';
      breakMsg.style.display = '';
      actions.innerHTML = '<button class="pom-btn-primary" id="pom-back-focus">Back to focus</button>';
      document.getElementById('pom-back-focus').addEventListener('click', pomBackToFocus);
    }

    pomRenderTasks();
  }

  // ── Task rendering ──

  function pomRenderTasks() {
    var container = document.getElementById('pom-tasks');
    var canEdit = (pomState === 'idle');
    var canDrag = (pomState === 'idle');

    container.innerHTML = '';

    // pomTasks array order IS the display order — no separate sort.
    // Done tasks are moved to end of the array by the checkbox handler.
    pomTasks.forEach(function(task, idx) {
      var item = document.createElement('div');
      item.className = 'pom-task-item' + (task.done ? ' done' : '');

      if (canDrag && !task.done) {
        var handle = document.createElement('div');
        handle.className = 'pom-drag-handle';
        for (var k = 0; k < 3; k++) handle.appendChild(document.createElement('span'));
        item.appendChild(handle);
        pomBindPointerDrag(handle, item, idx, container);
      }

      var check = document.createElement('button');
      check.className = 'pom-task-check';
      check.setAttribute('aria-label', 'Mark done');
      check.innerHTML = '<svg viewBox="0 0 12 12" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 6 5 9 10 3"/></svg>';
      check.addEventListener('click', function(e) {
        e.stopPropagation();
        task.done = !task.done;
        // Move done tasks to end; undone tasks before first done task
        pomTasks.splice(idx, 1);
        if (task.done) {
          pomTasks.push(task);
        } else {
          var firstDone = -1;
          for (var j = 0; j < pomTasks.length; j++) {
            if (pomTasks[j].done) { firstDone = j; break; }
          }
          pomTasks.splice(firstDone === -1 ? pomTasks.length : firstDone, 0, task);
        }
        pomRenderTasks();
      });
      item.appendChild(check);

      var input = document.createElement('input');
      input.type = 'text';
      input.className = 'pom-task-input';
      input.placeholder = 'Task ' + (idx + 1) + '…';
      input.value = task.text;
      input.maxLength = 60;
      if (!canEdit) input.readOnly = true;
      input.addEventListener('input', function() { task.text = input.value; pomUpdatePill(); });
      input.addEventListener('click', function(e) { e.stopPropagation(); });
      input.addEventListener('mousedown', function(e) { e.stopPropagation(); });
      item.appendChild(input);

      container.appendChild(item);
    });
  }

  // ── Pointer-based drag with physical slide animation ──

  function pomBindPointerDrag(handle, itemEl, srcIdx, container) {
    handle.style.touchAction = 'none';

    handle.addEventListener('pointerdown', function(e) {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();

      var allItems = Array.from(container.querySelectorAll('.pom-task-item'));
      var itemRect = itemEl.getBoundingClientRect();
      var offsetY  = e.clientY - itemRect.top;
      var itemH    = itemEl.offsetHeight;
      var slotH    = itemH + 6; // matches CSS gap:6px

      // Snapshot natural Y centres of all slots before any animation
      var naturalMids = allItems.map(function(el) {
        return el.getBoundingClientRect().top + el.offsetHeight / 2;
      });

      // Floating clone that follows the pointer
      var clone = itemEl.cloneNode(true);
      clone.style.cssText = [
        'position:fixed',
        'left:'  + itemRect.left  + 'px',
        'width:' + itemRect.width + 'px',
        'top:'   + itemRect.top   + 'px',
        'z-index:9999',
        'pointer-events:none',
        'transform:scale(1.03)',
        'box-shadow:0 10px 36px rgba(0,0,0,0.6)',
        'border:1px solid rgba(255,255,255,0.25)',
        'background:rgba(28,28,32,0.97)',
        'border-radius:10px',
        'transition:box-shadow 0.15s ease'
      ].join(';');
      document.body.appendChild(clone);

      // Original slot becomes invisible placeholder (keeps the gap)
      itemEl.style.opacity = '0';

      // Pre-enable smooth slide on siblings
      allItems.forEach(function(el) {
        if (el !== itemEl) el.style.transition = 'transform 0.18s cubic-bezier(0.16,1,0.3,1)';
      });

      var targetIdx = srcIdx;

      function calcTarget(clientY) {
        // Find which slot the pointer's centre sits above
        var t = 0;
        for (var i = 0; i < allItems.length; i++) {
          if (clientY > naturalMids[i]) t = i + 1;
        }
        return Math.min(allItems.length - 1, t);
      }

      function applyShifts(tgt) {
        allItems.forEach(function(el, i) {
          if (el === itemEl) return;
          var shift = 0;
          if (srcIdx < tgt && i > srcIdx && i <= tgt)  shift = -slotH;
          if (srcIdx > tgt && i >= tgt && i < srcIdx)  shift =  slotH;
          el.style.transform = shift ? 'translateY(' + shift + 'px)' : '';
        });
      }

      handle.setPointerCapture(e.pointerId);

      function onMove(e) {
        clone.style.top = (e.clientY - offsetY) + 'px';
        var t = calcTarget(e.clientY);
        if (t !== targetIdx) { targetIdx = t; applyShifts(targetIdx); }
      }

      function onEnd() {
        handle.removeEventListener('pointermove', onMove);
        handle.removeEventListener('pointerup',   onEnd);
        handle.removeEventListener('pointercancel', onEnd);

        clone.remove();
        itemEl.style.opacity = '';
        allItems.forEach(function(el) { el.style.transform = ''; el.style.transition = ''; });

        if (targetIdx !== srcIdx) {
          var moved = pomTasks.splice(srcIdx, 1)[0];
          pomTasks.splice(targetIdx, 0, moved);
          pomRenderTasks();
        }
      }

      handle.addEventListener('pointermove', onMove);
      handle.addEventListener('pointerup',   onEnd);
      handle.addEventListener('pointercancel', onEnd);

      applyShifts(targetIdx);
    });
  }

  // ── Timer ──

  function pomTick() {
    if (pomState !== 'running') return;
    pomRemaining--;
    pomUpdatePill();
    var timeBig = document.getElementById('pom-time-big');
    if (timeBig) timeBig.textContent = pomFmt(pomRemaining);
    if (pomRemaining <= 0) {
      clearInterval(pomInterval);
      pomInterval = null;
      pomSessionComplete();
    }
  }

  function pomStartTimer() {
    var durInput = document.getElementById('pom-duration-input');
    if (durInput) pomDuration = Math.max(1, Math.min(180, parseInt(durInput.value, 10) || 25));
    pomRemaining = pomDuration * 60;
    pomState = 'running';
    clearInterval(pomInterval);
    pomInterval = setInterval(pomTick, 1000);
    pomClosePop();
    pomUpdatePill();
  }

  function pomTogglePause() {
    if (pomState === 'running') {
      pomState = 'paused';
      clearInterval(pomInterval);
      pomInterval = null;
    } else if (pomState === 'paused') {
      pomState = 'running';
      pomInterval = setInterval(pomTick, 1000);
    }
    pomRenderCard();
    pomUpdatePill();
  }

  function pomReset() {
    clearInterval(pomInterval);
    pomInterval = null;
    pomState = 'idle';
    pomRemaining = 0;
    pomUpdatePill();
    pomRenderCard();
  }

  function pomSessionComplete() {
    pomState = 'complete';
    pomUpdatePill();
    pomPlayPing();
    pomPauseNatureSounds();
    pomOpenPop();
  }

  function pomTakeBreak() {
    pomState = 'break';
    pomUpdatePill();
    pomClosePop();
  }

  function pomKeepGoing() {
    pomState = 'idle';
    pomRenderCard();
  }

  function pomBackToFocus() {
    pomState = 'idle';
    pomRenderCard();
  }

  // ── Overlay ──

  function pomOpenPop() {
    pomRenderCard();
    pomOverlay.classList.add('open');
  }

  function pomClosePop() {
    pomOverlay.classList.remove('open');
    if (pomState === 'complete') {
      pomState = 'idle';
      pomUpdatePill();
    }
  }

  // ── Sound ping (Web Audio API) ──

  function pomPlayPing() {
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      [[0, 880], [0.35, 1108], [0.7, 880]].forEach(function(pair) {
        var delay = pair[0], freq = pair[1];
        var osc  = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, ctx.currentTime + delay);
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + delay + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.9);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.95);
      });
    } catch(e) {}
  }

  function pomPauseNatureSounds() {
    if (soundPlaying && audioEl) {
      audioEl.pause();
      soundPlaying = false;
      updateSoundUI();
    }
  }

  // ── Events ──

  pomBtnEl.addEventListener('click', function(e) {
    e.stopPropagation();
    if (pomOverlay.classList.contains('open')) pomClosePop();
    else pomOpenPop();
  });

  pomCloseBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    pomClosePop();
  });

  pomBackdrop.addEventListener('click', function(e) {
    e.stopPropagation();
    pomClosePop();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && pomOverlay.classList.contains('open')) {
      pomClosePop();
    }
  });

  pomRenderTasks();

})();
