// Add one entry per video. That's the only editing you need to do.
//
// driveId   - the file ID from the Google Drive share link
//             e.g. https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQrSt/view
//                                                    ^^^^^^^^^^^^^^^^^^^^ this part
// title     - shown under the thumbnail
// thumbnail - optional. Leave as "" to auto-generate a thumbnail from Drive.
//             If Drive's auto-thumbnail doesn't load (it sometimes won't for
//             files shared with specific people only), paste your own image
//             URL here instead.

// Add one entry per video. That's the only editing you need to do.
//
// link      - just paste the whole Google Drive share link, e.g.
//             https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQrSt/view?usp=sharing
//             The site figures out the file ID from it automatically.
// title     - shown over the bottom of the poster
// thumbnail - a poster image URL (portrait works best, e.g. 2:3 ratio).
//             Leave as "" to fall back to Drive's auto-generated thumbnail,
//             but that's a landscape video frame, not a poster — for the
//             poster-wall look, paste your own image URL here.

const VIDEOS = [
  {
    title: "Oldboy (2003)",
    link: "https://drive.google.com/file/d/1HP__avu1krPifBi5NXWuN0A-D3Wn-oom/view?usp=drive_link",
    thumbnail: "https://image.tmdb.org/t/p/original/p4AqYjv70O1KjKA47x1Tk5i4djL.jpg"
  },
  {
    title: "The Shawshank Redemption",
    link: "https://drive.google.com/file/d/1-hHQWQ6zPfnAESIToJAVgyYhLKEJh6kj/view?usp=drive_link",
    thumbnail: "https://image.tmdb.org/t/p/w600_and_h900_face/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"
  },
  {
    title: "Se7en",
    link: "https://drive.google.com/file/d/1DLVdxDE-DwnntovSqzf0F9_mzoMaGu7_/view?usp=drive_link",
    thumbnail: "https://image.tmdb.org/t/p/w600_and_h900_face/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg"
  },
  {
    title: "Fight Club",
    link: "https://drive.google.com/file/d/16UFOxYfwIMa99ZxAnG0Cc8E0rMbULh2f/view?usp=drive_link",
    thumbnail: "https://image.tmdb.org/t/p/w600_and_h900_face/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg"
  },
  {
    title: "Life of Pi",
    link: "https://drive.google.com/file/d/1-6erWd-jWPaOMgl3Co9M7tCX0id26lJO/view?usp=drive_link",
    thumbnail: "https://image.tmdb.org/t/p/w600_and_h900_face/iLgRu4hhSr6V1uManX6ukDriiSc.jpg"
  },
  {
    title: "The Dark Knight",
    link: "https://drive.google.com/file/d/1EwnPUCJwqfKMnrd9nsW8njlIdPpgNjbE/view?usp=drive_link",
    thumbnail: "https://image.tmdb.org/t/p/w600_and_h900_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },

];


  // Copy the block above and paste it below to add more, e.g.:
  // {
  //   title: "Another video",
  //   driveId: "1XyZ...",
  //   thumbnail: ""
  // },
