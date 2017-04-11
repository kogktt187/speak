$(document).ready(function() {


});

window.onload=function() {
	var queryDict = {};
	
	location.search.substr(1).split("&").forEach(function(item) {
        if (item.split("=")[0]=="speak") {
        	$(".Str1").html(decodeURI(item.split("=")[1]).substr(0,6));
        	if(decodeURI(item.split("=")[1]).split("").length>6) {        		
        		
        		$(".Str2").html(decodeURI(item.split("=")[1]).substr(6));
        	}
        }
        if (item.split("=")[0]=="bg") {
        	switch(item.split("=")[1]) {
        		case "bird":
        			document.getElementById('css').href = '../css/bird.css';
        			break;
        		
        		/*case "flower":
        			document.getElementById('css').href = '../css/flower.css';
        			break;*/
        		
        		case "ocean":
        			document.getElementById('css').href = '../css/ocean.css';
        			break;	
        	}
        }
        
        queryDict[item.split("=")[0]] = item.split("=")[1];
    });
	
	
};



/*function demo() {
	document.getElementById("S1").innerHTML="13";
	console.log("13");
}*/
