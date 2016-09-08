var spotify = require('spotify');

var args = process.argv;
var userSong = "";

for (var i = 2; i<args.length; i++){
	if (i>2 && i <args.length){
		userSong = userSong + " " + args[i]; 
	}
	else{
		userSong = userSong + args [i];
	}
}
spotify.search({ type: userSong }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 	
    console.log ("la la la");
    console.log (userSong);
});

spotify.lookup({ type: 'artist OR album OR track',id: 'Spotify ID Hash' }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	 	
	    	console.log ("this one too");
});


// ok -- it returns user input but query does nothing as I dont know where to put user input or how to make a query

// if I use spotify : curl -X GET "https://api.spotify.com/v1/search?q=tania+bowra&type=artist" -H "Accept: application/json"

// ?q = userSong&type=track see:  https://developer.spotify.com/web-api/get-playlists-tracks/ 
//  request (curl -X GET "https://api.spotify.com/v1/search?q=Barry+Manilow&type=artist,album,track,playlist&market=US&limit=1&offset=5" -H "Accept: application/json", function (error,response,body){
