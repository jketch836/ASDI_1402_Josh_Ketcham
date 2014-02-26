var covanentURL = 'http://us.battle.net/api/wow/guild/the-venture-co/The%20Council%20of%20judgement?fields=members';

var ListView = require('RemoteListView');

var remoteError = function(e) {
	Ti.API.debug("Status: " + this.status);
	Ti.API.debug("Text: " + this.responseText);
	Ti.API.debug("Error: " + e.error);
	alert("There's a problem pulling remote data");
};

var xhr = Ti.Network.createHTTPClient({
	onload : ListView.remote,
	onerror : remoteError,
	timeout : 5000
});

//Main Code
xhr.open('GET', covanentURL);
xhr.send();