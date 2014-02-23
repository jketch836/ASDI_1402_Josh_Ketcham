
    // var curWin = Ti.UI.currentWindow({
	// });
	
	var win = Ti.UI.createWindow({
	});

    var characterScroll = Ti.UI.createScrollView({
		layout: 'vertical',
		height: '470dp',
		width: 320,
	    showVerticalScrollIndicator:true
	});

	wowListTemplate = {
		properties:
			{
			top: 20,
			height: 60
			},
		childTemplates:
		[
			{
				type: "Ti.UI.Label",
				bindId: 'name',
				properties:
				{
					color: "black",
					font: {fontSize: 18, fontFamily: "Arial", fontWeight: "bold"},
					left: 20,
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
					right: 125,
					top: 10
				}
			},
			{
				type: "Ti.UI.Label",
				bindId: 'division',
				properties:
				{
					color: "black",
					font: {fontSize: 14, fontFamily: "Arial"},
					right: 25,
					top: 10
				},
			},
			{
				type: "Ti.UI.Label",
				bindId: 'level',
				properties:
				{
					color: "grey",
					font: {fontSize: 14, fontFamily: "Arial"},
					left: 20,
					top: 40
				}
			},
			{
				type: "Ti.UI.Label",
				bindId: 'acheive',
				properties:
				{
					color: "black",
					font: {fontSize: 14, fontFamily: "Arial"},
					right: 125,
					top: 40
				},
			},
			{
				type: "Ti.UI.Label",
				bindId: 'rank',
				properties:
				{
					color: "black",
					font: {fontSize: 14, fontFamily: "Arial"},
					right: 25,
					top: 40
				},
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
	
	for (var i=0; i < json.members.length; i++){
			name = json.members[i].character.name;
			race = json.members[i].character.race;
			division = json.members[i].character['class'];
			level = json.members[i].character.level;
			acheive = json.members[i].character.achievementPoints;
			rank = json.members[i].rank;
					
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
				rank: rank,
				acheive: acheive,
				division: division
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
			rank: {
				text: 'Rank: ' + rank
			},
			acheive: {
				text: 'Points: ' + acheive
			},
			division: {
				text: division
			}
		});
		
	};
	secList.setItems(data);
	apiListView.sections = [secList];
	characterScroll.add(apiListView);
	win.add(characterScroll);
	win.open();