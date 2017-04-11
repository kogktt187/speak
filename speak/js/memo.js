function memo(userInput) {
	var d = new Date();
	var m = d.getMonth()+1;
	//var userInput = document.getElementById("userInputId").value;

	var fileURL = 'data:application/notepad;charset=utf-8,' + encodeURIComponent(userInput);
	var fileName = d.getFullYear()+""+m+""+d.getDate()+""+d.getHours()+""+d.getMinutes()+""+d.getSeconds()+"talk.txt";

	if (!window.ActiveXObject) {
  		var save = document.createElement('a');
  		save.href = fileURL;

  		save.target = '_blank';
  		save.download = fileName || 'unknown';

  		var event = document.createEvent('Event');
  		event.initEvent('click', true, true);
  		save.dispatchEvent(event);
  		(window.URL || window.webkitURL).revokeObjectURL(save.href);
	}

}

function initial() {

	//Get Virtual Root
    var shell = "ypdrive";
    getVirtualRoot(shell);

    //Upload files
    //Set uploading directory in your drive.
    var dir = 'drive/media';
    //Set the upload button ID
    $("input[id=uploadBtn]")
    	.unbind('change').bind('change', function (e) {
        e.preventDefault();
        var files = e.originalEvent.currentTarget.files;
        setTimeout(function () {
        	console.log("Start uploading...");
            // handleFileUpload
            // 
            // Input: files, dir, progressBar
            //      filse: upload files.
            //      dir: the directory of the drive to upload .
            //      progressBar: the progress bar of uploading files, if you don't use the progress bar, set this input to 0.
            //
            handleFileUpload(files, dir, 0);
            }, 400);
	});
}