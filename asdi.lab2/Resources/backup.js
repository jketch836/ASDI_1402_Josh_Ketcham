
//APP.JS
	// var mWin = Ti.UI.createWindow({
		// backgroundColor: "#fff"
	// });
	// 
	// var view = Ti.UI.createView({
		// top:20,
		// height:'auto',
		// width: 'auto',
		// backgroundColor: "#333"
	// });
	// 
	// var pic = Ti.UI.createImageView({
		// top: '40dp',
		// height: '200dp',
		// width: '300dp',
		// image: 'guild_pic.jpg'
	// });
	// 
	// 
	// var user = Ti.UI.createTextField({
	    // top:'250dp',
	    // left:10,    
	    // height:40,
	    // width:300,
	    // color:'#000',    
	    // hintText:'Username',
	    // value: '',
	    // font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
	    // borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	// });
	// 
	// var pass = Ti.UI.createTextField({
	    // top:'300dp',
	    // left:10,
	    // height:40,
	    // width:300,
	    // color:'#000',
	    // hintText:'Password',
	    // passwordMask: true,
	    // value: '',
	    // font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
	    // borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	// });
	// 
	// //Enter App
	// var enterView = Ti.UI.createView({
		// backgroundColor: "#a0a6a2",
		// borderRadius: 5,
		// height: 40,
		// width: 100,
		// top: '350dp',
		// center: 0,
		// file: 'main_menu.js'
	// });
	// 
	// var enterLabel = Ti.UI.createLabel({
		// text: "Enter",
		// font: {fontSize: 15, fontFamily: "Helvetica", fontWeight: "bold"},
		// color: "#000",
		// center: 0,
		// file: 'main_menu.js'
	// });
	// enterView.add(enterLabel);
	//  
	// enterView.addEventListener('click', function(){
		// // if (user.value != '' & pass.value != ''){
			// // var alertDialog = Ti.UI.createAlertDialog({
	        	// // title: 'Login Successful',
	        	// // buttonNames: ['OK']
	   		// // });
	   		// var mainWindow = Titanium.UI.createWindow({  
				// title:'Main Menu',
				// backgroundColor: '#fff',
				// url:'main_menu.js'
			// });
			// mainWindow.open(mainWindow, {animate: true});
			// // alertDialog.show();
		// // } else {
			// // var alertDialogPTA = Ti.UI.createAlertDialog({
	    		// // title: 'Please try agin',
	        	// // buttonNames: ['OK']
	    	// // });	
	    	// // alertDialogPTA.show();
		// // }
	// });
	// 
	// //Main Code
	// view.add(pic, user, pass, enterView);
	// mWin.add(view);
	// mWin.open();
	
	
	
	
//MAIN_MENU.JS
	// var curWin = Ti.UI.currentWindow;
	// 
	// var lionPic = Ti.UI.createImageView({
		// top: '65dp',
		// height: 'auto',
		// width: '385dp',
		// image: 'backgroundlion.png'
	// });
	// 
	// var guildMemView = Ti.UI.createView({
		// backgroundColor: "#022d5a",
		// borderRadius: 10,
		// opacity: .8,
		// height: '150dp',
		// width: 'auto',
		// top: '100dp',
		// center: 0
	// });
	// 
	// var guildMemLabel = Ti.UI.createLabel({
		// text: "Council Roster",
		// font: {fontSize: 24, fontFamily: "Helvetica", fontWeight: "bold"},
		// color: '#fff',
		// center: 0
	// });
	// guildMemView.add(guildMemLabel);
	// 
	// guildMemView.addEventListener('click', function(){
		// var remote1 = require('remoteAPImem');
	// });
	// 
	// 
	// var aboutGuildView = Ti.UI.createView({
		// backgroundColor: "#c48c1b",
		// borderRadius: 10,
		// opacity: .8,
		// height: '150dp',
		// width: 'auto',
		// top: '270dp',
		// center: 0,
		// file: 'remoteAPIguild.js'
	// });
	// 
	// var aboutGuildLabel = Ti.UI.createLabel({
		// text: "About the Council",
		// font: {fontSize: 24, fontFamily: "Helvetica", fontWeight: "bold"},
		// color: "#fff",
		// center: 0,
		// file: 'remoteAPIguild.js'
	// });
	// aboutGuildView.add(aboutGuildLabel);
	// 
	// aboutGuildView.addEventListener('click', function(){
		// var remote2 = require('remoteAPIguild');
	// });
	// 
	// 
	// //Main Code
	// curWin.add(lionPic, guildMemView, aboutGuildView);
	// curWin.open();
	




//REMOTEAPImem.JS
	// var councilURL = 'http://us.battle.net/api/wow/guild/the-venture-co/The%20Council%20of%20judgement?fields=members';
	// 
	// // var racesURL = 'http://us.battle.net/api/wow/data/character/races';
	// 
	// var json;
	// var remoteResponse = function() {
		// json = JSON.parse(this.responseText);
	//     
		// var win = Ti.UI.createWindow({
		// });
	// 
		// var topView = Ti.UI.createView({
			// top: 20,
			// // borderRadius: 10,
			// backgroundColor: "#022d5a",
			// height: '40dp',
			// width: 'auto'
		// });
	// 
		// //Back Button Start
		// var backView = Ti.UI.createView({
			// backgroundColor: "#c48c1b",
			// // borderRadius: 10,
			// height: 40,
			// width: 80,
			// top: '0dp',
			// left: 0,
			// file: 'main_menu.js'
		// });
	// 	
		// var backLabel = Ti.UI.createLabel({
			// text: "Back",
			// font: {fontSize: 16, fontFamily: "Helvetica", fontWeight: "bold"},
			// color: "#fff",
			// center: 0,
			// file: 'main_menu.js'
		// });
		// backView.add(backLabel);
	// 	 
		// backView.addEventListener('click', function(){
		   		// var mainWindow = Ti.UI.createWindow({  
					// title:'Main Menu',
					// backgroundColor: '#fff',
					// url:'main_menu.js'
				// });
				// mainWindow.open(mainWindow, {animate: true});
		// });
		// //Back Button End
	// 	
		// var councilRoster = Ti.UI.createLabel({
			// top: '5dp',
			// right: '75dp',
			// text: "Guild Roster:",
			// color: "#fff",
			// font: {fontSize: 24, fontFamily: "Helvetica", fontStyle: 'bold', textAlign: 'center'}
		// });
		// topView.add(backView, councilRoster);
	// 
	    // var characterScroll = Ti.UI.createScrollView({
			// layout: 'vertical',
			// height: '530dp',
			// width: 320,
		    // top: 40,
		    // showVerticalScrollIndicator:true
		// });
	// 
		// wowListTemplate = {
			// properties:
				// {
				// top: 20,
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
						// left: 85,
						// top: 5
					// }
				// },
				// {
					// type: "Ti.UI.Label",
					// bindId: 'race',
					// properties:
					// {
						// color: "grey",
						// font: {fontSize: 14, fontFamily: "Arial"},
						// left: 85,
						// top: 35
					// }
				// },
				// {
					// type: "Ti.UI.Label",
					// bindId: 'description',
					// properties:
					// {
						// color: "black",
						// font: {fontSize: 8, fontFamily: "Arial"},
						// left: 5,
						// bottom: 5
					// },
				// },	
				// {
					// type: "Ti.UI.Label",
					// bindId: 'level',
					// properties:
					// {
						// color: "grey",
						// font: {fontSize: 14, fontFamily: "Arial"},
						// right: 10,
						// top: 10
					// }
				// },
				// {
					// type: "Ti.UI.Label",
					// bindId: 'role',
					// properties:
					// {
						// color: "grey",
						// font: {fontSize: 14, fontFamily: "Arial"},
						// right: 10,
						// top: 10
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
			// top:20,
			// // height: '500dp',
			// templates:{'defaultTemplate': wowListTemplate},
			// defaultItemTemplate: 'defaultTemplate'
			// });
	// 	
		// var data = [];
	// 	
	// 	
		// //console.log(wowAPI);
	// 	
	// 	
		// for (var i=0; i < json.members.length; i++){
				// name = json.members[i].character.name;
				// race = json.members[i].character.race;
				// // division = json.members[i].character['class'];
				// level = json.members[i].character.level;
				// thumbnail = 'http://us.battle.net/static-render/us/' + json.members[i].character.thumbnail;
				// // role = json.members[i].character.spec.role;
			// // console.log(desc);
			// data.push
			// ({
					// properties:
					// {
						// name: name,
						// race: race,
						// level: level,
						// thumbnail: thumbnail,
						// // division: division,		
						// // desc: desc,
						// // role: role
					// },	
						// name:
							// {
								// text: name
							// },	
						// race:
							// {
								// text: 'RACE: ' + race
							// },									
						// level:
							// {
								// text: 'LVL: ' + level
							// },
						// thumbnail:
							// {
								// image: thumbnail
							// },
						// // division:
							// // {
								// // text: division
							// // },						
						// // desc:
							// // {
								// // text: desc
							// // },					
						// // role:
							// // {
								// // text: 'ROLE: ' + role
							// // }					
				// });
	// 	
	// 			
			// // if (json.members[i].character.race == 1){
				 // // return 'Human';
			// // } else if (json.members[i].character.race == 3){
				// // return 'Dwarf';
			// // } else if (json.members[i].character.race == 4){
				// // return 'Night Elf';
			// // } else if (json.members[i].character.race == 7){
				// // return 'Gnome';
			// // } else if (json.members[i].character.race == 11){
				// // return 'Draenei';		
			// // } else if (json.members[i].character.race == 22){
				// // return 'Worgen';
			// // } else if (json.members[i].character.race == 25){
				// // return 'Pandaren';	
			// // }	
	// 		
				// // if (json.members[i].character['class'] == 0){
				 // // return 'No Class';
			// // } else if (json.members[i].character['class'] == 1){
				// // return 'Warrior';
			// // } else if (json.members[i].character['class'] == 2){
				// // return 'Paladin';
			// // } else if (json.members[i].character['class'] == 3){
				// // return 'Hunter';
			// // } else if (json.members[i].character['class'] == 4){
				// // return 'Rogue';		
			// // } else if (json.members[i].character['class'] == 5){
				// // return 'Priest';
			// // } else if (json.members[i].character['class'] == 6){
				// // return 'Death Knight';	
			// // } else if (json.members[i].character['class'] == 7){
				// // return 'Shaman';	
			// // } else if (json.members[i].character['class'] == 8){
				// // return 'Mage';	
			// // } else if (json.members[i].character['class'] == 9){
				// // return 'Warlock';	
			// // } else if (json.members[i].character['class'] == 10){
				// // return 'Monk';	
			// // } else if (json.members[i].character['class'] == 11){
				// // return 'Druid';	
			// // }						
		// };
			// //console.log(specName);
			// // console.log(json);
			// // console.log(json.members[i]);
			// // console.log(data);
		// secList.setItems(data);
		// apiListView.sections = [secList];
		// characterScroll.add(apiListView);
		// win.add(topView, characterScroll);
		// win.open();
	// };
	// 
	// 
	// 
	// var remoteError = function(e) {
	    // Ti.API.debug("Status: " + this.status);
	    // Ti.API.debug("Text: " + this.responseText);
	    // Ti.API.debug("Error: " + e.error);
	    // alert("There's a problem pulling remote data");
	// };
	// 
	// var xhr = Ti.Network.createHTTPClient({
	    // onload: remoteResponse,
	    // onerror: remoteError,
	    // timeout:5000
	// });
	// 
	// //Main Code
	// xhr.open('GET', councilURL);
	// xhr.send();
	
	
	


//REMOTEAPIguild.JS
	// var councilURL = 'http://us.battle.net/api/wow/guild/the-venture-co/The%20Council%20of%20judgement?fields=members';
	// 
	// // var racesURL = 'http://us.battle.net/api/wow/data/character/races';
	// 
	// var remoteResponse = function() {
		// var json = JSON.parse(this.responseText);
	//     
		// var win = Ti.UI.createWindow({
		// });
	// 
		// var topView = Ti.UI.createView({
			// top: 20,
			// // borderRadius: 10,
			// backgroundColor: "#022d5a",
			// height: 'auto',
			// width: 'auto'
		// });
	// 	
		// //Back Button Start
		// var backView = Ti.UI.createView({
			// backgroundColor: "#c48c1b",
			// // borderRadius: 10,
			// height: 40,
			// width: 80,
			// top: '0dp',
			// left: 0,
			// file: 'main_menu.js'
		// });
	// 	
		// var backLabel = Ti.UI.createLabel({
			// text: "Back",
			// font: {fontSize: 16, fontFamily: "Helvetica", fontWeight: "bold"},
			// color: "#fff",
			// center: 0,
			// file: 'main_menu.js'
		// });
		// backView.add(backLabel);
	// 	 
		// backView.addEventListener('click', function(){
		   		// var mainWindow = Ti.UI.createWindow({  
					// title:'Main Menu',
					// backgroundColor: '#fff',
					// url:'main_menu.js'
				// });
				// mainWindow.open(mainWindow, {animate: true});
		// });
		// //Back Button End
	// 	
		// var councilName = Ti.UI.createLabel({
			// top: '55dp',
			// center: '0dp',
			// text: json.name,
			// color: '#fff',
			// font: {fontSize: 24, fontFamily: "Helvetica", fontStyle: 'bold'}
		// });
	// 	
		// var picTabard = Ti.UI.createImageView({
			// top: '95dp',
			// height: '155dp',
			// width: '155dp',
			// image: 'guild_tabard.jpg'
		// });
	// 	
		// var councilLVL = Ti.UI.createLabel({
			// top: '260dp',
			// left: '30dp',
			// text: 'GUILD LVL: ' + json.level,
			// color: '#fff',
			// font: {fontSize: 18, fontFamily: "Helvetica", fontStyle: 'bold'}
		// });
	// 	
		// var councilRealm = Ti.UI.createLabel({
			// top: '300dp',
			// left: '30dp',
			// text: 'GUILD REALM: ' + json.realm,
			// color: '#fff',
			// font: {fontSize: 18, fontFamily: "Helvetica", fontStyle: 'bold'}
		// });
	// 	
		// var councilAcheive = Ti.UI.createLabel({
			// top: '340dp',
			// left: '30dp',
			// text: 'ACHIEVEMENT POINTS: ' + json.achievementPoints,
			// color: '#fff',
			// font: {fontSize: 18, fontFamily: "Helvetica", fontStyle: 'bold'}
		// });
	// 
		// var councilGroup = Ti.UI.createLabel({
			// top: '380dp',
			// left: '30dp',
			// text: 'BATTLE GROUP: ' + json.battlegroup,
			// color: '#fff',
			// font: {fontSize: 18, fontFamily: "Helvetica", fontStyle: 'bold'}
		// });
	// 
		// var councilSide = Ti.UI.createLabel({
			// top: '420dp',
			// left: '30dp',
			// text: 'GUILD SIDE: Alliance',
			// color: '#fff',
			// font: {fontSize: 18, fontFamily: "Helvetica", fontStyle: 'bold'}
		// });
		// topView.add(backView, councilName, picTabard, councilLVL, councilRealm, councilAcheive, councilGroup, councilSide);
		// win.add(topView);
		// win.open();
	// };
	// 
	// 
	// var remoteError = function(e) {
	    // Ti.API.debug("Status: " + this.status);
	    // Ti.API.debug("Text: " + this.responseText);
	    // Ti.API.debug("Error: " + e.error);
	    // alert("There's a problem pulling remote data");
	// };
	// 
	// var xhr = Ti.Network.createHTTPClient({
	    // onload: remoteResponse,
	    // onerror: remoteError,
	    // timeout:5000
	// });
	// 
	// //Main Code
	// xhr.open('GET', councilURL);
	// xhr.send();