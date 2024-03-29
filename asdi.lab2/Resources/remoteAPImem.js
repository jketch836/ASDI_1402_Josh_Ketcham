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
		height: '40dp',
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
	
	var councilRoster = Ti.UI.createLabel({
		top: '5dp',
		right: '75dp',
		text: "Guild Roster:",
		color: "#fff",
		font: {fontSize: 24, fontFamily: "Helvetica", fontStyle: 'bold', textAlign: 'center'}
	});
	topView.add(backView, councilRoster);

    var characterScroll = Ti.UI.createScrollView({
		layout: 'vertical',
		height: '530dp',
		width: 320,
	    top: 40,
	    showVerticalScrollIndicator:true
	});

	wowListTemplate = {
		properties:
			{
			top: 20,
			height: 74	
			},
		childTemplates:
		[
			{
				type: "Ti.UI.ImageView",
				bindId: 'thumbnail',
				properties:
				{
					width: 74,
					height: 74,
					left: 0,
					top:0
				}
			},
			{
				type: "Ti.UI.Label",
				bindId: 'name',
				properties:
				{
					color: "black",
					font: {fontSize: 18, fontFamily: "Arial", fontWeight: "bold"},
					left: 85,
					top: 5
				}
			},
			{
				type: "Ti.UI.Label",
				bindId: 'race',
				properties:
				{
					color: "grey",
					font: {fontSize: 14, fontFamily: "Arial"},
					left: 85,
					top: 40
				}
			},
			{
				type: "Ti.UI.Label",
				bindId: 'division',
				properties:
				{
					color: "black",
					font: {fontSize: 14, fontFamily: "Arial"},
					left: 200,
					top: 40
				},
			},	
			// {
				// type: "Ti.UI.Label",
				// bindId: 'role',
				// properties:
				// {
					// color: "grey",
					// font: {fontSize: 14, fontFamily: "Arial"},
					// right: 10,
					// top: 40
				// }
			// },
			{
				type: "Ti.UI.Label",
				bindId: 'level',
				properties:
				{
					color: "grey",
					font: {fontSize: 14, fontFamily: "Arial"},
					right: 10,
					top: 10
				}
			}	
		]
	};
	
	//API Object Info
	var secList = Ti.UI.createListSection({
	});
	var apiListView = Ti.UI.createListView({	
	//	search: search,
		top:20,
		// height: '500dp',
		templates:{'defaultTemplate': wowListTemplate},
		defaultItemTemplate: 'defaultTemplate'
		});
	
	var data = [];
	
	
	//console.log(wowAPI);
	
	
	for (var i=0; i < json.members.length; i++){
			name = json.members[i].character.name;
			race = json.members[i].character.race;
			division = json.members[i].character['class'];
			level = json.members[i].character.level;
			thumbnail = 'http://us.battle.net/static-render/us/' + json.members[i].character.thumbnail;
			//role = json.members[i].character.spec.role;
			
			// console.log(role);
					
		switch (race)
		{    
		    case 1:
		        race = 'Human';
		        break;
		    case 3:
		        race = 'Dwarf';
		        break;
		    case 4:
		        race = 'Night Elf';
		        break;
		    case 7:
		        race = 'Gnome';
		        break;
		    case 11:
		        race = 'Draenei';
		        break;
		    case 22:
		        race = 'Worgen';
		        break;
		    case 25:
		        race = 'Pandaren';
		        break;
		    default: 
		    	race = 'Not a Race';
		    	break;
		}

		
		switch (division)
		{    
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
		data.push({
			properties: {
				name: name,
				race: race,
				level: level,
				thumbnail: thumbnail,
				division: division,
				// role: role
			},	
			name: {
				text: name
			},
			race: {
				text: race
			},
			level: {
				text: 'LVL: ' + level
			},
			thumbnail: {
				image: thumbnail
			},
			division: {
				text: division
			},
			// role: {
				// text: role
			// }
		});
		
		// for (var e=0; e < json.members[i].character.length; e++){
				// specName = members[i].character[e].spec.name;
				// console.log(specName);
			// data.push({
				// properties: {
					// specName: specName
				// },	
				// specName: {
					// text: specName
				// }		
			// });
		// };
	};
		//console.log(specName);
		// console.log(json);
		// console.log(json.members[i]);
		// console.log(data);
	secList.setItems(data);
	apiListView.sections = [secList];
	characterScroll.add(apiListView);
	win.add(topView, characterScroll);
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