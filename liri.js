require("dotenv").config();

var keys = require("./keys.js")
var request = require("request");
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

switch (process.argv[2]) {
    case 'my-tweets': 
        console.log(client);
    break;
    case 'spotify-this-song': 
        console.log(spotify);
    break;
    case 'movie-this': 
        if (process.argv[3] === undefined) {
            var queryUrl = "http://www.omdbapi.com/?t=Mr-Nobody&y=&plot=short&apikey=trilogy";
            console.log("line 1:" + queryUrl);
        } else {
            var movieName = process.argv[3];
            var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        }
        request(queryUrl, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Release Year: " + JSON.parse(body).Year);
                console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                console.log("Rotten Tomatoes Score: " + JSON.parse(body).Ratings[1].Value);
                console.log("Country of origin: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Actors: " + JSON.parse(body).Actors);
            }
        });
    break;
    case 'do-what-it-says': 
        console.log(client);
    break;
}