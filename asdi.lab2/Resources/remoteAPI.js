var councilURL = 'http://us.battle.net/api/wow/guild/the-venture-co/The%20Council%20of%20judgement?fields=members';


var json, wowAPI;
var remoteResponse = function() {
	json = JSON.parse(this.responseText);
    
   var win = Ti.UI.createWindow();

    var characterScroll = Ti.UI.createScrollView({
		layout: 'vertical',
		height: '570dp',
		width: 320,
	    top:0,
	    showVerticalScrollIndicator:true,
	    showHorizontalScrollIndicator:true
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
					top: 35
				}
			},
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
			},
			{
				type: "Ti.UI.Label",
				bindId: 'role',
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
			// clas = json.members[i].character['class'];
			level = json.members[i].character.level;
			thumbnail = 'http://us.battle.net/static-render/us/' + json.members[i].character.thumbnail;
			// description = json.members[i].character.spec.description;
			// role = json.members[i].character.spec.role;
		// console.log(role);
		data.push
		({
				properties:
				{
					name: name,
					race: race,
					// clas: 'class',
					level: level,
					thumbnail: thumbnail,		
					// description: description,
					// role: role
				},	
					name:
						{
							text: name
						},	
					race:
						{
							text: race
						},
					// clas:
						// {
							// text: 'class'
						// },										
					level:
						{
							text: level
						},
					thumbnail:
						{
							image: thumbnail
						},
					// description:
						// {
							// text: description
						// },					
					// role:
						// {
							// text: role
						// }					
			});
			
		// if (json.members[i].character.race == 1){
			 // return 'Human';
		// } else if (json.members[i].character.race == 3){
			// return 'Dwarf';
		// } else if (json.members[i].character.race == 4){
			// return 'Night Elf';
		// } else if (json.members[i].character.race == 7){
			// return 'Gnome';
		// } else if (json.members[i].character.race == 11){
			// return 'Draenei';		
		// } else if (json.members[i].character.race == 22){
			// return 'Worgen';
		// } else if (json.members[i].character.race == 25){
			// return 'Pandaren';	
		// }	
	// 	
	// 	
			// if (json.members[i].character['class'] == 0){
			 // return 'No Class';
		// } else if (json.members[i].character['class'] == 1){
			// return 'Warrior';
		// } else if (json.members[i].character['class'] == 2){
			// return 'Paladin';
		// } else if (json.members[i].character['class'] == 3){
			// return 'Hunter';
		// } else if (json.members[i].character['class'] == 4){
			// return 'Rogue';		
		// } else if (json.members[i].character['class'] == 5){
			// return 'Priest';
		// } else if (json.members[i].character['class'] == 6){
			// return 'Death Knight';	
		// } else if (json.members[i].character['class'] == 7){
			// return 'Shaman';	
		// } else if (json.members[i].character['class'] == 8){
			// return 'Mage';	
		// } else if (json.members[i].character['class'] == 9){
			// return 'Warlock';	
		// } else if (json.members[i].character['class'] == 10){
			// return 'Monk';	
		// } else if (json.members[i].character['class'] == 11){
			// return 'Druid';	
		// }						
	};
		//console.log(specName);
		// console.log(json);
		// console.log(json.members[i]);
		// console.log(data);
	secList.setItems(data);
	apiListView.sections = [secList];
	characterScroll.add(apiListView);
	win.add(characterScroll);
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