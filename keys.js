// SPOTIFY KEY EXPORT
console.log('keys.js is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

// OMDB KEY EXPORT
exports.omdbKey = process.env.OMDB_KEY;

//BANDS IN TOWN KEY EXPORT
exports.bandsID = process.env.BANDS_IN_TOWN;