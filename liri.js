require('dotenv').config();

//REQUIRE ALL APIs AND FILES
var keys = require('./keys');
const omdbWrapper = require('omdb-wrapper').default;
var axios = require('axios');
var Spotify = require('node-spotify-api');

//QUERY FOR OMDB
const omdb = new omdbWrapper({
    apiKEY: keys.omdbKey
});
omdb.search.movies('forrest+gump')
    .then(data => {
        // do what you want with the data
        console.log('omdb logs data');
        console.log('\n-----------------\n')
    });

// QUERY FOR BANDS IN TOWN
var bandsQuery = "https://rest.bandsintown.com/artists/" + 'skrillex' + "/events?app_id=codingbootcamp"
axios.get(bandsQuery)
  .then(function (response) {
    console.log('Venue: ' + response.data[0].venue.name);
    console.log('Location: ' + response.data[0].venue.country + ',' + response.data[0].venue.city);
    var moment = require('moment');
    console.log(moment(response.data[0].datetime).format('MM/DD/YYYY'));
  })
  .catch(function (error) {
    console.log(error);
  });

//QUERY FOR SPOTIFY
var spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    console.log('\n---------------\n')
    console.log('spotify logs data');
});