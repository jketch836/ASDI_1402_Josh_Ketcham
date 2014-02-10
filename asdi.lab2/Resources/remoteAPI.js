var councilURL = 'http://us.battle.net/api/wow/guild/the-venture-co/The%20Council%20of%20judgement?fields=members';


var json, wowAPI;
var remoteResponse = function() {
	json = JSON.parse(this.responseText);
   wowAPI = json.members[i];
    
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
			bindId: 'role',
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
	top:20,
	// height: '500dp',
	templates:{'defaultTemplate': wowListTemplate},
	defaultItemTemplate: 'defaultTemplate'
	});
// var apiListView = Ti.UI.createTableView({	
// //	search: search,
	// top:0,
	// height: 74
	// });

var data = [];


//console.log(wowAPI);


for (var i=0; i < json.members.length; i++){
		name = json.members[i].character.name;
		level = json.members[i].character.level;
		thumbnail = 'http://us.battle.net/static-render/us/' + json.members[i].character.thumbnail;
//		description = json.members[i].character.spec.description;
		// role = json.members[i].character.spec.role;
	// console.log(role);
	data.push
	({
			properties:
			{
				name: name,
				level: level,
				thumbnail: thumbnail,				
//				description: description,
				// role: role
			},	
				name:
					{
						text: name
					},	
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

// 
// var allthem = xhr;
// 
// exports.allthem;