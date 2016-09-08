var request = require('request');
// var fs = require ("fs");
var omdb = require('omdb');

var args = process.argv;
userMovie = "";
// var queryURL = "http://www.omdbapi.com/?t=" + userMovie + "&y=&imdbrating=&actors=&language=&Country=&plot=&tomatoes=true&r=json"

// line 11 -" " better for print out, but might not work in search
for (var i = 2; i<args.length; i++){
	if (i>2 && i <args.length){
		userMovie = userMovie + " " + args[i]; 
	}
	else{
		userMovie = userMovie + args [i];
	}
}
	if (process.argv [2]==null){
		console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/ It's on Netflix!");
	}
	else{
		request ("http://www.omdbapi.com/?t=" + userMovie + "&y=&imdbrating=&actors=&language=&Country=&plot=&tomatoes=true&r=json", function (error,response,body){

			if (!error && response.statusCode ==200){
				console.log("************************************");
			    console.log("Your Movie Choice: " + userMovie + ".");
			    console.log(userMovie + " was released in " + JSON.parse(body)["Year"]);
			    console.log(userMovie + " is in " + JSON.parse(body)["Language"]);
			    console.log(userMovie + " was  " + JSON.parse(body)["Country"]);
			    console.log("Actors " + JSON.parse(body)["Actors"] + "star in the movie");
			    console.log("The movie is about " + JSON.parse(body)["Plot"]);
			    console.log("IMDB gave it a " + JSON.parse(body)["imdbRating"] + " rating");
			    console.log("Rotten Tomatoes gave it a " + JSON.parse(body)["tomatoRating"] + " rating");
			    console.log("Rotten Tomatoes URL is " + JSON.parse(body)["tomatoURL"]);
				console.log("If you haven't watched 'Mr. Nobody', then you should:");

			}
		})
	}

// 	if above starts to work -- then try to take results... create a variable for results and stringify? and add to txt.file
// 	}

// 	fs.appendFile('log.txt', '("%s (%d)", movie.title, movie.year);', function (err) {
// 	if(err) {
//         return console.log(err);
//     }
// });
//     // Otherwise, it will print: "movies.txt was updated!"
//     console.log("movies.txt was updated!");
// })
// });

// module.exports = search;
