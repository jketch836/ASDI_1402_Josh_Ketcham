var crud = require('CrudFile');

var guildInfoURL = 'http://us.battle.net/api/wow/guild/the-venture-co/The%20Council%20of%20judgement?fields=members';

var remoteResponse = function() {
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
		
		switch (division) {
			case 1:
				division = 'Warrior';
				break;
			case 2:
				division = 'Paladin';
				break;
			case 3:
				division = 'Hunter';
				break;
			case 4:
				division = 'Rogue';
				break;
			case 5:
				division = 'Priest';
				break;
			case 6:
				division = 'Death Knight';
				break;
			case 7:
				division = 'Shaman';
				break;
			case 8:
				division = 'Mage';
				break;
			case 9:
				division = 'Warlock';
				break;
			case 10:
				division = 'Monk';
				break;
			case 11:
				division = 'Druid';
				break;
			default:
				division = 'Null';
				break;
		}
		
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
	timeout : 3000
});

//Main Code
xhr.open('GET', covenantURL);
xhr.send();