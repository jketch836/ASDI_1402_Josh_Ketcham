var curWin = Ti.UI.currentWindow;


var remote = require('remoteAPI');

	var characterScroll = Titanium.UI.createScrollView({
		layout: 'vertical',
//		scrolltype: 'vertical',
		height: 351,
		width: 320,
	    top:0,
	    showVerticalScrollIndicator:true,
	    showHorizontalScrollIndicator:true
	});

wowListTemplate = {
	properties:
		{
		height: 75	
		},
	childTemplates:
	[
		{
			type: "Ti.UI.ImageView",
			bindId: 'thumbnail',
			properties:
			{
				width: 50,
				height: 75,
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
				left: 30,
				top: 5
			}
		},
		{
			type: "Ti.UI.Label",
			bindId: 'realm',
			properties:
			{
				color: "grey",
				font: {fontSize: 14, fontFamily: "Arial"},
				left: 30,
				top: 40
			}
		},
		{
			type: "Ti.UI.Label",
			bindId: 'level',
			properties:
			{
				color: "grey",
				font: {fontSize: 12, fontFamily: "Arial"},
				right: 5,
				top: 20
			}
		}
	]
};

//API Object Info
var secList = Ti.UI.createListSection({
});
var apiListView = Ti.UI.createListView({	
//	search: search,
	top:0,
	templates:{'defaultTemplate': wowListTemplate},
	defaultItemTemplate: 'defaultTemplate'
	});

var data = [];

for (var i=0; i < json.length; i++){
		name = json.members.character.name;
		gender = json.members.character.gender;
		race = json.members.character.race;
		level = json.members.character.level;
		thumbnail = json.members.character.thumbnail;
		HonorableKills = json.members.character.totalHonorableKills;
		battlegroup = json.members.character.battlegroup;
		realm = json.members.character.realm;
	data.push
	({
			properties:
			{
				name: name,
				gender: gender,
				race: race,
				level: level,
				thumbnail: thumbnail,				
				HonorableKills: totalHonorableKills,
				battlegroup: battlegroup,
				realm: realm,
			},	
				name:
					{
						text: name
					},
				gender:
					{
						text: gender					
					},
				race:
					{
						text: race
					},	
				level:
					{
						text: level
					},
				thumbnail:
					{
						image: thumbnail
					}
		});
};


//Main Code
secList.setItems(data);
apiListView.sections = [secList];
characterScroll.add(apiListView);
curWin.add(characterScroll);
curWin.open();