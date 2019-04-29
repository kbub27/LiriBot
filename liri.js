require('dotenv').config();

//REQUIRE ALL APIs AND FILES
var keys = require('./keys');
var axios = require('axios');
var Spotify = require('node-spotify-api');

//QUERY FOR OMDB
var movieQuery = 'http://www.omdbapi.com/?apikey=' + keys.omdbKey + '&t=forrest+Gump&plot=short';
axios.get(movieQuery)
    .then(function (response) {
        //LOG RESPONSE HERE
        console.log('\nMovie-this\n')
        console.log('Title: ' + response.data.Title);
        console.log('Released: ' + response.data.Year);
        console.log('IMDB: ' + response.data.imdbRating);
        console.log('Country: ' + response.data.Country);
        console.log('Lang: ' + response.data.Language);
        console.log('Actors: ' + response.data.Actors);
        console.log('Plot: ' + response.data.Plot);
        console.log('\n---------------\n');
    })
    .catch(function (error) {
        console.log(error)
    })
// QUERY FOR BANDS IN TOWN
var bandsQuery = "https://rest.bandsintown.com/artists/" + 'skrillex' + "/events?app_id=" + keys.bandsID
axios.get(bandsQuery)
    .then(function (response) {
        //LOG RESPONSE HERE
        console.log('Concert-this\n')
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
    //LOG DATA HERE
    console.log('\n---------------\n')
    console.log('Spotify-this-song\n')
    console.log('Artist: ' + data.tracks.items[0].artists[0].name);
    console.log('Album: ' + data.tracks.items[0].album.name);
    console.log('Song Name: ' + data.tracks.items[0].name);
    console.log('Preview Here: ' + data.tracks.items[0].external_urls.spotify);
});