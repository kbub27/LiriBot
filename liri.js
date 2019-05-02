require('dotenv').config();

//REQUIRE ALL APIs AND FILES
var keys = require('./keys');
var axios = require('axios');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var command = process.argv[2];
var artist = process.argv.slice(3).join('%20')
var bandsQuery = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + keys.bandsID
var movie = process.argv.slice(3).join('+')
var movieQuery = 'http://www.omdbapi.com/?apikey=' + keys.omdbKey + '&t=' + movie + '&plot=short';
var song = process.argv.slice(3).join(' ')

//QUERY FOR OMDB
function getMovie() {
    if (!movie) {
        movieQuery = 'http://www.omdbapi.com/?apikey=' + keys.omdbKey + '&t=mr.nobody&plot=short';
    }
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
    })
    .catch(function (error) {
        console.log(error)
    })
};
// QUERY FOR BANDS IN TOWN
function getConcert() {   
    axios.get(bandsQuery)
    .then(function (response) {
        //LOG RESPONSE HERE
        console.log('\nConcert-this\n')
        console.log('Venue: ' + response.data[0].venue.name);
        console.log('Location: ' + response.data[0].venue.country + ',' + response.data[0].venue.city);
        var moment = require('moment');
        console.log('Date: ' + moment(response.data[0].datetime).format('MM/DD/YYYY'));
    })
    .catch(function (error) {
        console.log(error);
    });
};
//QUERY FOR SPOTIFY
var spotify = new Spotify(keys.spotify);

function getSong() {
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        //LOG DATA HERE
        console.log('\nSpotify-this-song\n')
        console.log('Artist: ' + data.tracks.items[0].artists[0].name);
        console.log('Album: ' + data.tracks.items[0].album.name);
        console.log('Song Name: ' + data.tracks.items[0].name);
        console.log('Preview Here: ' + data.tracks.items[0].external_urls.spotify);
    });
};


if (command === 'movie-this') {
    getMovie();
} else if (command === 'concert-this') {
    getConcert();
} else if (command === 'spotify-this-song') {
    getSong();
} else if (command === 'do-what-it-says') {
    //START DO-WHAT-IT-SAYS HERE
    fs.readFile('random.txt', 'utf8', function(err, data) {
        if (err) throw err;
        var string = data;
        var sep = string.split(',');
        if (sep[0] === 'spotify-this-song') {
            song = sep[1];
            getSong();
        } else if (sep[0] === 'movie-this') {
            sep[1] = sep[1].replace(/['"]+/g, '');
            var res = sep[1].split(' ');
            movie = res.join('+');
            movieQuery = 'http://www.omdbapi.com/?apikey=' + keys.omdbKey + '&t=' + movie + '&plot=short';
            getMovie();
        } else if ('concert-this') {
            sep[1] = sep[1].replace(/['"]+/g, '');
            var res = sep[1].split(' ');
            artist = res.join('%20');
            bandsQuery = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + keys.bandsID
            getConcert();
        }
    });
    
} else {
    console.log('Your command wasn"t recognized! Please try one of the following commands.');
    console.log('concert-this');
    console.log('movie-this');
    console.log('spotify-this-song');
    console.log('do-what-it-says');
};
