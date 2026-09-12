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
  {
    title: "The Batman (2022)",
    link: "https://drive.google.com/file/d/1T3k98biYwiJ7cgTz4kfV-2kBHE7jJtmv/view?usp=drive_link",
    thumbnail: "https://image.tmdb.org/t/p/w600_and_h900_face/3WGuOIXrw8QHSUF2RyIa1kHAWfk.jpg"
  },
  {
    title: "Openheimer",
    link: "https://u.pcloud.link/publink/show?code=XZ68SzJZqoLcyj1tomRh5gg7rG8y4mypWpCk",
    thumbnail: "https://theposterdb.com/api/assets/429777/view"
  },
  {
    title: "Once upon a time in Hollywood",
    link: "https://u.pcloud.link/publink/show?code=XZbbSzJZVppqnUhEsV8jv01ewV7RtkUqrA8k",
    thumbnail: "https://image.tmdb.org/t/p/original/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg"
  },

  // Copy a block above and paste it below to add more, e.g.:
  // {
  //   title: "Another video (Drive)",
  //   link: "https://drive.google.com/file/d/1XyZ.../view?usp=sharing",
  //   thumbnail: ""
  // },
  // {
  //   title: "Another video (pCloud)",
  //   link: "https://u.pcloud.link/publink/show?code=XXXXXXXXXX",
  //   thumbnail: "https://your-poster-image-url.jpg"
  // },

];
