
// prepare the request

function yt() {
	console.log("OK");
	var request = gapi.client.youtube.search.list({
    	part: "snippet",
        type: "video",
        q: $("#tempResult").val(),
        order: "date",
        maxResults: 1
    });
     
       // execute the request
    request.execute(function(response) {
    	var YTresults = response.result;
        url = "https://www.youtube.com/watch?v=" + YTresults["items"][0]["id"]["videoId"];
        var url2 = "https://www.youtube.com/embed/" + YTresults["items"][0]["id"]["videoId"];
        $("#ytFrame").attr("src",url2);
        
    });
        	
}

/*function init() {
    gapi.client.setApiKey("AIzaSyAJ3zBQYFAi1YA3JW7-UOgV7lnp4pUfo7E");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
		console.log('123');
    });
}*/
