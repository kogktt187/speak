function menu() {
	console.log(tempResult.value);
	
	switch($("#menu").val()) {
    	case "1":
    		url = Initurl + tempBg + "&speak=" + encodeURI(tempResult.value);
        	break;
        	
    	case "mouth":    	
        	break;
        	
    	case "2":
        	yt();        		
        	break;
    		
    	case "mail":    	
        	break;
        	
    	case "memo":
        	memo(tempResult.value);
        	break;
	}

	
}