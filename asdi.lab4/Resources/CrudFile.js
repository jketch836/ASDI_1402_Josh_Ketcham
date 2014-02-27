// var grimCov = Ti.include('RemoteListView.js');
// var coj = require('RemoteListView');
// var fav = require('favorites');

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

		Ti.API.info('End row ' + id + ' look');

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


var editWin = function() {

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

	memWin.setRightNavButton(saveBTN);
	memWin.setLeftNavButton(cancelBTN);
	memWin.add(nameView, lvlView, achView, divView);
	memWinNav.open();
};
exports.editWin = editWin;


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
// data.execute('DELETE FROM covenant WHERE id=?', id);
//
// alert('Member is Deleted');
// } else {null;
// }
// });
// };
// exports.editFunc = editFunc;

