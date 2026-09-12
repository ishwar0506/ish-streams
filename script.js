(function () {
  const grid = document.getElementById('grid');
  const emptyNote = document.getElementById('empty-note');
  const noResults = document.getElementById('no-results');
  const searchInput = document.getElementById('search');
  const modal = document.getElementById('modal');
  const modalIframe = document.getElementById('modal-iframe');
  const modalTitle = document.getElementById('modal-title');
  const modalClose = document.getElementById('modal-close');

  // Works out which cloud a link belongs to, so playback and thumbnails
  // can be handled the right way for each.
  function detectProvider(link) {
    if (!link) return 'unknown';
    if (/drive\.google\.com/.test(link)) return 'drive';
    if (/pcloud\.(com|link)/.test(link)) return 'pcloud';
    return 'unknown';
  }

  // Pulls the file ID out of a full Drive share link (or accepts a bare
  // ID too, in case someone pastes just that).
  function extractDriveId(raw) {
    if (!raw) return raw;
    const fileMatch = raw.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileMatch) return fileMatch[1];
    const openMatch = raw.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (openMatch) return openMatch[1];
    return raw.trim();
  }

  const entries = (typeof VIDEOS !== 'undefined' ? VIDEOS : [])
    .filter(v => v.link && v.link !== 'PASTE_LINK_HERE')
    .map(v => {
      const provider = detectProvider(v.link);
      return {
        ...v,
        provider,
        driveId: provider === 'drive' ? extractDriveId(v.link) : null
      };
    });

  if (entries.length === 0) {
    emptyNote.hidden = false;
  }

  entries.forEach(video => {
    const card = document.createElement('button');
    card.className = 'card';
    card.type = 'button';
    card.setAttribute('aria-label', 'Play ' + video.title);
    card.dataset.title = video.title.toLowerCase();

    const sprockets = document.createElement('div');
    sprockets.className = 'sprockets';

    const thumbWrap = document.createElement('div');
    thumbWrap.className = 'thumb-wrap';

    function showFallback() {
      thumbWrap.innerHTML = '';
      const fallback = document.createElement('div');
      fallback.className = 'thumb-fallback';
      fallback.textContent = video.title;
      thumbWrap.appendChild(fallback);
    }

    let thumbSrc = video.thumbnail;
    if (!thumbSrc && video.provider === 'drive') {
      thumbSrc = `https://drive.google.com/thumbnail?id=${video.driveId}&sz=w480`;
    }

    if (thumbSrc) {
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.alt = '';
      img.src = thumbSrc;
      img.onerror = showFallback;
      thumbWrap.appendChild(img);
    } else {
      showFallback();
    }

    const playMark = document.createElement('span');
    playMark.className = 'play-mark';

    const titleOverlay = document.createElement('div');
    titleOverlay.className = 'title-overlay';
    titleOverlay.textContent = video.title;

    thumbWrap.appendChild(playMark);
    thumbWrap.appendChild(titleOverlay);

    card.appendChild(sprockets);
    card.appendChild(thumbWrap);

    card.addEventListener('click', () => playVideo(video));

    grid.appendChild(card);
  });

  function playVideo(video) {
    if (video.provider === 'drive') {
      openModal(video);
    } else {
      // pCloud (and anything else) doesn't support reliable iframe
      // embedding — open its own player in a new tab instead.
      window.open(video.link, '_blank', 'noopener');
    }
  }

  function openModal(video) {
    modalIframe.src = `https://drive.google.com/file/d/${video.driveId}/preview`;
    modalTitle.textContent = video.title;
    modal.hidden = false;
    modalClose.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.hidden = true;
    modalIframe.src = '';
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  // Search — filters the grid by title as you type.
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;
      grid.querySelectorAll('.card').forEach(card => {
        const matches = !query || card.dataset.title.includes(query);
        card.hidden = !matches;
        if (matches) visibleCount++;
      });
      if (noResults) {
        noResults.hidden = !(query && visibleCount === 0);
      }
    });
  }
})();
