(function () {
  const grid = document.getElementById('grid');
  const emptyNote = document.getElementById('empty-note');
  const modal = document.getElementById('modal');
  const modalIframe = document.getElementById('modal-iframe');
  const modalTitle = document.getElementById('modal-title');
  const modalClose = document.getElementById('modal-close');

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
    .map(v => ({ ...v, driveId: extractDriveId(v.link) }))
    .filter(v => v.driveId && v.driveId !== 'PASTE_DRIVE_LINK_HERE');

  if (entries.length === 0) {
    emptyNote.hidden = false;
  }

  entries.forEach(video => {
    const card = document.createElement('button');
    card.className = 'card';
    card.type = 'button';
    card.setAttribute('aria-label', 'Play ' + video.title);

    const sprockets = document.createElement('div');
    sprockets.className = 'sprockets';

    const thumbWrap = document.createElement('div');
    thumbWrap.className = 'thumb-wrap';

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.alt = '';
    img.src = video.thumbnail || `https://drive.google.com/thumbnail?id=${video.driveId}&sz=w480`;
    img.onerror = function () {
      thumbWrap.innerHTML = '';
      const fallback = document.createElement('div');
      fallback.className = 'thumb-fallback';
      fallback.textContent = video.title;
      thumbWrap.appendChild(fallback);
    };

    const playMark = document.createElement('span');
    playMark.className = 'play-mark';

    const titleOverlay = document.createElement('div');
    titleOverlay.className = 'title-overlay';
    titleOverlay.textContent = video.title;

    thumbWrap.appendChild(img);
    thumbWrap.appendChild(playMark);
    thumbWrap.appendChild(titleOverlay);

    card.appendChild(sprockets);
    card.appendChild(thumbWrap);

    card.addEventListener('click', () => openModal(video));

    grid.appendChild(card);
  });

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
})();
