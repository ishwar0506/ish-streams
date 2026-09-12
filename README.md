# Screening Room

A tiny static site with a grid of thumbnails. Clicking one opens the video in
Google Drive's own player, inline, without leaving the page. No backend, no
database, no cost.

Files:
- `index.html` — the page structure
- `style.css` — the look
- `script.js` — builds the grid and the player popup
- `videos.js` — **the only file you'll normally touch** — your list of videos

## 1. Add a video

For each video:

1. Upload it to Google Drive (if it isn't already there).
2. Right-click the file → **Share**.
3. Under "General access", keep it as **Restricted**, not "Anyone with the
   link". Add the specific people you want to allow, by their Google email,
   as **Viewer**. This is what actually controls who can watch — the website
   itself has no login of its own.
4. Copy the file's link. It looks like:
   `https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQrSt/view`
   The part between `/d/` and `/view` is the file ID.
5. Open `videos.js` and add a block:

```js
{
  title: "Whatever you want shown",
  driveId: "1AbCdEfGhIjKlMnOpQrSt",
  thumbnail: ""
}
```

Leave `thumbnail` empty first — the site will try to pull a thumbnail
automatically from Drive. If it doesn't show up (Drive is occasionally strict
about auto-thumbnails for restricted files), paste any image URL into
`thumbnail` instead (e.g. a screenshot you upload somewhere, or an image
hosted anywhere public).

Delete the placeholder "Sample video" block once you've added your own.

## 2. Try it locally first (optional)

Just double-click `index.html` to open it in a browser and check the grid
looks right before you put it online.

## 3. Host it for free

Two easy, free options. Both let you take the site down in one click later.

### Option A — Netlify Drop (simplest, no account needed to start)

1. Go to **https://app.netlify.com/drop**
2. Drag the whole `video-site` folder onto the page.
3. You get a live URL immediately (something like
   `random-name-123.netlify.app`).
4. To update it later: make an account (free) so the site is saved to it,
   then drag the folder again to redeploy, or use Netlify's "Deploys" tab.
5. To take it down: open the site in your Netlify dashboard → **Site
   settings** → **Delete site**. Gone instantly.

### Option B — GitHub Pages (if you already use GitHub)

1. Create a new repository, upload these files to it.
2. Go to **Settings → Pages**, set the source to your main branch.
3. GitHub gives you a URL like `yourname.github.io/repo-name`.
4. To update: push new commits (e.g. after editing `videos.js`).
5. To take it down: Settings → Pages → set source back to "None", or delete
   the repository entirely.

Either way, hosting is 100% free for a static site like this.

## 4. Playing videos

Whoever visits the site and clicks a thumbnail must be **signed into the
Google account you shared the file with**. Google Drive will check
permissions when it loads inside the player — people you haven't added will
see Drive's "request access" screen instead of the video, even though the
site itself is public.

## Notes / limits

- The auto-thumbnail (`drive.google.com/thumbnail?id=...`) sometimes doesn't
  render for files restricted to specific people — this is a Drive quirk,
  not a bug in the site. Use a custom `thumbnail` URL if that happens.
- This displays videos; it doesn't upload or store them. Google Drive
  remains the only place the actual video files live.
- There's no size limit on the video list — add as many entries to
  `videos.js` as you like.
