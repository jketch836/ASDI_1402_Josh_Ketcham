//APP.JS
	var table = require('RemoteTableView');
	var memSave = require('favorites');
	var remote = require('remoteAPI');
	// created tab group
	var theTabs = Ti.UI.createTabGroup();
	
	// created character tab
	var toonTab = Ti.UI.createTab({
		title : 'Council Members',
		window : table.tableWin
	});
	
	// created favorite tab
	var favTab = Ti.UI.createTab({
		title : 'Favorite Members',
		window : memSave.fWin
	});
	
	//Main Code
	theTabs.addTab(toonTab);
	theTabs.addTab(favTab);
	theTabs.open();

//REMOTEAPI.JS
	var table = require('RemoteTableView');
	
	var guildInfoURL = 'http://us.battle.net/api/wow/guild/the-venture-co/The%20Council%20of%20judgement?fields=members';
	
	var remoteResponse = function() {
		var json = JSON.parse(this.responseText);
		var data = [];
		for (var i = 0; i < json.members.length; i++) {
			name = json.members[i].character.name;
			division = json.members[i].character['class'];
			level = json.members[i].character.level;
			acheive = json.members[i].character.achievementPoints;
	
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
			
			var row = Ti.UI.createTableViewRow({
				name : name,
				level : level,
				acheive : acheive,
				division : division,
				title : name + "         " + division
			});
		
			// Ti.API.info("name: " + name);
			// Ti.API.info("division: " + division);
			// Ti.API.info("level: " + level);
			// Ti.API.info("acheive: " + acheive);
	
			data.push(row);
	
		};
			table.memTable.setData(data);
	};
	
	
	var remoteError = function(e) {
		Ti.API.debug("Status: " + this.status);
		Ti.API.debug("Text: " + this.responseText);
		Ti.API.debug("Error: " + e.error);
		alert("There is a problem pulling remote data");
	};
	
	var xhr = Ti.Network.createHTTPClient({
		onload : remoteResponse,
		onerror : remoteError,
		timeout : 5000
	});
	
	//Main Code
	xhr.open('GET', guildInfoURL);
	xhr.send();


// REMOTETABLEVIEW.JS
	var crud = require('CrudFile');
	
	//Window open
	var tableWin = Ti.UI.createWindow({
		title : 'Council Members',
		backgroundColor : '#fff'
	});
	exports.tableWin = tableWin;
	//Window end
	
	//pic open
	var picTabard = Ti.UI.createImageView({
		sheight : Ti.UI.setHeight,
		width : Ti.UI.setWidth,
		image : 'guild_tabard.png'
	});
	//pic end
	
	//search and table open
	var searchbar = Ti.UI.createSearchBar({
		top : 0,
		hintText : 'Search',
		barColor : '#fff'
	});
	
	var memTable = Titanium.UI.createTableView({
		search : searchbar,
		font : {
			fontStyle : 'Helvetica',
			fontSize : '12dp'
		},
		opacity : .8
	});
	exports.memTable = memTable;
	//search and table close
	
	//table eventlistener start
	memTable.addEventListener('click', function(e) {
		var name, division, level, achieve, comment;
		
		name = e.rowData.name;
		division = e.rowData.division;
		level = e.rowData.level;
		achieve = e.rowData.acheive;
		comment = e.rowData.comment;
		
		var savWin = Ti.UI.createWindow({
			title : name,
			backgroundColor : '#fff'
		});
	
		var savWinNav = Ti.UI.iOS.createNavigationWindow({
			window : savWin
		});
		// Window and nav end
	
		//image Begin
		var picTabard = Ti.UI.createImageView({
			height : Ti.UI.setHeight,
			width : Ti.UI.setWidth,
			image : 'guild_tabard.png',
			opacity : .2
		});
		//image End
	
		//Cancel Button Begin
		var cancelBTN = Ti.UI.createButton({
			systemButton : Ti.UI.iPhone.SystemButton.CANCEL
		});
	
		cancelBTN.addEventListener('click', function() {
			savWinNav.close();
			savWin.close();
		});
		//Cancel Button End
	
		//Labels Begin
		var nameView = Ti.UI.createLabel({
			top : '75dp',
			left : 35,
			text : 'Name: ' + name
		});
	
		var achView = Ti.UI.createLabel({
			top : '125dp',
			left : 35,
			text : 'Class: ' + division
		});
	
		var lvlView = Ti.UI.createLabel({
			top : '175dp',
			left : 35,
			text : 'Level: ' + level
		});
	
		var divView = Ti.UI.createLabel({
			top : '225dp',
			left : 35,
			text : 'Acheivment Points: ' + acheive
		});
	
		var commView = Ti.UI.createLabel({
			top : '275dp',
			left : 35,
			text : 'Comment: ' + comment
		});
		//Labels End
	
		//Save Button Begin
		var saveBTN = Ti.UI.createButton({
			systemButton : Ti.UI.iPhone.SystemButton.SAVE
		});
		saveBTN.addEventListener('click', function() {
			//calling edit func from CrudFile
			crud.saveFunc(name, division, level, acheive);
			// console.log(name);
			//closing window and nav
			savWin.close();
			savWinNav.close();
		});
	
		//table event listener main Code
		savWin.setRightNavButton(saveBTN);
		savWin.setLeftNavButton(cancelBTN);
		savWin.add(nameView, lvlView, achView, divView, commView);
		savWinNav.open();
	});
	//table eventlistener end
	
	//Main Code
	tableWin.add(picTabard, memTable);
	tableWin.open();


// CRUDFILE.JS
	var data = Ti.Database.open('council');
	var wowData = Ti.App.Properties.getString('wowData');
	data.execute('CREATE TABLE IF NOT EXISTS council (id INTEGER PRIMARY KEY, name TEXT, division TEXT, level TEXT, acheive TEXT, comment TEXT)');
	
	function insertData() {
		var dataInfo = [];
	
		var rowInfo = data.execute('SELECT * FROM council');
	
		while (rowInfo.isValidRow()) {
			var name = rowInfo.fieldByName('name');
			var division = rowInfo.fieldByName('division');
			var level = rowInfo.fieldByName('level');
			var acheive = rowInfo.fieldByName('acheive');
			// var comment = rowInfo.fieldByName('comment');
			var id = rowInfo.fieldByName('id');
			console.log(name);
			dataInfo.push({
				name : name,
				level : level,
				acheive : acheive,
				division : division,
				title : name + "         " + division,
				id : id
			});
	
			Ti.API.info('End row ' + id + ' look');
	
			Ti.API.info('=========================');
	
			rowInfo.next();
		};
		return dataInfo;
	};
	var guildData = insertData();
	exports.guildData = guildData;
	
	// console.log(guildData);
	
	var saveFunc = function(name, division, level, acheive, comment) {
		input = {};
		input.gname = name;
		input.div = division;
		input.lvl = level;
		input.ach = acheive;
		input.com = comment;
		console.log(input.ach);
		data.execute('INSERT INTO council (name, division, level, acheive, comment) VALUES (?, ?, ?, ?, ?)', input.gname, input.div, input.lvl, input.ach, input.com);
		//alert
		alert(name + " is saved");
	};
	exports.saveFunc = saveFunc;
	
	function editFunc(a, id) {
	
	// comment text field begin
		var comment = Ti.UI.createTextField({
			top : '275dp',
			right : 50,
			height : 25,
			width : 150,
			color : '#000',
			autocorret : false,
			font : {
				fontSize : 12,
				fontWeight : 'bold',
				fontFamily : 'Helvetica'
			},
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			borderColor : "#000"
		});
		// comment text field end
	
		var id = id;
	
		var insert_com = data.execute('SELECT * FROM council WHERE ID=?', id);
	
		input = {};
		input.gname = insert_com.fieldByName('name');
		input.div = insert_com.fieldByName('division');
		input.lvl = insert_com.fieldByName('level');
		input.ach = insert_com.fieldByName('acheive');
		input.com = insert_com.fieldByName('comment');
		input.id = insert_com.fieldByName('id');
	
		console.log(input.id);
	
		// Window and nav begin
		var editWin = Ti.UI.createWindow({
			title : input.gname,
			backgroundColor : '#fff'
		});
	
		var editWinNav = Ti.UI.iOS.createNavigationWindow({
			window : editWin
		});
		// Window and nav end
	
		//Cancel Button Begin
		var cancelBTN = Ti.UI.createButton({
			systemButton : Ti.UI.iPhone.SystemButton.CANCEL
		});
	
		cancelBTN.addEventListener('click', function() {
			editWinNav.close();
			editWin.close();
		});
		//Cancel Button End
	
		//Labels Begin
		var nameView = Ti.UI.createLabel({
			top : '75dp',
			left : 35,
			text : 'Name: ' + input.gname
		});
	
		var achView = Ti.UI.createLabel({
			top : '125dp',
			left : 35,
			text : 'Class: ' + input.div
		});
	
		var lvlView = Ti.UI.createLabel({
			top : '175dp',
			left : 35,
			text : 'Level: ' + input.lvl
		});
	
		var divView = Ti.UI.createLabel({
			top : '225dp',
			left : 35,
			text : 'Acheivment Points: ' + input.ach
		});
	
		var commView = Ti.UI.createLabel({
			top : '275dp',
			left : 35,
			text : 'Comment: '
		});
		//Labels End
	
		//Save Button Begin
		var saveBTN = Ti.UI.createButton({
			systemButton : Ti.UI.iPhone.SystemButton.SAVE
		});
		saveBTN.addEventListener('click', function() {
			//calling save func
			saveFunc(input.gname, input.div, input.lvl, input.ach, input.com);
			editWin.close();
			editWinNav.close();
			alert(name + " is updated");
		});
		//Save Button End
	
		//Delete func begin
		function delFunc(a) {
	
			data.execute('DELETE FROM council WHERE id=?', id); guildData;
	
		};
		//Delete func end
	
		//Delete Button Begin
		var deleteBTN = Ti.UI.createButton({
			top : '310dp',
			center : 0,
			title : "Delete",
			style : Ti.UI.iPhone.SystemButtonStyle.ACTION,
			font : {
				fontWeight : 'bold',
				fontSize : 18,
				fontFamily : 'Helvetica'
			},
			color : '#EE2C2C'
		});
		deleteBTN.addEventListener('click', function() {
			//calling delete func
			delFunc();
			editWin.close();
			editWinNav.close();
			alert(name + " is gone");
		});
		//Delete Button End
	
		editWin.setRightNavButton(saveBTN);
		editWin.setLeftNavButton(cancelBTN);
		editWin.add(nameView, lvlView, achView, divView, commView, comment, deleteBTN);
		editWinNav.open();
	
		data.execute('UPDATE council SET name, division, level, acheive, comment WHERE id=?', input.gname, input.div, input.lvl, input.ach, input.com, input.id);
		guildData;
	};
	exports.editFunc = editFunc;


// FAVORITES.JS
	var crud = require('CrudFile');
	
	var fWin = Ti.UI.createWindow({
		title : 'Favorite Members',
		backgroundColor : '#fff'
	});
	exports.fWin = fWin;
	
	var picTabard = Ti.UI.createImageView({
		height : Ti.UI.setHeight,
		width : Ti.UI.setWidth,
		image : 'guild_tabard.png'
	});
	
	var searchbar = Ti.UI.createSearchBar({
		top : 0,
		hintText : 'Search',
		barColor : '#fff'
	});
	
	var saveMem = Titanium.UI.createTableView({
		search : searchbar,
		font : {
			fontStyle : 'Helvetica',
			fontSize : '12dp'
		},
		opacity : .8
	});
	
	saveMem.addEventListener('click', function(e) {
		var name, division, level, achieve, comment, id;
	
		name = e.rowData.name;
		division = e.rowData.division;
		level = e.rowData.level;
		achieve = e.rowData.acheive;
		comment = e.rowData.comment;
		id = e.rowData.id;
	
		// Window and nav begin
		var savWin = Ti.UI.createWindow({
			title : name,
			backgroundColor : '#fff'
		});
	
		var savWinNav = Ti.UI.iOS.createNavigationWindow({
			window : savWin
		});
		// Window and nav end
	
		//image Begin
		var picTabard = Ti.UI.createImageView({
			height : Ti.UI.setHeight,
			width : Ti.UI.setWidth,
			image : 'guild_tabard.png',
			opacity : .2
		});
		//image End
	
		//Cancel Button Begin
		var cancelBTN = Ti.UI.createButton({
			systemButton : Ti.UI.iPhone.SystemButton.CANCEL
		});
	
		cancelBTN.addEventListener('click', function() {
			savWinNav.close();
			savWin.close();
		});
		//Cancel Button End
	
		//Labels Begin
		var nameView = Ti.UI.createLabel({
			top : '75dp',
			left : 35,
			text : 'Name: ' + name
		});
	
		var achView = Ti.UI.createLabel({
			top : '125dp',
			left : 35,
			text : 'Class: ' + division
		});
	
		var lvlView = Ti.UI.createLabel({
			top : '175dp',
			left : 35,
			text : 'Level: ' + level
		});
	
		var divView = Ti.UI.createLabel({
			top : '225dp',
			left : 35,
			text : 'Acheivment Points: ' + acheive
		});
	
		var commView = Ti.UI.createLabel({
			top : '275dp',
			left : 35,
			text : 'Comment: ' + comment
		});
		//Labels End
	
		//Save Button Begin
		var editBTN = Ti.UI.createButton({
			systemButton : Ti.UI.iPhone.SystemButton.EDIT
		});
		editBTN.addEventListener('click', function() {
			crud.editFunc(id);
		});
		//Save Button End
	
		savWin.setRightNavButton(editBTN);
		savWin.setLeftNavButton(cancelBTN);
		savWin.add(nameView, lvlView, achView, divView, commView);
		savWinNav.open();
	});
	
	// Main Code
	saveMem.setData(crud.guildData);
	fWin.add(picTabard, saveMem);
	fWin.open();