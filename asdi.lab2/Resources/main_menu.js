var curWin = Ti.UI.currentWindow;


var remote = require('remoteAPI');

	// var characterScroll = Ti.UI.createScrollView({
		// layout: 'vertical',
// //		scrolltype: 'vertical',
		// height: 351,
		// width: 320,
	    // top:0,
	    // showVerticalScrollIndicator:true,
	    // showHorizontalScrollIndicator:true
	// });
// 
// wowListTemplate = {
	// properties:
		// {
		// height: 74	
		// },
	// childTemplates:
	// [
		// {
			// type: "Ti.UI.ImageView",
			// bindId: 'thumbnail',
			// properties:
			// {
				// width: 74,
				// height: 74,
				// left: 0,
				// top:0
			// }
		// },
		// {
			// type: "Ti.UI.Label",
			// bindId: 'name',
			// properties:
			// {
				// color: "black",
				// font: {fontSize: 18, fontFamily: "Arial", fontWeight: "bold"},
				// left: 30,
				// top: 5
			// }
		// },
		// {
			// type: "Ti.UI.Label",
			// bindId: 'realm',
			// properties:
			// {
				// color: "grey",
				// font: {fontSize: 14, fontFamily: "Arial"},
				// left: 30,
				// top: 40
			// }
		// },
		// {
			// type: "Ti.UI.Label",
			// bindId: 'level',
			// properties:
			// {
				// color: "grey",
				// font: {fontSize: 12, fontFamily: "Arial"},
				// right: 5,
				// top: 20
			// }
		// }
	// ]
// };
// 
// //API Object Info
// var secList = Ti.UI.createListSection({
// });
// var apiListView = Ti.UI.createListView({	
// //	search: search,
	// top:0,
	// templates:{'defaultTemplate': wowListTemplate},
	// defaultItemTemplate: 'defaultTemplate'
	// });
// 
// var data = [];
// 
// 
// 
// console.log(remote);
// console.log(remote.json);
// 
// console.log(wowAPI);
// console.log(remote.json.members.length);
// 
// 
// for (var i=0; i < remote.wowAPI[i].length; i++){
		// name = wowAPI.charcters.name;
		// specName = wowAPI.charcters.spec.name;
		// race = wowAPI.charcters.race;
		// level = wowAPI.charcters.level;
// //		thumbnail = 'http://us.battle.net/static-render/us/' + wowAPI.charcters.thumbnail;
		// description = wowAPI.charcters.spec.description;
		// role = wowAPI.charcters.spec.role;
	// data.push
	// ({
			// properties:
			// {
				// name: name,
				// specName: specName,
				// race: race,
				// level: level,
				// thumbnail: thumbnail,				
				// description: description,
				// role: role,
			// },	
				// name:
					// {
						// text: name
					// },
				// gender:
					// {
						// text: gender					
					// },
				// race:
					// {
						// text: race
					// },	
				// level:
					// {
						// text: level
					// },
				// thumbnail:
					// {
						// image: thumbnail
					// }
		// });
// };
// 
// 
// //Main Code
// secList.setItems(data);
// apiListView.sections = [secList];
// characterScroll.add(apiListView);
// curWin.add(characterScroll);
// curWin.open();