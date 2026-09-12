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

const VIDEOS = [
  {
    title: "Oldboy(2003)",
    driveId: "1HP__avu1krPifBi5NXWuN0A-D3Wn-oom/view?usp=sharing",
    thumbnail: "https://image.tmdb.org/t/p/original/p4AqYjv70O1KjKA47x1Tk5i4djL.jpg"
  },

  // Copy the block above and paste it below to add more, e.g.:
  // {
  //   title: "Another video",
  //   driveId: "1XyZ...",
  //   thumbnail: ""
  // },
];
