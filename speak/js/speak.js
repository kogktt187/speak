/**
 * speak.js
 *
 * 主要UI邏輯
 */

/**
 * 觸動辨識
 */
function triggerMic() {
    // 已在辨識就停止辨識
    if (recognizing) {
        clearTimeout(speakTimer);

        $("#mainImage").attr("src", "../img/telewrite_parrot.png");

        recognition.stop();

    // 未在辨識就開始辨識
    } else {
        clearTimeout(tempResultTimer);

        $("#tempResult").fadeOut(fadeoutTime);
        $("#tempResult").val("");

        recognition.start();
    }
}


/**
 * 手動送出
 */
function send() {
    if (!tempResult.value || tempResult.value == "沒內容..." ||tempResult.value == "聽不到...") {
        tempResult.value = "沒內容...";
        $("#tempResult").fadeOut(fadeoutTime);
    	$("#mainImage").attr("src", "../img/telewrite_parrot.png");
    } else {	       
        $("#tempResult").fadeOut(fadeoutTime);
    	$("#mainImage").attr("src", "../img/telewrite_parrot.png");
    	setTimeout(function() { menu();},1000);
    	
    }
}

$(document).ready(function() {
	$("#menu").val("2");
	


	
    $("body").click(function(e) {        //觸發設定按鈕
    
    	if (!$(e.target).is('img, input, label')) {
            
            $("#setImg").fadeIn("slow", function () {
            	
            	$("#setImg").click(function() {         //觸發設定介面
            	
        			$(".slide-menu").css("transform","translate3d(0, 0, 0)");
        			
        			$("#back").click(function(){        //回復主要畫面
						
						
						recognition.lang = $('input[name=lang]:checked').val();   //設定語言
						
						$(".slide-menu").css("transform", "translate3d(100%, 0, 0)");
					});
    			});
    			  
                // Animation complete.
            	setTimeout(function () {
                	$("#setImg").fadeOut();
                }, 3000);
            });
        }
    });


	$("#cardCheck").click(function(e) {
		if(!$(e.target).is('img')) {
			$("#menu").val("2");
			$("#picBar").css("transform", "translate3d(-100%, 0%, 0)");
  			$("#ytCheck").css("transform", "translate3d(0%, -100%, 0)");
  			$("#cardCheck").css("transform", "translate3d(-100%, 0%, 0)");		
		}
	});
	
	$("#ytCheck").click(function() {
		setTimeout(function(){
			$("#ytFrame").attr("src","https://www.youtube.com/embed/");
		},510);
		$("#menu").val("1");
		$("#picBar").css("transform", "translate3d(0%, 0%, 0)");
  		$("#ytCheck").css("transform", "translate3d(100%, -100%, 0)");
  		$("#cardCheck").css("transform", "translate3d(0%, 0%, 0)");
	});

	$(".bg").click(function() {
		tempBg = bgUrl + $(this).attr("alt");
		url = Initurl + tempBg;
		$("#cardFrame").attr("src",url);
	});

    $("#mainImage").click(function() {   //啟動語音辨識
    	triggerMic();
    });


    $(".tempResult").on("click",function() {      //出現tempResult
    	var tr = $("#tempResult");
    	
        if(tr.val() != "" && tr.css("display") == "none") {
            tr.val("");
        }
        
        tr.css("display", "block");
        
       	$("#mainImage").attr("src", "../img/telewrite_parrot.png");
       	
    });

 
	$("#send").on("click", function() {	   //觸發送出
		send();
	});
	
	
});

