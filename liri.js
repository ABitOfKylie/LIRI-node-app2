var fs = require("fs");

fs.readFile("keys.js", "utf8", function(error,data){
	if (error) {
		return console.log(error);
	}
	console.log(data);

	var dataArr = data.split(","); // split data by , easier to read

	var trimmedArr = dataArr.map(function(item){
		return item.trim().length;
		// var myTweets = trimmedArr [0];
		// var myTweets = exports.twitterKeys.consumer_key;
		
	})
	console.log (dataArr);
	console.log (trimmedArr);
	// console.log (myTweets);
	
	
})

// Note to instructor/TA:  
	// Linr 13 I was hoping to call [0], to get consumer_key from trimmed array - but it can't find var trimmedArr : ReferenceError: trimmedArr is not defined
	// Then I was thinking line 14 object ...var myTweets = twitterKeys.consumer_key

	// var spotify-this-song = " ";  will not accept "-" in variable name After the first initial letter, variable names may contain letters and the digits 0 to 9

// var fs = require('fs-then'); didn't work
// fs.readFile('keys.js').then(...);



		// assign parts of array to query variables....

// var userSong = node liri.js spotify-this-song '<song name here>'


// function songCatch(){


// var spotify = require('spotify');
 
// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }

//     console.log("************************************");
//     console.log("");
//     console.log("************************************");
//     console.log("************************************");
//     console.log("************************************");
//     console.log("************************************");




// var Twitter = require('twitter');
 
// var client = new Twitter({
//   consumer_key: '',
//   consumer_secret: '',
//   access_token_key: '',
//   access_token_secret: ''
// });
 
// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });



