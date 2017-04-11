/**
 * recognition.js
 *
 * 語音辨識邏輯
 */

// Google ASR物件
var recognition = new webkitSpeechRecognition();

// 是否辨識當中
var recognizing = false;

// 設定Google ASR物件
recognition.continuous = true;

/**
 * 辨識開始
 */
recognition.onstart = function() {
    recognizing = true;

    speakTimer = setTimeout(function() {
        recognition.stop();
    }, speakTime);

    $("#mainImage").attr("src", "../img/disp.gif");
};

/**
 * 辨識結束
 */
recognition.onend = function() {
    recognizing = false;
	$("#mainImage").attr("src", "../img/telewrite_parrot.png");
    $("#tempResult").fadeIn(fadeinTime);

    // 沒辨識到
    if (!tempResult.value) {
        tempResult.value = "聽不到...";
        $("#tempResult").fadeOut(fadeoutTime);

    // 有辨識到
    } else {
        tempResultTimer = setTimeout(function() {
            $("#tempResult").fadeOut(fadeoutTime);
    		$("#mainImage").attr("src", "../img/telewrite_parrot.png");
            setTimeout(function() { menu(); },1000);
        }, showTempResultTime);

        $("#tempResult").click(function() {
            clearTimeout(tempResultTimer);            
        });

    }

};

/**
 * 辨識結果
 */

recognition.onresult = function(event) {
    if (event.results.length > 0) {    	
        tempResult.value = event.results[0][0].transcript;
        clearTimeout(speakTimer);
        recognition.stop();
    }
};
