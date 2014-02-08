var councilURL = 'http://us.battle.net/api/wow/guild/the-venture-co';


console.log(councilURL);

var json, wowAPI;
var remoteResponse = function() {
	json = JSON.parse(this.responseText);
    wowAPI = json.members.character;
    
    console.log(json);
};

var remoteError = function(e) {
    Ti.API.debug("Status: " + this.status);
    Ti.API.debug("Text: " + this.responseText);
    Ti.API.debug("Error: " + e.error);
    alert("There's a problem pulling remote data");
};

var xhr = Ti.Network.createHTTPClient({
    onload: remoteResponse,
    onerror: remoteError,
    timeout:5000
});


//Main Code
remoteResponse();
remoteError();
xhr.open('GET', councilURL);
xhr.send();


var allthem = xhr;

exports.allthem;