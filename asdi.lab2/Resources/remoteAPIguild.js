var councilURL = 'http://us.battle.net/api/wow/guild/the-venture-co/The%20Council%20of%20judgement?fields=members';

// var racesURL = 'http://us.battle.net/api/wow/data/character/races';

var remoteResponse = function() {
	var json = JSON.parse(this.responseText);
    
	var win = Ti.UI.createWindow({
	});

	var topView = Ti.UI.createView({
		top: 20,
		// borderRadius: 10,
		backgroundColor: "#022d5a",
		height: 'auto',
		width: 'auto'
	});
	
	//Back Button Start
	var backView = Ti.UI.createView({
		backgroundColor: "#c48c1b",
		// borderRadius: 10,
		height: 40,
		width: 80,
		top: '0dp',
		left: 0,
		file: 'main_menu.js'
	});
	
	var backLabel = Ti.UI.createLabel({
		text: "Back",
		font: {fontSize: 16, fontFamily: "Helvetica", fontWeight: "bold"},
		color: "#fff",
		center: 0,
		file: 'main_menu.js'
	});
	backView.add(backLabel);
	 
	backView.addEventListener('click', function(){
	   		var mainWindow = Ti.UI.createWindow({  
				title:'Main Menu',
				backgroundColor: '#fff',
				url:'main_menu.js'
			});
			mainWindow.open(mainWindow, {animate: true});
	});
	//Back Button End
	
	var councilName = Ti.UI.createLabel({
		top: '55dp',
		center: '0dp',
		text: json.name,
		color: '#fff',
		font: {fontSize: 24, fontFamily: "Helvetica", fontStyle: 'bold'}
	});
	
	var picTabard = Ti.UI.createImageView({
		top: '95dp',
		height: '155dp',
		width: '155dp',
		image: 'guild_tabard.png'
	});
	
	var councilLVL = Ti.UI.createLabel({
		top: '260dp',
		left: '30dp',
		text: 'GUILD LVL: ' + json.level,
		color: '#fff',
		font: {fontSize: 18, fontFamily: "Helvetica", fontStyle: 'bold'}
	});
	
	var councilmem = Ti.UI.createLabel({
		top: '300dp',
		left: '30dp',
		text: 'NUMBER OF MEMBERS: ' + json.members.length,
		color: '#fff',
		font: {fontSize: 18, fontFamily: "Helvetica", fontStyle: 'bold'}
	});
	
	var councilRealm = Ti.UI.createLabel({
		top: '340dp',
		left: '30dp',
		text: 'GUILD REALM: ' + json.realm,
		color: '#fff',
		font: {fontSize: 18, fontFamily: "Helvetica", fontStyle: 'bold'}
	});
	
	var councilAcheive = Ti.UI.createLabel({
		top: '380dp',
		left: '30dp',
		text: 'ACHIEVEMENT POINTS: ' + json.achievementPoints,
		color: '#fff',
		font: {fontSize: 18, fontFamily: "Helvetica", fontStyle: 'bold'}
	});

	var councilGroup = Ti.UI.createLabel({
		top: '420dp',
		left: '30dp',
		text: 'BATTLE GROUP: ' + json.battlegroup,
		color: '#fff',
		font: {fontSize: 18, fontFamily: "Helvetica", fontStyle: 'bold'}
	});

	var councilSide = Ti.UI.createLabel({
		top: '460dp',
		left: '30dp',
		text: 'GUILD SIDE: Alliance',
		color: '#fff',
		font: {fontSize: 18, fontFamily: "Helvetica", fontStyle: 'bold'}
	});
	topView.add(backView, councilName, picTabard, councilLVL, councilmem, councilRealm, councilAcheive, councilGroup, councilSide);
	win.add(topView);
	win.open();
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
xhr.open('GET', councilURL);
xhr.send();