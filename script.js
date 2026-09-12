(function () {
  const grid = document.getElementById('grid');
  const emptyNote = document.getElementById('empty-note');
  const nowPlaying = document.getElementById('now-playing');
  const nowPlayingTitle = document.getElementById('now-playing-title');
  const nowPlayingLink = document.getElementById('now-playing-link');

  // Accepts a bare file ID, or a full Drive URL pasted by mistake
  // (/file/d/ID/... or open?id=ID), and returns just the ID.
  function extractDriveId(raw) {
    if (!raw) return raw;
    const fileMatch = raw.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileMatch) return fileMatch[1];
    const openMatch = raw.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (openMatch) return openMatch[1];
    return raw.trim();
  }

  const entries = (typeof VIDEOS !== 'undefined' ? VIDEOS : [])
    .map(v => ({ ...v, driveId: extractDriveId(v.driveId) }))
    .filter(v => v.driveId && v.driveId !== 'PASTE_FILE_ID_HERE');

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

    thumbWrap.appendChild(img);
    thumbWrap.appendChild(playMark);

    const titleEl = document.createElement('div');
    titleEl.className = 'card-title';
    titleEl.textContent = video.title;

    card.appendChild(sprockets);
    card.appendChild(thumbWrap);
    card.appendChild(titleEl);

    card.addEventListener('click', () => playVideo(video));

    grid.appendChild(card);
  });

  function playVideo(video) {
    const url = `https://drive.google.com/file/d/${video.driveId}/view`;
    window.open(url, '_blank', 'noopener');

    nowPlayingTitle.textContent = video.title;
    nowPlayingLink.href = url;
    nowPlaying.hidden = false;
  }
})();
