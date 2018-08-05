require("dotenv").config();

var keys = require("./keys.js")

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

switch (process.argv[2]) {
    case 'my-tweets': 
        console.log(client);
    break;
    case 'spotify-this-song': 
        console.log(client);
    break;
    case 'movie-this': 
        console.log(client);
    break;
    case 'do-what-it-says': 
        console.log(client);
    break;
}