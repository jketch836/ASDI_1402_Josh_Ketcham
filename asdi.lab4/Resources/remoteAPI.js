var crud = require('CrudFile');

var guildInfoURL = 'http://us.battle.net/api/wow/guild/the-venture-co/The%20Council%20of%20judgement?fields=members';

var remoteResponse = function() {
	console.log('Start');
	var json = JSON.parse(this.responseText);

	for (var i = 0; i < json.members.length; i++) {
		name = json.members[i].character.name;
		division = json.members[i].character['class'];
		level = json.members[i].character.level;
		acheive = json.members[i].character.achievementPoints;

		Ti.API.info("name: " + name);
		Ti.API.info("division: " + division);
		Ti.API.info("level: " + level);
		Ti.API.info("acheive: " + acheive);
		crud.saveFunc(name, division, level, acheive);
	};
};

var remoteError = function(e) {
	Ti.API.debug("Status: " + this.status);
	Ti.API.debug("Text: " + this.responseText);
	Ti.API.debug("Error: " + e.error);
	alert("There's a problem pulling remote data");
};

var xhr = Ti.Network.createHTTPClient({
	onload : remoteResponse,
	onerror : remoteError,
	timeout : 5000
});

//Main Code
xhr.open('GET', guildInfoURL);
xhr.send(); 