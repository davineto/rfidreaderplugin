
var exec = require('cordova/exec');

function RFIDReaderPlugin() {}

RFIDReaderPlugin.prototype.start = function (successCallback, errorCallback) {

	if (errorCallback == null) {
        errorCallback = function () {
        };
    }

    if (typeof errorCallback != "function") {
        console.log("RFIDReaderPlugin.start: errorCallback não é uma função");
        return;
    }

    if (typeof successCallback != "function") {
        console.log("RFIDReaderPlugin.start: successCallback não é uma função");
        return;
    }

	var options = {};
	
	exec(
	     	function(result) {	            
	            successCallback(result);
	        },
            function(error) {
               errorCallback(error);
            },

            'RFIDReaderPlugin',
            'start',
			[options]	            
     );
}

RFIDReaderPlugin.prototype.stop = function (successCallback, errorCallback) {

	if (errorCallback == null) {
        errorCallback = function () {
        };
    }

    if (typeof errorCallback != "function") {
        console.log("RFIDReaderPlugin.stop: errorCallback não é uma função");
        return;
    }

    if (typeof successCallback != "function") {
        console.log("RFIDReaderPlugin.stop: successCallback não é uma função");
        return;
    }

	var options = {};
	
	exec(
	     	function(result) {	            
	            successCallback(result);
	        },
            function(error) {
               errorCallback(error);
            },

            'RFIDReaderPlugin',
            'stop',
			[options]	            
     );
}

RFIDReaderPlugin.prototype.read = function (successCallback, errorCallback) {

	if (errorCallback == null) {
        errorCallback = function () {
        };
    }

    if (typeof errorCallback != "function") {
        console.log("RFIDReaderPlugin.read: errorCallback não é uma função");
        return;
    }

    if (typeof successCallback != "function") {
        console.log("RFIDReaderPlugin.read: successCallback não é uma função");
        return;
    }

	var options = {};
	
	exec(
	     	function(result) {	            
	            successCallback(result);
	        },
            function(error) {
               errorCallback(error);
            },

            'RFIDReaderPlugin',
            'read',
			[options]	            
     );
}

 var rfidReaderPlugin = new RFIDReaderPlugin();
 module.exports = rfidReaderPlugin;
