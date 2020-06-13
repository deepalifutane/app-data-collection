var gplay = require('google-play-scraper');

  gplay.search({
    term: "ptsd",
    num: 30
  }).then(console.log, console.log );  