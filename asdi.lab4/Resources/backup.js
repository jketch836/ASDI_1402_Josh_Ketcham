//APP.JS
var table = require('RemoteTableView');
var memSave = require('favorites');

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
var crud = require('CrudFile');

var guildInfoURL = 'http://us.battle.net/api/wow/guild/the-venture-co/The%20Council%20of%20judgement?fields=members';

var remoteResponse = function() {
	var json = JSON.parse(this.responseText);

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

		Ti.API.info("name: " + name);
		Ti.API.info("division: " + division);
		Ti.API.info("level: " + level);
		Ti.API.info("acheive: " + acheive);

		crud.saveFunc(name, division, level, acheive);

	};

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
xhr.open('GET', covenantURL);
xhr.send(); 

// REMOTELISTVIEW.JS
var crud = require('CrudFile');

var tableWin = Ti.UI.createWindow({
	title : 'Council Members',
	backgroundColor : '#fff'
});
exports.tableWin = tableWin;

var picTabard = Ti.UI.createImageView({
	sheight : Ti.UI.setHeight,
	width : Ti.UI.setWidth,
	image : 'guild_tabard.png'
});

var searchbar = Ti.UI.createSearchBar({
	top : 0,
	hintText : 'Search',
	barColor : '#fff'
});

var memTable = Titanium.UI.createTableView({
	top : '44dp',
	search : searchbar,
	font : {
		fontStyle : 'Helvetica',
		fontSize : '12dp'
	},
	opacity : .8
});

memTable.addEventListener('click', function(e) {
	crud.editWin();
	// console.log(e.rowData.name);
	// console.log(e.rowData.division);
	// console.log(e.rowData.level);
	// console.log(e.rowData.acheive);
	// console.log(e.rowData.title);
});

memTable.setData(crud.guildData);
// tableWin.add(searchbar);
tableWin.add(picTabard, searchbar, memTable);
tableWin.open();

// CRUDFILE.JS
var data = Ti.Database.open('council');
var wowData = Ti.App.Properties.getString('wowData');
data.execute('CREATE TABLE IF NOT EXISTS council (id INTEGER PRIMARY KEY, name TEXT, division TEXT, level TEXT, acheive TEXT)');

function insertData() {
	var dataInfo = [];

	var rowInfo = data.execute('SELECT * FROM council');

	while (rowInfo.isValidRow()) {
		var name = rowInfo.fieldByName('name');
		var division = rowInfo.fieldByName('division');
		var level = rowInfo.fieldByName('level');
		var acheive = rowInfo.fieldByName('acheive');
		var id = rowInfo.fieldByName('id');

		dataInfo.push({
			name : name,
			level : level,
			acheive : acheive,
			division : division,
			title : name + "      " + division + "      " + level,
			id : id
		});

		Ti.API.info('End row ' + dataInfo + ' look');

		Ti.API.info('=========================');

		rowInfo.next();
	};
	return dataInfo;
};
var guildData = insertData();
exports.guildData = guildData;

console.log(guildData);

var saveFunc = function(name, division, level, acheive) {
	input = {};
	input.gname = name;
	input.div = division;
	input.lvl = level;
	input.ach = acheive;
	data.execute('INSERT INTO council (name, division, level, acheive) VALUES (?, ?, ?, ?)', input.gname, input.div, input.lvl, input.ach);
};
exports.saveFunc = saveFunc;

exports.select = function(a) {
	var id = a.rowData.id;
	input = {};
	input.gname = name;
	input.div = division;
	input.lvl = level;
	input.ach = acheive;
	input.id = id;
	data.execute('SELECT * FROM council WHERE ID=?', id);
};

function editFunc() {
	input = {};
	input.gname = name;
	input.div = division;
	input.lvl = level;
	input.ach = acheive;
	input.id = id;
	data.execute('UPDATE council SET name, division, level, acheive WHERE id=?', input.gname, input.div, input.lvl, input.ach, input.id);
	guildData;
};
exports.edit = editFunc;

function delFunc() {
	data.execute('DELETE FROM council WHERE id=?', id);
	guildData;
};
exports.del = delFunc;

exports.editWin = function() {

	input = {};
	input.gname = name;
	input.div = division;
	input.lvl = level;
	input.ach = acheive;

	var memWin = Ti.UI.createWindow({
		title : input.gname,
		backgroundColor : '#fff'
	});

	var memWinNav = Ti.UI.iOS.createNavigationWindow({
		window : memWin
	});

	var cancelBTN = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.CANCEL
	});

	cancelBTN.addEventListener('click', function() {
		memWinNav.close();
		memWin.close();
	});

	var nameView = Ti.UI.createLabel({
		top : '75dp',
		left : 35,
		text : 'Name: ' + input.gname
	});

	var lvlView = Ti.UI.createLabel({
		top : '175dp',
		left : 35,
		text : 'Level: ' + input.lvl
	});

	var achView = Ti.UI.createLabel({
		top : '125dp',
		left : 35,
		text : 'Acheivment Points: ' + input.ach
	});

	var divView = Ti.UI.createLabel({
		top : '225dp',
		left : 35,
		text : 'Class: ' + input.div
	});
	var saveBTN = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.SAVE
	});
	saveBTN.addEventListener('click', function() {
		saveFunc();
		memWin.close();
		memWinNav.close();
		alert(name + " is saved");
	});

	var deleteBTN = Ti.UI.createButton({
		top : 290,
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
		delFunc();
		memWin.close();
		memWinNav.close();
		alert(name + " is deleted");
	});

	memWin.setRightNavButton(saveBTN);
	memWin.setLeftNavButton(cancelBTN);
	memWin.add(nameView, lvlView, achView, divView);
	memWinNav.open();
};

// var editFunc = function() {
// var editDIA = Ti.UI.createAlertDialog({
// title : 'Edit/Delete',
// buttonNames : ['Edit', 'Delete', 'Cancel']
// });
// editDIA.show();
// editDIA.addEventListener('click', function(b) {
// if (b.index === 0) {
// input = {};
// input.gname = name;
// input.div = division;
// input.lvl = level;
// input.ach = acheive;
// input.id = id;
// editWin();
// data.execute('UPDATE council SET name, division, level, acheive WHERE id=?', input.gname, input.div, input.lvl, input.ach, input.id);
// guildData;
//
// } else if (b.index === 1) {
// data.execute('DELETE FROM council WHERE id=?', id);
//
// alert('Member is Deleted');
// } else {null;
// }
// });
// };
// exports.editFunc = editFunc;

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

var saveMem = Titanium.UI.createTableView({
	font : {
		fontStyle : 'Helvetica',
		fontSize : '12dp'
	},
	opacity : .8
});

var data = [];

saveMem.addEventListener('click', function() {
	// crud.editWin();
});

// Main Code
saveMem.setData(data);
fWin.add(picTabard, saveMem);
fWin.open();