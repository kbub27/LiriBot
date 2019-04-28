// SPOTIFY KEY EXPORT
console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

// OMDB KEY EXPORT
exports.omdbKey = process.env.OMDB_KEY;

//BANDS IN TOWN KEY EXPORT
exports.bandsID = process.env.BAND_IN_TOWN;