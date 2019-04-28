require('dotenv').config();

var keys = require('./keys');

//QUERY FOR OMDB
const omdbWrapper = require('omdb-wrapper').default;

const omdb = new omdbWrapper({
    apiKEY: keys.omdbKey
});
omdb.search.movies('forrest+gump')
    .then(data => {
        // do what you want with the data
        console.log(data.Search[0]);
    });
// QUERY FOR BANDS IN TOWN
// var bandsintown = require('bandsintown')(keys.bandsID);

// bandsintown.getArtistEventList('skrillex').then(function (events) {
//     // return array of events
//     console.log('\n------------\n')
//     console.log(events)
// });

//QUERY FOR SPOTIFY
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data.tracks.items[0]);
});