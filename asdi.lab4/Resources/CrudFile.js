// var grimCov = Ti.include('RemoteListView.js');
// var coj = require('RemoteListView');
// var fav = require('favorites');

var data = Ti.Database.open('council');
var wowData = Ti.App.Properties.getString('wowData');
data.execute('CREATE TABLE IF NOT EXISTS council (id INTEGER PRIMARY KEY, name TEXT, division TEXT, level TEXT, acheive TEXT)');

var dataInfo = [];

var rowInfo = data.execute('SELECT * FROM council');

var name = rowInfo.fieldByName('name');
var division = rowInfo.fieldByName('division');
var level = rowInfo.fieldByName('level');
var acheive = rowInfo.fieldByName('acheive');
var id = rowInfo.fieldByName('id');

function insertData() {

	while (rowInfo.isValidRow()) {

		Ti.API.info(name);

		dataInfo.push({
				title : name + level,
				id : id
		});

		rowInfo.next();
	};

	return dataInfo;
};
var guildData = insertData();
exports.guildData = guildData;

exports.saveFunc = function() {
	var insertInfo = {
		gName : name,
		gDvision : division,
		gLvL : level,
		gAcheive : acheive
	};
	
	data.execute('INSERT INTO council (name, division, level, acheive) VALUES (?, ?, ?, ?)', insertInfo.gName, insertInfo.gDivision, insertInfo.gLvL, insertInfo.gAcheive);
};

// data.execute('SELECT * FROM council WHERE ID=?', id);

function editFunc () {
	var editDIA = Ti.UI.createAlertDialog({
		title : 'Edit/Delete',
		buttonNames : ['Edit', 'Delete', 'Cancel']
	});
	editDIA.show();
	editDIA.addEventListener('click', function(b) {
		if (b.index === 0) {
			data.execute('UPDATE council SET name, division, level, acheive WHERE id=?', name, division, level, acheive,id);
		} else if (b.index === 1) {
			data.execute('DELETE FROM council WHERE id=?', id);
			guildData;
			saveNav.close();
			savedWin.close();
			alert(name + ' is Deleted');
		} else {null;
		}
	});
};
exports.edit = editFunc; 